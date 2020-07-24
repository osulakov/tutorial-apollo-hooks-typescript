import React from 'react';
import { useMutation, useQuery} from '@apollo/client';
import { 
    CREATE_ACCOUNT,
    SEARCH_ACCOUNTS,
    GET_ACCOUNTS 
} from '../apollo/queries';
import { 
    Accounts,
    Mutation_Root,
    Accounts_Mutation_Response
} from '../apollo/schema';

import { getRandomName } from '../libraries/GetRandomName';

const name = getRandomName(3);

const newAccount: Accounts = {
    channel: "DISPLAY",
    name: name,
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
        
        console.log(data)
    }
    
    return (
        <div>
            <button onClick={() => saveAccount()}>Add Account</button>
            <TestSearch />
            <GetAccounts />
        </div>
    )
}

export default Account;

const searchStr = "Blue"


const TestSearch = () => {
    const { loading, error, data } = useQuery(SEARCH_ACCOUNTS, {variables: {searchString: `%${searchStr}%`}})
 
    if (loading) return <>'Loading...'</>
    if (error) return <>'Something Bad Happened'</>
    console.log('Test Search Accounts Data', data)
    return (
        <div>
            Test Search Accounts
        </div>
    )
}

const GetAccounts = () => {
    const { loading, error, data } = useQuery(GET_ACCOUNTS)
 
    if (loading) return <>'Loading...'</>
    if (error) return <>'Something Bad Happened'</>
    console.log('Get Accounts data', data)
    return (
        <div>
            Get Accounts
        </div>
    )
}





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