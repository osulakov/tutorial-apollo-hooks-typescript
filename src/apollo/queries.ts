import  gql  from 'graphql-tag';

import {Accounts}  from './schema';


export const CREATE_ACCOUNT = gql`
    mutation CreateAccount (
            $channel: String!, 
            $name: String!, 
            $payment_terms: String!, 
            $region: String!, 
            $status: String!, 
            $tier: String!, 
            $type: String!, 
            $vertical: String!,
        ) {
        insert_accounts(objects: [{
            channel: $channel,
            name: $name,
            payment_terms: $payment_terms,
            region: $region, 
            status: $status, 
            tier: $tier, 
            type: $type, 
            vertical: $vertical,

        }]
        ) {
            affected_rows
            returning {
                id
            }
        }
    }
`;


export const SEARCH_ACCOUNTS = gql`
    query SearchAccounts ($searchString: String!) {
        accounts (
            where: {
                _or: [
                    {name: {_like: $searchString}},
                    {channel: {_like: $searchString}},
                    {payment_terms: {_like: $searchString}},
                    # {reqion: {_like: $searchString}}, // ? we need to see , searching is not working with this condition
                    {tier: {_like: $searchString}},
                    {type: {_like: $searchString}},
                    {vertical: {_like: $searchString}},
                    {status: {_like: $searchString}}
                ]
            }
        ) {
            id
            name
            status
            type
            vertical
            tier
            region
            payment_terms
            channel
            account_manager
            advertiser_blocks
            bill_to
            billing_city
            billing_contact_city
            billing_contact_country
            billing_contact_email
            billing_contact_name
            billing_contact_phone_number
            billing_contact_postal_code
            billing_contact_region_state
            billing_contact_street
            billing_contact_title
            billing_country
            billing_postal_code
            billing_region_state
            channel_blocks
            billing_street
            child_pixel_id
            click_attribution_window
            click_lift_percentage
            connection_method
            created_at
            credit_limit
            currency
            destination_country
            destination_postal_code
            external_id
            integration_contact_email
            integration_contact_name
            integration_contact_phone_number
            integration_contact_title
            inventory_whitelist_blacklist
            market_area_cities
            market_area_countries
            parent_account_id
            parent_pixel_id
            payment_method
            sales_rep
            sfdc_account_id
            tags
            time_zone
            updated_at
            vertical_blocks
            view_attribution_window
            view_lift_percentage
        }
    }
`;

export const GET_ACCOUNTS = gql`
    query GetAccounts {
        accounts {
            id
            name
            status
            type
            vertical
            tier
            region
            payment_terms
            channel
            account_manager
            advertiser_blocks
            bill_to
            billing_city
            billing_contact_city
            billing_contact_country
            billing_contact_email
            billing_contact_name
            billing_contact_phone_number
            billing_contact_postal_code
            billing_contact_region_state
            billing_contact_street
            billing_contact_title
            billing_country
            billing_postal_code
            billing_region_state
            channel_blocks
            billing_street
            child_pixel_id
            click_attribution_window
            click_lift_percentage
            connection_method
            created_at
            credit_limit
            currency
            destination_country
            destination_postal_code
            external_id
            integration_contact_email
            integration_contact_name
            integration_contact_phone_number
            integration_contact_title
            inventory_whitelist_blacklist
            market_area_cities
            market_area_countries
            parent_account_id
            parent_pixel_id
            payment_method
            sales_rep
            sfdc_account_id
            tags
            time_zone
            updated_at
            vertical_blocks
            view_attribution_window
            view_lift_percentage
        }
    }
`;