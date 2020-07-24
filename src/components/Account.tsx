import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { CREATE_ACCOUNT } from '../apollo/queries';
import { 
    Accounts,
    Mutation_Root,
    Accounts_Mutation_Response
} from '../apollo/schema';


const newAccount: Accounts = {
    channel: "DISPLAY",
    name: "MY REAL HOTEL)))",
    payment_terms: "CREDIT_CARD",
    region: "NA",
    status: "ACTIVE",
    tier: "ORANGE",
    type: "ADVERTISER",
    vertical: "HOTEL"
}
console.log(newAccount)



const Account = () => {
    const [saveAccount, {error, data}] = useMutation<
        {CreateAccount: Mutation_Root}
    >(CREATE_ACCOUNT, {
        variables: newAccount
    })
    //const [saveAccount, {error, data}] = useMutation(CREATE_ACCOUNT)
    if(data) {
        //console.log(data.insert_accounts.returning[0].id)
        console.log(data)
    }
    
    return (
        <div>
            <button onClick={() => saveAccount()}>Add Account</button>
        </div>
    )
}

export default Account;





// const CREATE_ACCOUNT1 = gql`
//     mutation CreateAccount {
//         insert_accounts(objects: {
//             channel: "DISPLAY",
//             name: "MY REAL HOTEL)))",
//             payment_terms: "CREDIT_CARD",
//             region: "NA",
//             status: "ACTIVE",
//             tier: "ORANGE",
//             type: "ADVERTISER",
//             vertical: "HOTEL"
//         }) {
//             returning {
//                 id
//             }
//         }
//     }
// `;

// const CREATE_ACCOUNT8 = gql`
//     mutation CreateAccount {
//         insert_accounts(objects: {
//             channel: "DISPLAY",
//             name: "MY REAL HOTEL)))",
//             payment_terms: "CREDIT_CARD",
//             region: "NA",
//             status: "ACTIVE",
//             tier: "ORANGE",
//             type: "ADVERTISER",
//             vertical: "HOTEL"
//         }) {
//             returning {
//                 id
//             }
//         }
//     }
// `;



// const CREATE_ACCOUNT2 = gql`
//     mutation CreateAccount ($account: accounts!) {
//         insert_accounts(objects: $account) {
//             affected_rows
//             returning {
//                 id
//             }
//         }
//     }
// `;

// interface IAccount {
//     channel: string,
//     name: string,
//     payment_terms: string,
//     region: string,
//     status: string,
//     tier: string,
//     type: string,
//     vertical: string
// }