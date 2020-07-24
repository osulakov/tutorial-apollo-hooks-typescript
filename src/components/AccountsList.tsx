import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ACCOUNTS } from '../apollo/queries';
import { Accounts } from '../apollo/schema';

import Account from './Account';

export const props = {
    data: []
}

const AccountsList = () => {

    // Query results, injected by the query HOC
    const { data, loading, error } = useQuery(GET_ACCOUNTS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const accounts: Accounts[] = data.accounts;
        console.log('got all accounts', accounts)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Tier</td>
                        <td>region</td>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account: Accounts) => (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.name}</td>
                            <td>{account.status}</td>
                            <td>{account.tier}</td>
                            <td>{account.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Account />
        </div>
    )
}

export default AccountsList;