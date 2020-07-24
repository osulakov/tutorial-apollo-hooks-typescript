export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  smallint: any;
  timestamptz: any;
};

export type Account_Channels = {
  __typename?: 'account_channels';
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


export type Account_ChannelsAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Account_ChannelsAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Account_Channels_Aggregate = {
  __typename?: 'account_channels_aggregate';
  aggregate?: Maybe<Account_Channels_Aggregate_Fields>;
  nodes: Array<Account_Channels>;
};

export type Account_Channels_Aggregate_Fields = {
  __typename?: 'account_channels_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Channels_Max_Fields>;
  min?: Maybe<Account_Channels_Min_Fields>;
};


export type Account_Channels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Channels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Account_Channels_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Channels_Max_Order_By>;
  min?: Maybe<Account_Channels_Min_Order_By>;
};

export type Account_Channels_Arr_Rel_Insert_Input = {
  data: Array<Account_Channels_Insert_Input>;
  on_conflict?: Maybe<Account_Channels_On_Conflict>;
};

export type Account_Channels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Account_Channels_Bool_Exp>>>;
  _not?: Maybe<Account_Channels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Channels_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Account_Channels_Constraint {
  AccountChannelsPkey = 'account_channels_pkey'
}

export type Account_Channels_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Channels_Max_Fields = {
  __typename?: 'account_channels_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Channels_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Channels_Min_Fields = {
  __typename?: 'account_channels_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Channels_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Channels_Mutation_Response = {
  __typename?: 'account_channels_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Account_Channels>;
};

export type Account_Channels_Obj_Rel_Insert_Input = {
  data: Account_Channels_Insert_Input;
  on_conflict?: Maybe<Account_Channels_On_Conflict>;
};

export type Account_Channels_On_Conflict = {
  constraint: Account_Channels_Constraint;
  update_columns: Array<Account_Channels_Update_Column>;
  where?: Maybe<Account_Channels_Bool_Exp>;
};

export type Account_Channels_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Channels_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Account_Channels_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Channels_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Account_Channels_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Payment_Terms = {
  __typename?: 'account_payment_terms';
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


export type Account_Payment_TermsAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Account_Payment_TermsAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Account_Payment_Terms_Aggregate = {
  __typename?: 'account_payment_terms_aggregate';
  aggregate?: Maybe<Account_Payment_Terms_Aggregate_Fields>;
  nodes: Array<Account_Payment_Terms>;
};

export type Account_Payment_Terms_Aggregate_Fields = {
  __typename?: 'account_payment_terms_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Payment_Terms_Max_Fields>;
  min?: Maybe<Account_Payment_Terms_Min_Fields>;
};


export type Account_Payment_Terms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Payment_Terms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Account_Payment_Terms_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Payment_Terms_Max_Order_By>;
  min?: Maybe<Account_Payment_Terms_Min_Order_By>;
};

export type Account_Payment_Terms_Arr_Rel_Insert_Input = {
  data: Array<Account_Payment_Terms_Insert_Input>;
  on_conflict?: Maybe<Account_Payment_Terms_On_Conflict>;
};

export type Account_Payment_Terms_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Account_Payment_Terms_Bool_Exp>>>;
  _not?: Maybe<Account_Payment_Terms_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Payment_Terms_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Account_Payment_Terms_Constraint {
  AccountPaymentTermsPkey = 'account_payment_terms_pkey'
}

export type Account_Payment_Terms_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Payment_Terms_Max_Fields = {
  __typename?: 'account_payment_terms_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Payment_Terms_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Payment_Terms_Min_Fields = {
  __typename?: 'account_payment_terms_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Payment_Terms_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Payment_Terms_Mutation_Response = {
  __typename?: 'account_payment_terms_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Account_Payment_Terms>;
};

export type Account_Payment_Terms_Obj_Rel_Insert_Input = {
  data: Account_Payment_Terms_Insert_Input;
  on_conflict?: Maybe<Account_Payment_Terms_On_Conflict>;
};

export type Account_Payment_Terms_On_Conflict = {
  constraint: Account_Payment_Terms_Constraint;
  update_columns: Array<Account_Payment_Terms_Update_Column>;
  where?: Maybe<Account_Payment_Terms_Bool_Exp>;
};

export type Account_Payment_Terms_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Payment_Terms_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Account_Payment_Terms_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Payment_Terms_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Account_Payment_Terms_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Regions = {
  __typename?: 'account_regions';
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


export type Account_RegionsAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Account_RegionsAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Account_Regions_Aggregate = {
  __typename?: 'account_regions_aggregate';
  aggregate?: Maybe<Account_Regions_Aggregate_Fields>;
  nodes: Array<Account_Regions>;
};

export type Account_Regions_Aggregate_Fields = {
  __typename?: 'account_regions_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Regions_Max_Fields>;
  min?: Maybe<Account_Regions_Min_Fields>;
};


export type Account_Regions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Regions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Account_Regions_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Regions_Max_Order_By>;
  min?: Maybe<Account_Regions_Min_Order_By>;
};

export type Account_Regions_Arr_Rel_Insert_Input = {
  data: Array<Account_Regions_Insert_Input>;
  on_conflict?: Maybe<Account_Regions_On_Conflict>;
};

export type Account_Regions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Account_Regions_Bool_Exp>>>;
  _not?: Maybe<Account_Regions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Regions_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Account_Regions_Constraint {
  AccountRegionsPkey = 'account_regions_pkey'
}

export type Account_Regions_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Regions_Max_Fields = {
  __typename?: 'account_regions_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Regions_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Regions_Min_Fields = {
  __typename?: 'account_regions_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Regions_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Regions_Mutation_Response = {
  __typename?: 'account_regions_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Account_Regions>;
};

export type Account_Regions_Obj_Rel_Insert_Input = {
  data: Account_Regions_Insert_Input;
  on_conflict?: Maybe<Account_Regions_On_Conflict>;
};

export type Account_Regions_On_Conflict = {
  constraint: Account_Regions_Constraint;
  update_columns: Array<Account_Regions_Update_Column>;
  where?: Maybe<Account_Regions_Bool_Exp>;
};

export type Account_Regions_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Regions_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Account_Regions_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Regions_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Account_Regions_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Statuses = {
  __typename?: 'account_statuses';
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


export type Account_StatusesAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Account_StatusesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Account_Statuses_Aggregate = {
  __typename?: 'account_statuses_aggregate';
  aggregate?: Maybe<Account_Statuses_Aggregate_Fields>;
  nodes: Array<Account_Statuses>;
};

export type Account_Statuses_Aggregate_Fields = {
  __typename?: 'account_statuses_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Statuses_Max_Fields>;
  min?: Maybe<Account_Statuses_Min_Fields>;
};


export type Account_Statuses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Statuses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Account_Statuses_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Statuses_Max_Order_By>;
  min?: Maybe<Account_Statuses_Min_Order_By>;
};

export type Account_Statuses_Arr_Rel_Insert_Input = {
  data: Array<Account_Statuses_Insert_Input>;
  on_conflict?: Maybe<Account_Statuses_On_Conflict>;
};

export type Account_Statuses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Account_Statuses_Bool_Exp>>>;
  _not?: Maybe<Account_Statuses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Statuses_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Account_Statuses_Constraint {
  AccountStatusesPkey = 'account_statuses_pkey'
}

export type Account_Statuses_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Statuses_Max_Fields = {
  __typename?: 'account_statuses_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Statuses_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Statuses_Min_Fields = {
  __typename?: 'account_statuses_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Statuses_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Statuses_Mutation_Response = {
  __typename?: 'account_statuses_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Account_Statuses>;
};

export type Account_Statuses_Obj_Rel_Insert_Input = {
  data: Account_Statuses_Insert_Input;
  on_conflict?: Maybe<Account_Statuses_On_Conflict>;
};

export type Account_Statuses_On_Conflict = {
  constraint: Account_Statuses_Constraint;
  update_columns: Array<Account_Statuses_Update_Column>;
  where?: Maybe<Account_Statuses_Bool_Exp>;
};

export type Account_Statuses_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Statuses_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Account_Statuses_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Statuses_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Account_Statuses_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Tiers = {
  __typename?: 'account_tiers';
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


export type Account_TiersAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Account_TiersAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Account_Tiers_Aggregate = {
  __typename?: 'account_tiers_aggregate';
  aggregate?: Maybe<Account_Tiers_Aggregate_Fields>;
  nodes: Array<Account_Tiers>;
};

export type Account_Tiers_Aggregate_Fields = {
  __typename?: 'account_tiers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Tiers_Max_Fields>;
  min?: Maybe<Account_Tiers_Min_Fields>;
};


export type Account_Tiers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Tiers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Account_Tiers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Tiers_Max_Order_By>;
  min?: Maybe<Account_Tiers_Min_Order_By>;
};

export type Account_Tiers_Arr_Rel_Insert_Input = {
  data: Array<Account_Tiers_Insert_Input>;
  on_conflict?: Maybe<Account_Tiers_On_Conflict>;
};

export type Account_Tiers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Account_Tiers_Bool_Exp>>>;
  _not?: Maybe<Account_Tiers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Tiers_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Account_Tiers_Constraint {
  AccountTiersPkey = 'account_tiers_pkey'
}

export type Account_Tiers_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Tiers_Max_Fields = {
  __typename?: 'account_tiers_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Tiers_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Tiers_Min_Fields = {
  __typename?: 'account_tiers_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Tiers_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Tiers_Mutation_Response = {
  __typename?: 'account_tiers_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Account_Tiers>;
};

export type Account_Tiers_Obj_Rel_Insert_Input = {
  data: Account_Tiers_Insert_Input;
  on_conflict?: Maybe<Account_Tiers_On_Conflict>;
};

export type Account_Tiers_On_Conflict = {
  constraint: Account_Tiers_Constraint;
  update_columns: Array<Account_Tiers_Update_Column>;
  where?: Maybe<Account_Tiers_Bool_Exp>;
};

export type Account_Tiers_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Tiers_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Account_Tiers_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Tiers_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Account_Tiers_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Types = {
  __typename?: 'account_types';
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


export type Account_TypesAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Account_TypesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Account_Types_Aggregate = {
  __typename?: 'account_types_aggregate';
  aggregate?: Maybe<Account_Types_Aggregate_Fields>;
  nodes: Array<Account_Types>;
};

export type Account_Types_Aggregate_Fields = {
  __typename?: 'account_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Types_Max_Fields>;
  min?: Maybe<Account_Types_Min_Fields>;
};


export type Account_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Account_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Types_Max_Order_By>;
  min?: Maybe<Account_Types_Min_Order_By>;
};

export type Account_Types_Arr_Rel_Insert_Input = {
  data: Array<Account_Types_Insert_Input>;
  on_conflict?: Maybe<Account_Types_On_Conflict>;
};

export type Account_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Account_Types_Bool_Exp>>>;
  _not?: Maybe<Account_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Types_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Account_Types_Constraint {
  AccountTypesPkey = 'account_types_pkey'
}

export type Account_Types_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Types_Max_Fields = {
  __typename?: 'account_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Types_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Types_Min_Fields = {
  __typename?: 'account_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Types_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Types_Mutation_Response = {
  __typename?: 'account_types_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Account_Types>;
};

export type Account_Types_Obj_Rel_Insert_Input = {
  data: Account_Types_Insert_Input;
  on_conflict?: Maybe<Account_Types_On_Conflict>;
};

export type Account_Types_On_Conflict = {
  constraint: Account_Types_Constraint;
  update_columns: Array<Account_Types_Update_Column>;
  where?: Maybe<Account_Types_Bool_Exp>;
};

export type Account_Types_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Account_Types_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Types_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Account_Types_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Verticals = {
  __typename?: 'account_verticals';
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


export type Account_VerticalsAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Account_VerticalsAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Account_Verticals_Aggregate = {
  __typename?: 'account_verticals_aggregate';
  aggregate?: Maybe<Account_Verticals_Aggregate_Fields>;
  nodes: Array<Account_Verticals>;
};

export type Account_Verticals_Aggregate_Fields = {
  __typename?: 'account_verticals_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Account_Verticals_Max_Fields>;
  min?: Maybe<Account_Verticals_Min_Fields>;
};


export type Account_Verticals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Verticals_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Account_Verticals_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Verticals_Max_Order_By>;
  min?: Maybe<Account_Verticals_Min_Order_By>;
};

export type Account_Verticals_Arr_Rel_Insert_Input = {
  data: Array<Account_Verticals_Insert_Input>;
  on_conflict?: Maybe<Account_Verticals_On_Conflict>;
};

export type Account_Verticals_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Account_Verticals_Bool_Exp>>>;
  _not?: Maybe<Account_Verticals_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Account_Verticals_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Account_Verticals_Constraint {
  AccountVerticalsPkey = 'account_verticals_pkey'
}

export type Account_Verticals_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Verticals_Max_Fields = {
  __typename?: 'account_verticals_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Verticals_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Verticals_Min_Fields = {
  __typename?: 'account_verticals_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Account_Verticals_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Verticals_Mutation_Response = {
  __typename?: 'account_verticals_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Account_Verticals>;
};

export type Account_Verticals_Obj_Rel_Insert_Input = {
  data: Account_Verticals_Insert_Input;
  on_conflict?: Maybe<Account_Verticals_On_Conflict>;
};

export type Account_Verticals_On_Conflict = {
  constraint: Account_Verticals_Constraint;
  update_columns: Array<Account_Verticals_Update_Column>;
  where?: Maybe<Account_Verticals_Bool_Exp>;
};

export type Account_Verticals_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Account_Verticals_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Account_Verticals_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Account_Verticals_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Account_Verticals_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type ToCreateNewAccount = {
  channel: Scalars['String'];
  name: Scalars['String'];
  payment_terms: Scalars['String'];
  region: Scalars['String'];
  status: Scalars['String'];
  tier: Scalars['String'];
  type: Scalars['String'];
  vertical: Scalars['String'];
}

export type Accounts = {
  __typename?: 'accounts';
  account_channel?: Account_Channels;
  account_manager?: Maybe<Scalars['String']>;
  account_payment_term?: Account_Payment_Terms;
  account_region?: Account_Regions;
  account_status?: Account_Statuses;
  account_tier?: Account_Tiers;
  account_type?: Account_Types;
  account_vertical?: Account_Verticals;
  advertiser_blocks?: Maybe<Scalars['String']>;
  bill_to?: Maybe<Scalars['String']>;
  billing_city?: Maybe<Scalars['String']>;
  billing_contact_city?: Maybe<Scalars['String']>;
  billing_contact_country?: Maybe<Scalars['String']>;
  billing_contact_email?: Maybe<Scalars['String']>;
  billing_contact_name?: Maybe<Scalars['String']>;
  billing_contact_phone_number?: Maybe<Scalars['String']>;
  billing_contact_postal_code?: Maybe<Scalars['String']>;
  billing_contact_region_state?: Maybe<Scalars['String']>;
  billing_contact_street?: Maybe<Scalars['String']>;
  billing_contact_title?: Maybe<Scalars['String']>;
  billing_country?: Maybe<Scalars['String']>;
  billing_postal_code?: Maybe<Scalars['String']>;
  billing_region_state?: Maybe<Scalars['String']>;
  billing_street?: Maybe<Scalars['String']>;
  channel: Scalars['String'];
  channel_blocks?: Maybe<Scalars['String']>;
  child_pixel_id?: Maybe<Scalars['Int']>;
  click_attribution_window?: Maybe<Scalars['smallint']>;
  click_lift_percentage?: Maybe<Scalars['numeric']>;
  connection_method?: Maybe<Scalars['String']>;
  contracts?: Array<Contracts>;
  contracts_aggregate?: Contracts_Aggregate;
  created_at?: Scalars['timestamptz'];
  credit_limit?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  destination_country?: Maybe<Scalars['String']>;
  destination_postal_code?: Maybe<Scalars['String']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Scalars['Int'];
  integration_contact_email?: Maybe<Scalars['String']>;
  integration_contact_name?: Maybe<Scalars['String']>;
  integration_contact_phone_number?: Maybe<Scalars['String']>;
  integration_contact_title?: Maybe<Scalars['String']>;
  inventory_whitelist_blacklist?: Maybe<Scalars['String']>;
  market_area_cities?: Maybe<Scalars['String']>;
  market_area_countries?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent_account_id?: Maybe<Scalars['Int']>;
  parent_pixel_id?: Maybe<Scalars['Int']>;
  payment_method?: Maybe<Scalars['String']>;
  payment_terms: Scalars['String'];
  region: Scalars['String'];
  sales_rep?: Maybe<Scalars['String']>;
  sfdc_account_id?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  tags?: Maybe<Scalars['String']>;
  tier: Scalars['String'];
  time_zone?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at?: Scalars['timestamptz'];
  vertical: Scalars['String'];
  vertical_blocks?: Maybe<Scalars['String']>;
  view_attribution_window?: Maybe<Scalars['smallint']>;
  view_lift_percentage?: Maybe<Scalars['numeric']>;
};


export type AccountsContractsArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


export type AccountsContracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};

export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Accounts_Aggregate_Order_By = {
  avg?: Maybe<Accounts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Accounts_Max_Order_By>;
  min?: Maybe<Accounts_Min_Order_By>;
  stddev?: Maybe<Accounts_Stddev_Order_By>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Order_By>;
  sum?: Maybe<Accounts_Sum_Order_By>;
  var_pop?: Maybe<Accounts_Var_Pop_Order_By>;
  var_samp?: Maybe<Accounts_Var_Samp_Order_By>;
  variance?: Maybe<Accounts_Variance_Order_By>;
};

export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  child_pixel_id?: Maybe<Scalars['Float']>;
  click_attribution_window?: Maybe<Scalars['Float']>;
  click_lift_percentage?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_account_id?: Maybe<Scalars['Float']>;
  parent_pixel_id?: Maybe<Scalars['Float']>;
  sfdc_account_id?: Maybe<Scalars['Float']>;
  view_attribution_window?: Maybe<Scalars['Float']>;
  view_lift_percentage?: Maybe<Scalars['Float']>;
};

export type Accounts_Avg_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  account_channel?: Maybe<Account_Channels_Bool_Exp>;
  account_manager?: Maybe<String_Comparison_Exp>;
  account_payment_term?: Maybe<Account_Payment_Terms_Bool_Exp>;
  account_region?: Maybe<Account_Regions_Bool_Exp>;
  account_status?: Maybe<Account_Statuses_Bool_Exp>;
  account_tier?: Maybe<Account_Tiers_Bool_Exp>;
  account_type?: Maybe<Account_Types_Bool_Exp>;
  account_vertical?: Maybe<Account_Verticals_Bool_Exp>;
  advertiser_blocks?: Maybe<String_Comparison_Exp>;
  bill_to?: Maybe<String_Comparison_Exp>;
  billing_city?: Maybe<String_Comparison_Exp>;
  billing_contact_city?: Maybe<String_Comparison_Exp>;
  billing_contact_country?: Maybe<String_Comparison_Exp>;
  billing_contact_email?: Maybe<String_Comparison_Exp>;
  billing_contact_name?: Maybe<String_Comparison_Exp>;
  billing_contact_phone_number?: Maybe<String_Comparison_Exp>;
  billing_contact_postal_code?: Maybe<String_Comparison_Exp>;
  billing_contact_region_state?: Maybe<String_Comparison_Exp>;
  billing_contact_street?: Maybe<String_Comparison_Exp>;
  billing_contact_title?: Maybe<String_Comparison_Exp>;
  billing_country?: Maybe<String_Comparison_Exp>;
  billing_postal_code?: Maybe<String_Comparison_Exp>;
  billing_region_state?: Maybe<String_Comparison_Exp>;
  billing_street?: Maybe<String_Comparison_Exp>;
  channel?: Maybe<String_Comparison_Exp>;
  channel_blocks?: Maybe<String_Comparison_Exp>;
  child_pixel_id?: Maybe<Int_Comparison_Exp>;
  click_attribution_window?: Maybe<Smallint_Comparison_Exp>;
  click_lift_percentage?: Maybe<Numeric_Comparison_Exp>;
  connection_method?: Maybe<String_Comparison_Exp>;
  contracts?: Maybe<Contracts_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  credit_limit?: Maybe<String_Comparison_Exp>;
  currency?: Maybe<String_Comparison_Exp>;
  destination_country?: Maybe<String_Comparison_Exp>;
  destination_postal_code?: Maybe<String_Comparison_Exp>;
  external_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  integration_contact_email?: Maybe<String_Comparison_Exp>;
  integration_contact_name?: Maybe<String_Comparison_Exp>;
  integration_contact_phone_number?: Maybe<String_Comparison_Exp>;
  integration_contact_title?: Maybe<String_Comparison_Exp>;
  inventory_whitelist_blacklist?: Maybe<String_Comparison_Exp>;
  market_area_cities?: Maybe<String_Comparison_Exp>;
  market_area_countries?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parent_account_id?: Maybe<Int_Comparison_Exp>;
  parent_pixel_id?: Maybe<Int_Comparison_Exp>;
  payment_method?: Maybe<String_Comparison_Exp>;
  payment_terms?: Maybe<String_Comparison_Exp>;
  region?: Maybe<String_Comparison_Exp>;
  sales_rep?: Maybe<String_Comparison_Exp>;
  sfdc_account_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  tags?: Maybe<String_Comparison_Exp>;
  tier?: Maybe<String_Comparison_Exp>;
  time_zone?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vertical?: Maybe<String_Comparison_Exp>;
  vertical_blocks?: Maybe<String_Comparison_Exp>;
  view_attribution_window?: Maybe<Smallint_Comparison_Exp>;
  view_lift_percentage?: Maybe<Numeric_Comparison_Exp>;
};

export enum Accounts_Constraint {
  AccountsPkey = 'accounts_pkey'
}

export type Accounts_Inc_Input = {
  child_pixel_id?: Maybe<Scalars['Int']>;
  click_attribution_window?: Maybe<Scalars['smallint']>;
  click_lift_percentage?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_account_id?: Maybe<Scalars['Int']>;
  parent_pixel_id?: Maybe<Scalars['Int']>;
  sfdc_account_id?: Maybe<Scalars['Int']>;
  view_attribution_window?: Maybe<Scalars['smallint']>;
  view_lift_percentage?: Maybe<Scalars['numeric']>;
};

export type Accounts_Insert_Input = {
  account_channel?: Maybe<Account_Channels_Obj_Rel_Insert_Input>;
  account_manager?: Maybe<Scalars['String']>;
  account_payment_term?: Maybe<Account_Payment_Terms_Obj_Rel_Insert_Input>;
  account_region?: Maybe<Account_Regions_Obj_Rel_Insert_Input>;
  account_status?: Maybe<Account_Statuses_Obj_Rel_Insert_Input>;
  account_tier?: Maybe<Account_Tiers_Obj_Rel_Insert_Input>;
  account_type?: Maybe<Account_Types_Obj_Rel_Insert_Input>;
  account_vertical?: Maybe<Account_Verticals_Obj_Rel_Insert_Input>;
  advertiser_blocks?: Maybe<Scalars['String']>;
  bill_to?: Maybe<Scalars['String']>;
  billing_city?: Maybe<Scalars['String']>;
  billing_contact_city?: Maybe<Scalars['String']>;
  billing_contact_country?: Maybe<Scalars['String']>;
  billing_contact_email?: Maybe<Scalars['String']>;
  billing_contact_name?: Maybe<Scalars['String']>;
  billing_contact_phone_number?: Maybe<Scalars['String']>;
  billing_contact_postal_code?: Maybe<Scalars['String']>;
  billing_contact_region_state?: Maybe<Scalars['String']>;
  billing_contact_street?: Maybe<Scalars['String']>;
  billing_contact_title?: Maybe<Scalars['String']>;
  billing_country?: Maybe<Scalars['String']>;
  billing_postal_code?: Maybe<Scalars['String']>;
  billing_region_state?: Maybe<Scalars['String']>;
  billing_street?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  channel_blocks?: Maybe<Scalars['String']>;
  child_pixel_id?: Maybe<Scalars['Int']>;
  click_attribution_window?: Maybe<Scalars['smallint']>;
  click_lift_percentage?: Maybe<Scalars['numeric']>;
  connection_method?: Maybe<Scalars['String']>;
  contracts?: Maybe<Contracts_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  credit_limit?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  destination_country?: Maybe<Scalars['String']>;
  destination_postal_code?: Maybe<Scalars['String']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  integration_contact_email?: Maybe<Scalars['String']>;
  integration_contact_name?: Maybe<Scalars['String']>;
  integration_contact_phone_number?: Maybe<Scalars['String']>;
  integration_contact_title?: Maybe<Scalars['String']>;
  inventory_whitelist_blacklist?: Maybe<Scalars['String']>;
  market_area_cities?: Maybe<Scalars['String']>;
  market_area_countries?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_account_id?: Maybe<Scalars['Int']>;
  parent_pixel_id?: Maybe<Scalars['Int']>;
  payment_method?: Maybe<Scalars['String']>;
  payment_terms?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  sales_rep?: Maybe<Scalars['String']>;
  sfdc_account_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  time_zone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vertical?: Maybe<Scalars['String']>;
  vertical_blocks?: Maybe<Scalars['String']>;
  view_attribution_window?: Maybe<Scalars['smallint']>;
  view_lift_percentage?: Maybe<Scalars['numeric']>;
};

export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  account_manager?: Maybe<Scalars['String']>;
  advertiser_blocks?: Maybe<Scalars['String']>;
  bill_to?: Maybe<Scalars['String']>;
  billing_city?: Maybe<Scalars['String']>;
  billing_contact_city?: Maybe<Scalars['String']>;
  billing_contact_country?: Maybe<Scalars['String']>;
  billing_contact_email?: Maybe<Scalars['String']>;
  billing_contact_name?: Maybe<Scalars['String']>;
  billing_contact_phone_number?: Maybe<Scalars['String']>;
  billing_contact_postal_code?: Maybe<Scalars['String']>;
  billing_contact_region_state?: Maybe<Scalars['String']>;
  billing_contact_street?: Maybe<Scalars['String']>;
  billing_contact_title?: Maybe<Scalars['String']>;
  billing_country?: Maybe<Scalars['String']>;
  billing_postal_code?: Maybe<Scalars['String']>;
  billing_region_state?: Maybe<Scalars['String']>;
  billing_street?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  channel_blocks?: Maybe<Scalars['String']>;
  child_pixel_id?: Maybe<Scalars['Int']>;
  click_attribution_window?: Maybe<Scalars['smallint']>;
  click_lift_percentage?: Maybe<Scalars['numeric']>;
  connection_method?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  credit_limit?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  destination_country?: Maybe<Scalars['String']>;
  destination_postal_code?: Maybe<Scalars['String']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  integration_contact_email?: Maybe<Scalars['String']>;
  integration_contact_name?: Maybe<Scalars['String']>;
  integration_contact_phone_number?: Maybe<Scalars['String']>;
  integration_contact_title?: Maybe<Scalars['String']>;
  inventory_whitelist_blacklist?: Maybe<Scalars['String']>;
  market_area_cities?: Maybe<Scalars['String']>;
  market_area_countries?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_account_id?: Maybe<Scalars['Int']>;
  parent_pixel_id?: Maybe<Scalars['Int']>;
  payment_method?: Maybe<Scalars['String']>;
  payment_terms?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  sales_rep?: Maybe<Scalars['String']>;
  sfdc_account_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  time_zone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vertical?: Maybe<Scalars['String']>;
  vertical_blocks?: Maybe<Scalars['String']>;
  view_attribution_window?: Maybe<Scalars['smallint']>;
  view_lift_percentage?: Maybe<Scalars['numeric']>;
};

export type Accounts_Max_Order_By = {
  account_manager?: Maybe<Order_By>;
  advertiser_blocks?: Maybe<Order_By>;
  bill_to?: Maybe<Order_By>;
  billing_city?: Maybe<Order_By>;
  billing_contact_city?: Maybe<Order_By>;
  billing_contact_country?: Maybe<Order_By>;
  billing_contact_email?: Maybe<Order_By>;
  billing_contact_name?: Maybe<Order_By>;
  billing_contact_phone_number?: Maybe<Order_By>;
  billing_contact_postal_code?: Maybe<Order_By>;
  billing_contact_region_state?: Maybe<Order_By>;
  billing_contact_street?: Maybe<Order_By>;
  billing_contact_title?: Maybe<Order_By>;
  billing_country?: Maybe<Order_By>;
  billing_postal_code?: Maybe<Order_By>;
  billing_region_state?: Maybe<Order_By>;
  billing_street?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  channel_blocks?: Maybe<Order_By>;
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  connection_method?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  credit_limit?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  destination_country?: Maybe<Order_By>;
  destination_postal_code?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  integration_contact_email?: Maybe<Order_By>;
  integration_contact_name?: Maybe<Order_By>;
  integration_contact_phone_number?: Maybe<Order_By>;
  integration_contact_title?: Maybe<Order_By>;
  inventory_whitelist_blacklist?: Maybe<Order_By>;
  market_area_cities?: Maybe<Order_By>;
  market_area_countries?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  payment_method?: Maybe<Order_By>;
  payment_terms?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  sales_rep?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tags?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  time_zone?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vertical?: Maybe<Order_By>;
  vertical_blocks?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  account_manager?: Maybe<Scalars['String']>;
  advertiser_blocks?: Maybe<Scalars['String']>;
  bill_to?: Maybe<Scalars['String']>;
  billing_city?: Maybe<Scalars['String']>;
  billing_contact_city?: Maybe<Scalars['String']>;
  billing_contact_country?: Maybe<Scalars['String']>;
  billing_contact_email?: Maybe<Scalars['String']>;
  billing_contact_name?: Maybe<Scalars['String']>;
  billing_contact_phone_number?: Maybe<Scalars['String']>;
  billing_contact_postal_code?: Maybe<Scalars['String']>;
  billing_contact_region_state?: Maybe<Scalars['String']>;
  billing_contact_street?: Maybe<Scalars['String']>;
  billing_contact_title?: Maybe<Scalars['String']>;
  billing_country?: Maybe<Scalars['String']>;
  billing_postal_code?: Maybe<Scalars['String']>;
  billing_region_state?: Maybe<Scalars['String']>;
  billing_street?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  channel_blocks?: Maybe<Scalars['String']>;
  child_pixel_id?: Maybe<Scalars['Int']>;
  click_attribution_window?: Maybe<Scalars['smallint']>;
  click_lift_percentage?: Maybe<Scalars['numeric']>;
  connection_method?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  credit_limit?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  destination_country?: Maybe<Scalars['String']>;
  destination_postal_code?: Maybe<Scalars['String']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  integration_contact_email?: Maybe<Scalars['String']>;
  integration_contact_name?: Maybe<Scalars['String']>;
  integration_contact_phone_number?: Maybe<Scalars['String']>;
  integration_contact_title?: Maybe<Scalars['String']>;
  inventory_whitelist_blacklist?: Maybe<Scalars['String']>;
  market_area_cities?: Maybe<Scalars['String']>;
  market_area_countries?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_account_id?: Maybe<Scalars['Int']>;
  parent_pixel_id?: Maybe<Scalars['Int']>;
  payment_method?: Maybe<Scalars['String']>;
  payment_terms?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  sales_rep?: Maybe<Scalars['String']>;
  sfdc_account_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  time_zone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vertical?: Maybe<Scalars['String']>;
  vertical_blocks?: Maybe<Scalars['String']>;
  view_attribution_window?: Maybe<Scalars['smallint']>;
  view_lift_percentage?: Maybe<Scalars['numeric']>;
};

export type Accounts_Min_Order_By = {
  account_manager?: Maybe<Order_By>;
  advertiser_blocks?: Maybe<Order_By>;
  bill_to?: Maybe<Order_By>;
  billing_city?: Maybe<Order_By>;
  billing_contact_city?: Maybe<Order_By>;
  billing_contact_country?: Maybe<Order_By>;
  billing_contact_email?: Maybe<Order_By>;
  billing_contact_name?: Maybe<Order_By>;
  billing_contact_phone_number?: Maybe<Order_By>;
  billing_contact_postal_code?: Maybe<Order_By>;
  billing_contact_region_state?: Maybe<Order_By>;
  billing_contact_street?: Maybe<Order_By>;
  billing_contact_title?: Maybe<Order_By>;
  billing_country?: Maybe<Order_By>;
  billing_postal_code?: Maybe<Order_By>;
  billing_region_state?: Maybe<Order_By>;
  billing_street?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  channel_blocks?: Maybe<Order_By>;
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  connection_method?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  credit_limit?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  destination_country?: Maybe<Order_By>;
  destination_postal_code?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  integration_contact_email?: Maybe<Order_By>;
  integration_contact_name?: Maybe<Order_By>;
  integration_contact_phone_number?: Maybe<Order_By>;
  integration_contact_title?: Maybe<Order_By>;
  inventory_whitelist_blacklist?: Maybe<Order_By>;
  market_area_cities?: Maybe<Order_By>;
  market_area_countries?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  payment_method?: Maybe<Order_By>;
  payment_terms?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  sales_rep?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tags?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  time_zone?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vertical?: Maybe<Order_By>;
  vertical_blocks?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Accounts>;
};

export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Accounts_Order_By = {
  account_channel?: Maybe<Account_Channels_Order_By>;
  account_manager?: Maybe<Order_By>;
  account_payment_term?: Maybe<Account_Payment_Terms_Order_By>;
  account_region?: Maybe<Account_Regions_Order_By>;
  account_status?: Maybe<Account_Statuses_Order_By>;
  account_tier?: Maybe<Account_Tiers_Order_By>;
  account_type?: Maybe<Account_Types_Order_By>;
  account_vertical?: Maybe<Account_Verticals_Order_By>;
  advertiser_blocks?: Maybe<Order_By>;
  bill_to?: Maybe<Order_By>;
  billing_city?: Maybe<Order_By>;
  billing_contact_city?: Maybe<Order_By>;
  billing_contact_country?: Maybe<Order_By>;
  billing_contact_email?: Maybe<Order_By>;
  billing_contact_name?: Maybe<Order_By>;
  billing_contact_phone_number?: Maybe<Order_By>;
  billing_contact_postal_code?: Maybe<Order_By>;
  billing_contact_region_state?: Maybe<Order_By>;
  billing_contact_street?: Maybe<Order_By>;
  billing_contact_title?: Maybe<Order_By>;
  billing_country?: Maybe<Order_By>;
  billing_postal_code?: Maybe<Order_By>;
  billing_region_state?: Maybe<Order_By>;
  billing_street?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  channel_blocks?: Maybe<Order_By>;
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  connection_method?: Maybe<Order_By>;
  contracts_aggregate?: Maybe<Contracts_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  credit_limit?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  destination_country?: Maybe<Order_By>;
  destination_postal_code?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  integration_contact_email?: Maybe<Order_By>;
  integration_contact_name?: Maybe<Order_By>;
  integration_contact_phone_number?: Maybe<Order_By>;
  integration_contact_title?: Maybe<Order_By>;
  inventory_whitelist_blacklist?: Maybe<Order_By>;
  market_area_cities?: Maybe<Order_By>;
  market_area_countries?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  payment_method?: Maybe<Order_By>;
  payment_terms?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  sales_rep?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tags?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  time_zone?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vertical?: Maybe<Order_By>;
  vertical_blocks?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Accounts_Select_Column {
  AccountManager = 'account_manager',
  AdvertiserBlocks = 'advertiser_blocks',
  BillTo = 'bill_to',
  BillingCity = 'billing_city',
  BillingContactCity = 'billing_contact_city',
  BillingContactCountry = 'billing_contact_country',
  BillingContactEmail = 'billing_contact_email',
  BillingContactName = 'billing_contact_name',
  BillingContactPhoneNumber = 'billing_contact_phone_number',
  BillingContactPostalCode = 'billing_contact_postal_code',
  BillingContactRegionState = 'billing_contact_region_state',
  BillingContactStreet = 'billing_contact_street',
  BillingContactTitle = 'billing_contact_title',
  BillingCountry = 'billing_country',
  BillingPostalCode = 'billing_postal_code',
  BillingRegionState = 'billing_region_state',
  BillingStreet = 'billing_street',
  Channel = 'channel',
  ChannelBlocks = 'channel_blocks',
  ChildPixelId = 'child_pixel_id',
  ClickAttributionWindow = 'click_attribution_window',
  ClickLiftPercentage = 'click_lift_percentage',
  ConnectionMethod = 'connection_method',
  CreatedAt = 'created_at',
  CreditLimit = 'credit_limit',
  Currency = 'currency',
  DestinationCountry = 'destination_country',
  DestinationPostalCode = 'destination_postal_code',
  ExternalId = 'external_id',
  Id = 'id',
  IntegrationContactEmail = 'integration_contact_email',
  IntegrationContactName = 'integration_contact_name',
  IntegrationContactPhoneNumber = 'integration_contact_phone_number',
  IntegrationContactTitle = 'integration_contact_title',
  InventoryWhitelistBlacklist = 'inventory_whitelist_blacklist',
  MarketAreaCities = 'market_area_cities',
  MarketAreaCountries = 'market_area_countries',
  Name = 'name',
  ParentAccountId = 'parent_account_id',
  ParentPixelId = 'parent_pixel_id',
  PaymentMethod = 'payment_method',
  PaymentTerms = 'payment_terms',
  Region = 'region',
  SalesRep = 'sales_rep',
  SfdcAccountId = 'sfdc_account_id',
  Status = 'status',
  Tags = 'tags',
  Tier = 'tier',
  TimeZone = 'time_zone',
  Type = 'type',
  UpdatedAt = 'updated_at',
  Vertical = 'vertical',
  VerticalBlocks = 'vertical_blocks',
  ViewAttributionWindow = 'view_attribution_window',
  ViewLiftPercentage = 'view_lift_percentage'
}

export type Accounts_Set_Input = {
  account_manager?: Maybe<Scalars['String']>;
  advertiser_blocks?: Maybe<Scalars['String']>;
  bill_to?: Maybe<Scalars['String']>;
  billing_city?: Maybe<Scalars['String']>;
  billing_contact_city?: Maybe<Scalars['String']>;
  billing_contact_country?: Maybe<Scalars['String']>;
  billing_contact_email?: Maybe<Scalars['String']>;
  billing_contact_name?: Maybe<Scalars['String']>;
  billing_contact_phone_number?: Maybe<Scalars['String']>;
  billing_contact_postal_code?: Maybe<Scalars['String']>;
  billing_contact_region_state?: Maybe<Scalars['String']>;
  billing_contact_street?: Maybe<Scalars['String']>;
  billing_contact_title?: Maybe<Scalars['String']>;
  billing_country?: Maybe<Scalars['String']>;
  billing_postal_code?: Maybe<Scalars['String']>;
  billing_region_state?: Maybe<Scalars['String']>;
  billing_street?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  channel_blocks?: Maybe<Scalars['String']>;
  child_pixel_id?: Maybe<Scalars['Int']>;
  click_attribution_window?: Maybe<Scalars['smallint']>;
  click_lift_percentage?: Maybe<Scalars['numeric']>;
  connection_method?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  credit_limit?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  destination_country?: Maybe<Scalars['String']>;
  destination_postal_code?: Maybe<Scalars['String']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  integration_contact_email?: Maybe<Scalars['String']>;
  integration_contact_name?: Maybe<Scalars['String']>;
  integration_contact_phone_number?: Maybe<Scalars['String']>;
  integration_contact_title?: Maybe<Scalars['String']>;
  inventory_whitelist_blacklist?: Maybe<Scalars['String']>;
  market_area_cities?: Maybe<Scalars['String']>;
  market_area_countries?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_account_id?: Maybe<Scalars['Int']>;
  parent_pixel_id?: Maybe<Scalars['Int']>;
  payment_method?: Maybe<Scalars['String']>;
  payment_terms?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  sales_rep?: Maybe<Scalars['String']>;
  sfdc_account_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  time_zone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vertical?: Maybe<Scalars['String']>;
  vertical_blocks?: Maybe<Scalars['String']>;
  view_attribution_window?: Maybe<Scalars['smallint']>;
  view_lift_percentage?: Maybe<Scalars['numeric']>;
};

export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  child_pixel_id?: Maybe<Scalars['Float']>;
  click_attribution_window?: Maybe<Scalars['Float']>;
  click_lift_percentage?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_account_id?: Maybe<Scalars['Float']>;
  parent_pixel_id?: Maybe<Scalars['Float']>;
  sfdc_account_id?: Maybe<Scalars['Float']>;
  view_attribution_window?: Maybe<Scalars['Float']>;
  view_lift_percentage?: Maybe<Scalars['Float']>;
};

export type Accounts_Stddev_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  child_pixel_id?: Maybe<Scalars['Float']>;
  click_attribution_window?: Maybe<Scalars['Float']>;
  click_lift_percentage?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_account_id?: Maybe<Scalars['Float']>;
  parent_pixel_id?: Maybe<Scalars['Float']>;
  sfdc_account_id?: Maybe<Scalars['Float']>;
  view_attribution_window?: Maybe<Scalars['Float']>;
  view_lift_percentage?: Maybe<Scalars['Float']>;
};

export type Accounts_Stddev_Pop_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  child_pixel_id?: Maybe<Scalars['Float']>;
  click_attribution_window?: Maybe<Scalars['Float']>;
  click_lift_percentage?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_account_id?: Maybe<Scalars['Float']>;
  parent_pixel_id?: Maybe<Scalars['Float']>;
  sfdc_account_id?: Maybe<Scalars['Float']>;
  view_attribution_window?: Maybe<Scalars['Float']>;
  view_lift_percentage?: Maybe<Scalars['Float']>;
};

export type Accounts_Stddev_Samp_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  child_pixel_id?: Maybe<Scalars['Int']>;
  click_attribution_window?: Maybe<Scalars['smallint']>;
  click_lift_percentage?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_account_id?: Maybe<Scalars['Int']>;
  parent_pixel_id?: Maybe<Scalars['Int']>;
  sfdc_account_id?: Maybe<Scalars['Int']>;
  view_attribution_window?: Maybe<Scalars['smallint']>;
  view_lift_percentage?: Maybe<Scalars['numeric']>;
};

export type Accounts_Sum_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export enum Accounts_Update_Column {
  AccountManager = 'account_manager',
  AdvertiserBlocks = 'advertiser_blocks',
  BillTo = 'bill_to',
  BillingCity = 'billing_city',
  BillingContactCity = 'billing_contact_city',
  BillingContactCountry = 'billing_contact_country',
  BillingContactEmail = 'billing_contact_email',
  BillingContactName = 'billing_contact_name',
  BillingContactPhoneNumber = 'billing_contact_phone_number',
  BillingContactPostalCode = 'billing_contact_postal_code',
  BillingContactRegionState = 'billing_contact_region_state',
  BillingContactStreet = 'billing_contact_street',
  BillingContactTitle = 'billing_contact_title',
  BillingCountry = 'billing_country',
  BillingPostalCode = 'billing_postal_code',
  BillingRegionState = 'billing_region_state',
  BillingStreet = 'billing_street',
  Channel = 'channel',
  ChannelBlocks = 'channel_blocks',
  ChildPixelId = 'child_pixel_id',
  ClickAttributionWindow = 'click_attribution_window',
  ClickLiftPercentage = 'click_lift_percentage',
  ConnectionMethod = 'connection_method',
  CreatedAt = 'created_at',
  CreditLimit = 'credit_limit',
  Currency = 'currency',
  DestinationCountry = 'destination_country',
  DestinationPostalCode = 'destination_postal_code',
  ExternalId = 'external_id',
  Id = 'id',
  IntegrationContactEmail = 'integration_contact_email',
  IntegrationContactName = 'integration_contact_name',
  IntegrationContactPhoneNumber = 'integration_contact_phone_number',
  IntegrationContactTitle = 'integration_contact_title',
  InventoryWhitelistBlacklist = 'inventory_whitelist_blacklist',
  MarketAreaCities = 'market_area_cities',
  MarketAreaCountries = 'market_area_countries',
  Name = 'name',
  ParentAccountId = 'parent_account_id',
  ParentPixelId = 'parent_pixel_id',
  PaymentMethod = 'payment_method',
  PaymentTerms = 'payment_terms',
  Region = 'region',
  SalesRep = 'sales_rep',
  SfdcAccountId = 'sfdc_account_id',
  Status = 'status',
  Tags = 'tags',
  Tier = 'tier',
  TimeZone = 'time_zone',
  Type = 'type',
  UpdatedAt = 'updated_at',
  Vertical = 'vertical',
  VerticalBlocks = 'vertical_blocks',
  ViewAttributionWindow = 'view_attribution_window',
  ViewLiftPercentage = 'view_lift_percentage'
}

export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  child_pixel_id?: Maybe<Scalars['Float']>;
  click_attribution_window?: Maybe<Scalars['Float']>;
  click_lift_percentage?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_account_id?: Maybe<Scalars['Float']>;
  parent_pixel_id?: Maybe<Scalars['Float']>;
  sfdc_account_id?: Maybe<Scalars['Float']>;
  view_attribution_window?: Maybe<Scalars['Float']>;
  view_lift_percentage?: Maybe<Scalars['Float']>;
};

export type Accounts_Var_Pop_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  child_pixel_id?: Maybe<Scalars['Float']>;
  click_attribution_window?: Maybe<Scalars['Float']>;
  click_lift_percentage?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_account_id?: Maybe<Scalars['Float']>;
  parent_pixel_id?: Maybe<Scalars['Float']>;
  sfdc_account_id?: Maybe<Scalars['Float']>;
  view_attribution_window?: Maybe<Scalars['Float']>;
  view_lift_percentage?: Maybe<Scalars['Float']>;
};

export type Accounts_Var_Samp_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  child_pixel_id?: Maybe<Scalars['Float']>;
  click_attribution_window?: Maybe<Scalars['Float']>;
  click_lift_percentage?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_account_id?: Maybe<Scalars['Float']>;
  parent_pixel_id?: Maybe<Scalars['Float']>;
  sfdc_account_id?: Maybe<Scalars['Float']>;
  view_attribution_window?: Maybe<Scalars['Float']>;
  view_lift_percentage?: Maybe<Scalars['Float']>;
};

export type Accounts_Variance_Order_By = {
  child_pixel_id?: Maybe<Order_By>;
  click_attribution_window?: Maybe<Order_By>;
  click_lift_percentage?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_account_id?: Maybe<Order_By>;
  parent_pixel_id?: Maybe<Order_By>;
  sfdc_account_id?: Maybe<Order_By>;
  view_attribution_window?: Maybe<Order_By>;
  view_lift_percentage?: Maybe<Order_By>;
};

export type Campaigns = {
  __typename?: 'campaigns';
  contract?: Maybe<Contracts>;
  contract_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  tactics: Array<Tactics>;
  tactics_aggregate: Tactics_Aggregate;
  updated_at: Scalars['timestamptz'];
};


export type CampaignsTacticsArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};


export type CampaignsTactics_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};

export type Campaigns_Aggregate = {
  __typename?: 'campaigns_aggregate';
  aggregate?: Maybe<Campaigns_Aggregate_Fields>;
  nodes: Array<Campaigns>;
};

export type Campaigns_Aggregate_Fields = {
  __typename?: 'campaigns_aggregate_fields';
  avg?: Maybe<Campaigns_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Campaigns_Max_Fields>;
  min?: Maybe<Campaigns_Min_Fields>;
  stddev?: Maybe<Campaigns_Stddev_Fields>;
  stddev_pop?: Maybe<Campaigns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaigns_Stddev_Samp_Fields>;
  sum?: Maybe<Campaigns_Sum_Fields>;
  var_pop?: Maybe<Campaigns_Var_Pop_Fields>;
  var_samp?: Maybe<Campaigns_Var_Samp_Fields>;
  variance?: Maybe<Campaigns_Variance_Fields>;
};


export type Campaigns_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaigns_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Campaigns_Aggregate_Order_By = {
  avg?: Maybe<Campaigns_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Campaigns_Max_Order_By>;
  min?: Maybe<Campaigns_Min_Order_By>;
  stddev?: Maybe<Campaigns_Stddev_Order_By>;
  stddev_pop?: Maybe<Campaigns_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Campaigns_Stddev_Samp_Order_By>;
  sum?: Maybe<Campaigns_Sum_Order_By>;
  var_pop?: Maybe<Campaigns_Var_Pop_Order_By>;
  var_samp?: Maybe<Campaigns_Var_Samp_Order_By>;
  variance?: Maybe<Campaigns_Variance_Order_By>;
};

export type Campaigns_Arr_Rel_Insert_Input = {
  data: Array<Campaigns_Insert_Input>;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};

export type Campaigns_Avg_Fields = {
  __typename?: 'campaigns_avg_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Campaigns_Avg_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Campaigns_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Campaigns_Bool_Exp>>>;
  _not?: Maybe<Campaigns_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Campaigns_Bool_Exp>>>;
  contract?: Maybe<Contracts_Bool_Exp>;
  contract_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  goal_optimization_event?: Maybe<String_Comparison_Exp>;
  goal_rate?: Maybe<String_Comparison_Exp>;
  goal_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  tactics?: Maybe<Tactics_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Campaigns_Constraint {
  CampaignsPkey = 'campaigns_pkey'
}

export type Campaigns_Inc_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Campaigns_Insert_Input = {
  contract?: Maybe<Contracts_Obj_Rel_Insert_Input>;
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tactics?: Maybe<Tactics_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Campaigns_Max_Fields = {
  __typename?: 'campaigns_max_fields';
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Campaigns_Max_Order_By = {
  contract_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  goal_optimization_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Campaigns_Min_Fields = {
  __typename?: 'campaigns_min_fields';
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Campaigns_Min_Order_By = {
  contract_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  goal_optimization_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Campaigns_Mutation_Response = {
  __typename?: 'campaigns_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Campaigns>;
};

export type Campaigns_Obj_Rel_Insert_Input = {
  data: Campaigns_Insert_Input;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};

export type Campaigns_On_Conflict = {
  constraint: Campaigns_Constraint;
  update_columns: Array<Campaigns_Update_Column>;
  where?: Maybe<Campaigns_Bool_Exp>;
};

export type Campaigns_Order_By = {
  contract?: Maybe<Contracts_Order_By>;
  contract_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  goal_optimization_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tactics_aggregate?: Maybe<Tactics_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Campaigns_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Campaigns_Select_Column {
  ContractId = 'contract_id',
  CreatedAt = 'created_at',
  GoalOptimizationEvent = 'goal_optimization_event',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type Campaigns_Set_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Campaigns_Stddev_Fields = {
  __typename?: 'campaigns_stddev_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Campaigns_Stddev_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Campaigns_Stddev_Pop_Fields = {
  __typename?: 'campaigns_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Campaigns_Stddev_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Campaigns_Stddev_Samp_Fields = {
  __typename?: 'campaigns_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Campaigns_Stddev_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Campaigns_Sum_Fields = {
  __typename?: 'campaigns_sum_fields';
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Campaigns_Sum_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Campaigns_Update_Column {
  ContractId = 'contract_id',
  CreatedAt = 'created_at',
  GoalOptimizationEvent = 'goal_optimization_event',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type Campaigns_Var_Pop_Fields = {
  __typename?: 'campaigns_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Campaigns_Var_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Campaigns_Var_Samp_Fields = {
  __typename?: 'campaigns_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Campaigns_Var_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Campaigns_Variance_Fields = {
  __typename?: 'campaigns_variance_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Campaigns_Variance_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Channel_Sets = {
  __typename?: 'channel_sets';
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_line_item?: Maybe<Contract_Line_Items>;
  contract_line_item_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  creatives: Array<Creatives>;
  creatives_aggregate: Creatives_Aggregate;
  daily_cap?: Maybe<Scalars['String']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inventory_type?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  optimization_modules: Array<Optimization_Modules>;
  optimization_modules_aggregate: Optimization_Modules_Aggregate;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  setup_modules: Array<Setup_Modules>;
  setup_modules_aggregate: Setup_Modules_Aggregate;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tactic?: Maybe<Tactics>;
  tactic_id?: Maybe<Scalars['Int']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_state_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  traveler_segments: Array<Traveler_Segments>;
  traveler_segments_aggregate: Traveler_Segments_Aggregate;
  updated_at: Scalars['timestamptz'];
  viewability_target_percentage?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  white_list_or_black_list?: Maybe<Scalars['String']>;
};


export type Channel_SetsCreativesArgs = {
  distinct_on?: Maybe<Array<Creatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Creatives_Order_By>>;
  where?: Maybe<Creatives_Bool_Exp>;
};


export type Channel_SetsCreatives_AggregateArgs = {
  distinct_on?: Maybe<Array<Creatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Creatives_Order_By>>;
  where?: Maybe<Creatives_Bool_Exp>;
};


export type Channel_SetsOptimization_ModulesArgs = {
  distinct_on?: Maybe<Array<Optimization_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Optimization_Modules_Order_By>>;
  where?: Maybe<Optimization_Modules_Bool_Exp>;
};


export type Channel_SetsOptimization_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Optimization_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Optimization_Modules_Order_By>>;
  where?: Maybe<Optimization_Modules_Bool_Exp>;
};


export type Channel_SetsSetup_ModulesArgs = {
  distinct_on?: Maybe<Array<Setup_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Modules_Order_By>>;
  where?: Maybe<Setup_Modules_Bool_Exp>;
};


export type Channel_SetsSetup_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Setup_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Modules_Order_By>>;
  where?: Maybe<Setup_Modules_Bool_Exp>;
};


export type Channel_SetsTraveler_SegmentsArgs = {
  distinct_on?: Maybe<Array<Traveler_Segments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Traveler_Segments_Order_By>>;
  where?: Maybe<Traveler_Segments_Bool_Exp>;
};


export type Channel_SetsTraveler_Segments_AggregateArgs = {
  distinct_on?: Maybe<Array<Traveler_Segments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Traveler_Segments_Order_By>>;
  where?: Maybe<Traveler_Segments_Bool_Exp>;
};

export type Channel_Sets_Aggregate = {
  __typename?: 'channel_sets_aggregate';
  aggregate?: Maybe<Channel_Sets_Aggregate_Fields>;
  nodes: Array<Channel_Sets>;
};

export type Channel_Sets_Aggregate_Fields = {
  __typename?: 'channel_sets_aggregate_fields';
  avg?: Maybe<Channel_Sets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Sets_Max_Fields>;
  min?: Maybe<Channel_Sets_Min_Fields>;
  stddev?: Maybe<Channel_Sets_Stddev_Fields>;
  stddev_pop?: Maybe<Channel_Sets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Channel_Sets_Stddev_Samp_Fields>;
  sum?: Maybe<Channel_Sets_Sum_Fields>;
  var_pop?: Maybe<Channel_Sets_Var_Pop_Fields>;
  var_samp?: Maybe<Channel_Sets_Var_Samp_Fields>;
  variance?: Maybe<Channel_Sets_Variance_Fields>;
};


export type Channel_Sets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Sets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Channel_Sets_Aggregate_Order_By = {
  avg?: Maybe<Channel_Sets_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Sets_Max_Order_By>;
  min?: Maybe<Channel_Sets_Min_Order_By>;
  stddev?: Maybe<Channel_Sets_Stddev_Order_By>;
  stddev_pop?: Maybe<Channel_Sets_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Channel_Sets_Stddev_Samp_Order_By>;
  sum?: Maybe<Channel_Sets_Sum_Order_By>;
  var_pop?: Maybe<Channel_Sets_Var_Pop_Order_By>;
  var_samp?: Maybe<Channel_Sets_Var_Samp_Order_By>;
  variance?: Maybe<Channel_Sets_Variance_Order_By>;
};

export type Channel_Sets_Arr_Rel_Insert_Input = {
  data: Array<Channel_Sets_Insert_Input>;
  on_conflict?: Maybe<Channel_Sets_On_Conflict>;
};

export type Channel_Sets_Avg_Fields = {
  __typename?: 'channel_sets_avg_fields';
  contract_line_item_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
  tactic_id?: Maybe<Scalars['Float']>;
};

export type Channel_Sets_Avg_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export type Channel_Sets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Sets_Bool_Exp>>>;
  _not?: Maybe<Channel_Sets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Sets_Bool_Exp>>>;
  brand_safety_packages?: Maybe<String_Comparison_Exp>;
  budget_impressions?: Maybe<String_Comparison_Exp>;
  budget_spend?: Maybe<String_Comparison_Exp>;
  channel?: Maybe<String_Comparison_Exp>;
  contract_line_item?: Maybe<Contract_Line_Items_Bool_Exp>;
  contract_line_item_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  creatives?: Maybe<Creatives_Bool_Exp>;
  daily_cap?: Maybe<String_Comparison_Exp>;
  daypart?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  exclude_current_customers?: Maybe<Int_Comparison_Exp>;
  flight_schedule?: Maybe<String_Comparison_Exp>;
  frequency_cap?: Maybe<String_Comparison_Exp>;
  frequency_cap_time_range?: Maybe<String_Comparison_Exp>;
  frequency_hard_cap?: Maybe<String_Comparison_Exp>;
  goal_optimization_event?: Maybe<String_Comparison_Exp>;
  goal_rate?: Maybe<String_Comparison_Exp>;
  goal_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inventory_type?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  optimization_modules?: Maybe<Optimization_Modules_Bool_Exp>;
  recency_max?: Maybe<Int_Comparison_Exp>;
  recency_max_time?: Maybe<String_Comparison_Exp>;
  recency_min?: Maybe<Int_Comparison_Exp>;
  recency_min_time?: Maybe<String_Comparison_Exp>;
  setup_modules?: Maybe<Setup_Modules_Bool_Exp>;
  special_pmp_packages?: Maybe<String_Comparison_Exp>;
  start_date?: Maybe<Timestamptz_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  tactic?: Maybe<Tactics_Bool_Exp>;
  tactic_id?: Maybe<Int_Comparison_Exp>;
  target_countries?: Maybe<String_Comparison_Exp>;
  target_dm_as?: Maybe<String_Comparison_Exp>;
  target_languages?: Maybe<String_Comparison_Exp>;
  target_state_regions?: Maybe<String_Comparison_Exp>;
  target_zips?: Maybe<String_Comparison_Exp>;
  traveler_segments?: Maybe<Traveler_Segments_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  viewability_target_percentage?: Maybe<String_Comparison_Exp>;
  volume?: Maybe<String_Comparison_Exp>;
  white_list_or_black_list?: Maybe<String_Comparison_Exp>;
};

export enum Channel_Sets_Constraint {
  ChannelSetsPkey = 'channel_sets_pkey'
}

export type Channel_Sets_Inc_Input = {
  contract_line_item_id?: Maybe<Scalars['Int']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_min?: Maybe<Scalars['Int']>;
  tactic_id?: Maybe<Scalars['Int']>;
};

export type Channel_Sets_Insert_Input = {
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_line_item?: Maybe<Contract_Line_Items_Obj_Rel_Insert_Input>;
  contract_line_item_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creatives?: Maybe<Creatives_Arr_Rel_Insert_Input>;
  daily_cap?: Maybe<Scalars['String']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  optimization_modules?: Maybe<Optimization_Modules_Arr_Rel_Insert_Input>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  setup_modules?: Maybe<Setup_Modules_Arr_Rel_Insert_Input>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tactic?: Maybe<Tactics_Obj_Rel_Insert_Input>;
  tactic_id?: Maybe<Scalars['Int']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_state_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  traveler_segments?: Maybe<Traveler_Segments_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  white_list_or_black_list?: Maybe<Scalars['String']>;
};

export type Channel_Sets_Max_Fields = {
  __typename?: 'channel_sets_max_fields';
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_line_item_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_cap?: Maybe<Scalars['String']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tactic_id?: Maybe<Scalars['Int']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_state_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  white_list_or_black_list?: Maybe<Scalars['String']>;
};

export type Channel_Sets_Max_Order_By = {
  brand_safety_packages?: Maybe<Order_By>;
  budget_impressions?: Maybe<Order_By>;
  budget_spend?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  contract_line_item_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  daily_cap?: Maybe<Order_By>;
  daypart?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  frequency_cap?: Maybe<Order_By>;
  frequency_cap_time_range?: Maybe<Order_By>;
  frequency_hard_cap?: Maybe<Order_By>;
  goal_optimization_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_max_time?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  recency_min_time?: Maybe<Order_By>;
  special_pmp_packages?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
  target_countries?: Maybe<Order_By>;
  target_dm_as?: Maybe<Order_By>;
  target_languages?: Maybe<Order_By>;
  target_state_regions?: Maybe<Order_By>;
  target_zips?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  viewability_target_percentage?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  white_list_or_black_list?: Maybe<Order_By>;
};

export type Channel_Sets_Min_Fields = {
  __typename?: 'channel_sets_min_fields';
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_line_item_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_cap?: Maybe<Scalars['String']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tactic_id?: Maybe<Scalars['Int']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_state_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  white_list_or_black_list?: Maybe<Scalars['String']>;
};

export type Channel_Sets_Min_Order_By = {
  brand_safety_packages?: Maybe<Order_By>;
  budget_impressions?: Maybe<Order_By>;
  budget_spend?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  contract_line_item_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  daily_cap?: Maybe<Order_By>;
  daypart?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  frequency_cap?: Maybe<Order_By>;
  frequency_cap_time_range?: Maybe<Order_By>;
  frequency_hard_cap?: Maybe<Order_By>;
  goal_optimization_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_max_time?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  recency_min_time?: Maybe<Order_By>;
  special_pmp_packages?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
  target_countries?: Maybe<Order_By>;
  target_dm_as?: Maybe<Order_By>;
  target_languages?: Maybe<Order_By>;
  target_state_regions?: Maybe<Order_By>;
  target_zips?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  viewability_target_percentage?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  white_list_or_black_list?: Maybe<Order_By>;
};

export type Channel_Sets_Mutation_Response = {
  __typename?: 'channel_sets_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Channel_Sets>;
};

export type Channel_Sets_Obj_Rel_Insert_Input = {
  data: Channel_Sets_Insert_Input;
  on_conflict?: Maybe<Channel_Sets_On_Conflict>;
};

export type Channel_Sets_On_Conflict = {
  constraint: Channel_Sets_Constraint;
  update_columns: Array<Channel_Sets_Update_Column>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};

export type Channel_Sets_Order_By = {
  brand_safety_packages?: Maybe<Order_By>;
  budget_impressions?: Maybe<Order_By>;
  budget_spend?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  contract_line_item?: Maybe<Contract_Line_Items_Order_By>;
  contract_line_item_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creatives_aggregate?: Maybe<Creatives_Aggregate_Order_By>;
  daily_cap?: Maybe<Order_By>;
  daypart?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  frequency_cap?: Maybe<Order_By>;
  frequency_cap_time_range?: Maybe<Order_By>;
  frequency_hard_cap?: Maybe<Order_By>;
  goal_optimization_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  optimization_modules_aggregate?: Maybe<Optimization_Modules_Aggregate_Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_max_time?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  recency_min_time?: Maybe<Order_By>;
  setup_modules_aggregate?: Maybe<Setup_Modules_Aggregate_Order_By>;
  special_pmp_packages?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tactic?: Maybe<Tactics_Order_By>;
  tactic_id?: Maybe<Order_By>;
  target_countries?: Maybe<Order_By>;
  target_dm_as?: Maybe<Order_By>;
  target_languages?: Maybe<Order_By>;
  target_state_regions?: Maybe<Order_By>;
  target_zips?: Maybe<Order_By>;
  traveler_segments_aggregate?: Maybe<Traveler_Segments_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  viewability_target_percentage?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  white_list_or_black_list?: Maybe<Order_By>;
};

export type Channel_Sets_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Channel_Sets_Select_Column {
  BrandSafetyPackages = 'brand_safety_packages',
  BudgetImpressions = 'budget_impressions',
  BudgetSpend = 'budget_spend',
  Channel = 'channel',
  ContractLineItemId = 'contract_line_item_id',
  CreatedAt = 'created_at',
  DailyCap = 'daily_cap',
  Daypart = 'daypart',
  EndDate = 'end_date',
  ExcludeCurrentCustomers = 'exclude_current_customers',
  FlightSchedule = 'flight_schedule',
  FrequencyCap = 'frequency_cap',
  FrequencyCapTimeRange = 'frequency_cap_time_range',
  FrequencyHardCap = 'frequency_hard_cap',
  GoalOptimizationEvent = 'goal_optimization_event',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  InventoryType = 'inventory_type',
  Name = 'name',
  RecencyMax = 'recency_max',
  RecencyMaxTime = 'recency_max_time',
  RecencyMin = 'recency_min',
  RecencyMinTime = 'recency_min_time',
  SpecialPmpPackages = 'special_pmp_packages',
  StartDate = 'start_date',
  Status = 'status',
  TacticId = 'tactic_id',
  TargetCountries = 'target_countries',
  TargetDmAs = 'target_dm_as',
  TargetLanguages = 'target_languages',
  TargetStateRegions = 'target_state_regions',
  TargetZips = 'target_zips',
  UpdatedAt = 'updated_at',
  ViewabilityTargetPercentage = 'viewability_target_percentage',
  Volume = 'volume',
  WhiteListOrBlackList = 'white_list_or_black_list'
}

export type Channel_Sets_Set_Input = {
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_line_item_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_cap?: Maybe<Scalars['String']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_optimization_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tactic_id?: Maybe<Scalars['Int']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_state_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  white_list_or_black_list?: Maybe<Scalars['String']>;
};

export type Channel_Sets_Stddev_Fields = {
  __typename?: 'channel_sets_stddev_fields';
  contract_line_item_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
  tactic_id?: Maybe<Scalars['Float']>;
};

export type Channel_Sets_Stddev_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export type Channel_Sets_Stddev_Pop_Fields = {
  __typename?: 'channel_sets_stddev_pop_fields';
  contract_line_item_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
  tactic_id?: Maybe<Scalars['Float']>;
};

export type Channel_Sets_Stddev_Pop_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export type Channel_Sets_Stddev_Samp_Fields = {
  __typename?: 'channel_sets_stddev_samp_fields';
  contract_line_item_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
  tactic_id?: Maybe<Scalars['Float']>;
};

export type Channel_Sets_Stddev_Samp_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export type Channel_Sets_Sum_Fields = {
  __typename?: 'channel_sets_sum_fields';
  contract_line_item_id?: Maybe<Scalars['Int']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_min?: Maybe<Scalars['Int']>;
  tactic_id?: Maybe<Scalars['Int']>;
};

export type Channel_Sets_Sum_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export enum Channel_Sets_Update_Column {
  BrandSafetyPackages = 'brand_safety_packages',
  BudgetImpressions = 'budget_impressions',
  BudgetSpend = 'budget_spend',
  Channel = 'channel',
  ContractLineItemId = 'contract_line_item_id',
  CreatedAt = 'created_at',
  DailyCap = 'daily_cap',
  Daypart = 'daypart',
  EndDate = 'end_date',
  ExcludeCurrentCustomers = 'exclude_current_customers',
  FlightSchedule = 'flight_schedule',
  FrequencyCap = 'frequency_cap',
  FrequencyCapTimeRange = 'frequency_cap_time_range',
  FrequencyHardCap = 'frequency_hard_cap',
  GoalOptimizationEvent = 'goal_optimization_event',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  InventoryType = 'inventory_type',
  Name = 'name',
  RecencyMax = 'recency_max',
  RecencyMaxTime = 'recency_max_time',
  RecencyMin = 'recency_min',
  RecencyMinTime = 'recency_min_time',
  SpecialPmpPackages = 'special_pmp_packages',
  StartDate = 'start_date',
  Status = 'status',
  TacticId = 'tactic_id',
  TargetCountries = 'target_countries',
  TargetDmAs = 'target_dm_as',
  TargetLanguages = 'target_languages',
  TargetStateRegions = 'target_state_regions',
  TargetZips = 'target_zips',
  UpdatedAt = 'updated_at',
  ViewabilityTargetPercentage = 'viewability_target_percentage',
  Volume = 'volume',
  WhiteListOrBlackList = 'white_list_or_black_list'
}

export type Channel_Sets_Var_Pop_Fields = {
  __typename?: 'channel_sets_var_pop_fields';
  contract_line_item_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
  tactic_id?: Maybe<Scalars['Float']>;
};

export type Channel_Sets_Var_Pop_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export type Channel_Sets_Var_Samp_Fields = {
  __typename?: 'channel_sets_var_samp_fields';
  contract_line_item_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
  tactic_id?: Maybe<Scalars['Float']>;
};

export type Channel_Sets_Var_Samp_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export type Channel_Sets_Variance_Fields = {
  __typename?: 'channel_sets_variance_fields';
  contract_line_item_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
  tactic_id?: Maybe<Scalars['Float']>;
};

export type Channel_Sets_Variance_Order_By = {
  contract_line_item_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  tactic_id?: Maybe<Order_By>;
};

export type Contract_Line_Items = {
  __typename?: 'contract_line_items';
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  calculated_volume?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  channel_sets: Array<Channel_Sets>;
  channel_sets_aggregate: Channel_Sets_Aggregate;
  contract?: Maybe<Contracts>;
  contract_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inventory_type?: Maybe<Scalars['String']>;
  line_item_type?: Maybe<Scalars['String']>;
  min_margin?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  promotion_id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  reporting_source?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_states_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  viewability_target_percentage?: Maybe<Scalars['String']>;
  white_list_black_list?: Maybe<Scalars['String']>;
};


export type Contract_Line_ItemsChannel_SetsArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};


export type Contract_Line_ItemsChannel_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};

export type Contract_Line_Items_Aggregate = {
  __typename?: 'contract_line_items_aggregate';
  aggregate?: Maybe<Contract_Line_Items_Aggregate_Fields>;
  nodes: Array<Contract_Line_Items>;
};

export type Contract_Line_Items_Aggregate_Fields = {
  __typename?: 'contract_line_items_aggregate_fields';
  avg?: Maybe<Contract_Line_Items_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contract_Line_Items_Max_Fields>;
  min?: Maybe<Contract_Line_Items_Min_Fields>;
  stddev?: Maybe<Contract_Line_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Contract_Line_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contract_Line_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Contract_Line_Items_Sum_Fields>;
  var_pop?: Maybe<Contract_Line_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Contract_Line_Items_Var_Samp_Fields>;
  variance?: Maybe<Contract_Line_Items_Variance_Fields>;
};


export type Contract_Line_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contract_Line_Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Contract_Line_Items_Aggregate_Order_By = {
  avg?: Maybe<Contract_Line_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contract_Line_Items_Max_Order_By>;
  min?: Maybe<Contract_Line_Items_Min_Order_By>;
  stddev?: Maybe<Contract_Line_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Contract_Line_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contract_Line_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Contract_Line_Items_Sum_Order_By>;
  var_pop?: Maybe<Contract_Line_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Contract_Line_Items_Var_Samp_Order_By>;
  variance?: Maybe<Contract_Line_Items_Variance_Order_By>;
};

export type Contract_Line_Items_Arr_Rel_Insert_Input = {
  data: Array<Contract_Line_Items_Insert_Input>;
  on_conflict?: Maybe<Contract_Line_Items_On_Conflict>;
};

export type Contract_Line_Items_Avg_Fields = {
  __typename?: 'contract_line_items_avg_fields';
  contract_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  promotion_id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
};

export type Contract_Line_Items_Avg_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export type Contract_Line_Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contract_Line_Items_Bool_Exp>>>;
  _not?: Maybe<Contract_Line_Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contract_Line_Items_Bool_Exp>>>;
  brand_safety_packages?: Maybe<String_Comparison_Exp>;
  budget_impressions?: Maybe<String_Comparison_Exp>;
  budget_spend?: Maybe<String_Comparison_Exp>;
  calculated_volume?: Maybe<String_Comparison_Exp>;
  channel?: Maybe<String_Comparison_Exp>;
  channel_sets?: Maybe<Channel_Sets_Bool_Exp>;
  contract?: Maybe<Contracts_Bool_Exp>;
  contract_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  daypart?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  exclude_current_customers?: Maybe<Int_Comparison_Exp>;
  flight_schedule?: Maybe<String_Comparison_Exp>;
  frequency_cap?: Maybe<String_Comparison_Exp>;
  frequency_cap_time_range?: Maybe<String_Comparison_Exp>;
  frequency_hard_cap?: Maybe<String_Comparison_Exp>;
  goal_event?: Maybe<String_Comparison_Exp>;
  goal_rate?: Maybe<String_Comparison_Exp>;
  goal_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inventory_type?: Maybe<String_Comparison_Exp>;
  line_item_type?: Maybe<String_Comparison_Exp>;
  min_margin?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  promotion_id?: Maybe<Int_Comparison_Exp>;
  rate?: Maybe<String_Comparison_Exp>;
  rate_type?: Maybe<String_Comparison_Exp>;
  recency_max?: Maybe<Int_Comparison_Exp>;
  recency_max_time?: Maybe<String_Comparison_Exp>;
  recency_min?: Maybe<Int_Comparison_Exp>;
  recency_min_time?: Maybe<String_Comparison_Exp>;
  reporting_source?: Maybe<String_Comparison_Exp>;
  special_pmp_packages?: Maybe<String_Comparison_Exp>;
  start_date?: Maybe<Timestamptz_Comparison_Exp>;
  target_countries?: Maybe<String_Comparison_Exp>;
  target_dm_as?: Maybe<String_Comparison_Exp>;
  target_languages?: Maybe<String_Comparison_Exp>;
  target_states_regions?: Maybe<String_Comparison_Exp>;
  target_zips?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  viewability_target_percentage?: Maybe<String_Comparison_Exp>;
  white_list_black_list?: Maybe<String_Comparison_Exp>;
};

export enum Contract_Line_Items_Constraint {
  ContractLineItemsPkey = 'contract_line_items_pkey'
}

export type Contract_Line_Items_Inc_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  promotion_id?: Maybe<Scalars['Int']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_min?: Maybe<Scalars['Int']>;
};

export type Contract_Line_Items_Insert_Input = {
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  calculated_volume?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  channel_sets?: Maybe<Channel_Sets_Arr_Rel_Insert_Input>;
  contract?: Maybe<Contracts_Obj_Rel_Insert_Input>;
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  line_item_type?: Maybe<Scalars['String']>;
  min_margin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  promotion_id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  reporting_source?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_states_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  white_list_black_list?: Maybe<Scalars['String']>;
};

export type Contract_Line_Items_Max_Fields = {
  __typename?: 'contract_line_items_max_fields';
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  calculated_volume?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  line_item_type?: Maybe<Scalars['String']>;
  min_margin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  promotion_id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  reporting_source?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_states_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  white_list_black_list?: Maybe<Scalars['String']>;
};

export type Contract_Line_Items_Max_Order_By = {
  brand_safety_packages?: Maybe<Order_By>;
  budget_impressions?: Maybe<Order_By>;
  budget_spend?: Maybe<Order_By>;
  calculated_volume?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  daypart?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  frequency_cap?: Maybe<Order_By>;
  frequency_cap_time_range?: Maybe<Order_By>;
  frequency_hard_cap?: Maybe<Order_By>;
  goal_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_type?: Maybe<Order_By>;
  line_item_type?: Maybe<Order_By>;
  min_margin?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  rate_type?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_max_time?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  recency_min_time?: Maybe<Order_By>;
  reporting_source?: Maybe<Order_By>;
  special_pmp_packages?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  target_countries?: Maybe<Order_By>;
  target_dm_as?: Maybe<Order_By>;
  target_languages?: Maybe<Order_By>;
  target_states_regions?: Maybe<Order_By>;
  target_zips?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  viewability_target_percentage?: Maybe<Order_By>;
  white_list_black_list?: Maybe<Order_By>;
};

export type Contract_Line_Items_Min_Fields = {
  __typename?: 'contract_line_items_min_fields';
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  calculated_volume?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  line_item_type?: Maybe<Scalars['String']>;
  min_margin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  promotion_id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  reporting_source?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_states_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  white_list_black_list?: Maybe<Scalars['String']>;
};

export type Contract_Line_Items_Min_Order_By = {
  brand_safety_packages?: Maybe<Order_By>;
  budget_impressions?: Maybe<Order_By>;
  budget_spend?: Maybe<Order_By>;
  calculated_volume?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  daypart?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  frequency_cap?: Maybe<Order_By>;
  frequency_cap_time_range?: Maybe<Order_By>;
  frequency_hard_cap?: Maybe<Order_By>;
  goal_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_type?: Maybe<Order_By>;
  line_item_type?: Maybe<Order_By>;
  min_margin?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  rate_type?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_max_time?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  recency_min_time?: Maybe<Order_By>;
  reporting_source?: Maybe<Order_By>;
  special_pmp_packages?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  target_countries?: Maybe<Order_By>;
  target_dm_as?: Maybe<Order_By>;
  target_languages?: Maybe<Order_By>;
  target_states_regions?: Maybe<Order_By>;
  target_zips?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  viewability_target_percentage?: Maybe<Order_By>;
  white_list_black_list?: Maybe<Order_By>;
};

export type Contract_Line_Items_Mutation_Response = {
  __typename?: 'contract_line_items_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Contract_Line_Items>;
};

export type Contract_Line_Items_Obj_Rel_Insert_Input = {
  data: Contract_Line_Items_Insert_Input;
  on_conflict?: Maybe<Contract_Line_Items_On_Conflict>;
};

export type Contract_Line_Items_On_Conflict = {
  constraint: Contract_Line_Items_Constraint;
  update_columns: Array<Contract_Line_Items_Update_Column>;
  where?: Maybe<Contract_Line_Items_Bool_Exp>;
};

export type Contract_Line_Items_Order_By = {
  brand_safety_packages?: Maybe<Order_By>;
  budget_impressions?: Maybe<Order_By>;
  budget_spend?: Maybe<Order_By>;
  calculated_volume?: Maybe<Order_By>;
  channel?: Maybe<Order_By>;
  channel_sets_aggregate?: Maybe<Channel_Sets_Aggregate_Order_By>;
  contract?: Maybe<Contracts_Order_By>;
  contract_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  daypart?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  frequency_cap?: Maybe<Order_By>;
  frequency_cap_time_range?: Maybe<Order_By>;
  frequency_hard_cap?: Maybe<Order_By>;
  goal_event?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_type?: Maybe<Order_By>;
  line_item_type?: Maybe<Order_By>;
  min_margin?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  rate_type?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_max_time?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
  recency_min_time?: Maybe<Order_By>;
  reporting_source?: Maybe<Order_By>;
  special_pmp_packages?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  target_countries?: Maybe<Order_By>;
  target_dm_as?: Maybe<Order_By>;
  target_languages?: Maybe<Order_By>;
  target_states_regions?: Maybe<Order_By>;
  target_zips?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  viewability_target_percentage?: Maybe<Order_By>;
  white_list_black_list?: Maybe<Order_By>;
};

export type Contract_Line_Items_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Contract_Line_Items_Select_Column {
  BrandSafetyPackages = 'brand_safety_packages',
  BudgetImpressions = 'budget_impressions',
  BudgetSpend = 'budget_spend',
  CalculatedVolume = 'calculated_volume',
  Channel = 'channel',
  ContractId = 'contract_id',
  CreatedAt = 'created_at',
  Daypart = 'daypart',
  EndDate = 'end_date',
  ExcludeCurrentCustomers = 'exclude_current_customers',
  FlightSchedule = 'flight_schedule',
  FrequencyCap = 'frequency_cap',
  FrequencyCapTimeRange = 'frequency_cap_time_range',
  FrequencyHardCap = 'frequency_hard_cap',
  GoalEvent = 'goal_event',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  InventoryType = 'inventory_type',
  LineItemType = 'line_item_type',
  MinMargin = 'min_margin',
  Name = 'name',
  Notes = 'notes',
  PromotionId = 'promotion_id',
  Rate = 'rate',
  RateType = 'rate_type',
  RecencyMax = 'recency_max',
  RecencyMaxTime = 'recency_max_time',
  RecencyMin = 'recency_min',
  RecencyMinTime = 'recency_min_time',
  ReportingSource = 'reporting_source',
  SpecialPmpPackages = 'special_pmp_packages',
  StartDate = 'start_date',
  TargetCountries = 'target_countries',
  TargetDmAs = 'target_dm_as',
  TargetLanguages = 'target_languages',
  TargetStatesRegions = 'target_states_regions',
  TargetZips = 'target_zips',
  UpdatedAt = 'updated_at',
  ViewabilityTargetPercentage = 'viewability_target_percentage',
  WhiteListBlackList = 'white_list_black_list'
}

export type Contract_Line_Items_Set_Input = {
  brand_safety_packages?: Maybe<Scalars['String']>;
  budget_impressions?: Maybe<Scalars['String']>;
  budget_spend?: Maybe<Scalars['String']>;
  calculated_volume?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  contract_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  daypart?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  flight_schedule?: Maybe<Scalars['String']>;
  frequency_cap?: Maybe<Scalars['String']>;
  frequency_cap_time_range?: Maybe<Scalars['String']>;
  frequency_hard_cap?: Maybe<Scalars['String']>;
  goal_event?: Maybe<Scalars['String']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventory_type?: Maybe<Scalars['String']>;
  line_item_type?: Maybe<Scalars['String']>;
  min_margin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  promotion_id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['String']>;
  rate_type?: Maybe<Scalars['String']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_max_time?: Maybe<Scalars['String']>;
  recency_min?: Maybe<Scalars['Int']>;
  recency_min_time?: Maybe<Scalars['String']>;
  reporting_source?: Maybe<Scalars['String']>;
  special_pmp_packages?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  target_countries?: Maybe<Scalars['String']>;
  target_dm_as?: Maybe<Scalars['String']>;
  target_languages?: Maybe<Scalars['String']>;
  target_states_regions?: Maybe<Scalars['String']>;
  target_zips?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewability_target_percentage?: Maybe<Scalars['String']>;
  white_list_black_list?: Maybe<Scalars['String']>;
};

export type Contract_Line_Items_Stddev_Fields = {
  __typename?: 'contract_line_items_stddev_fields';
  contract_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  promotion_id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
};

export type Contract_Line_Items_Stddev_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export type Contract_Line_Items_Stddev_Pop_Fields = {
  __typename?: 'contract_line_items_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  promotion_id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
};

export type Contract_Line_Items_Stddev_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export type Contract_Line_Items_Stddev_Samp_Fields = {
  __typename?: 'contract_line_items_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  promotion_id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
};

export type Contract_Line_Items_Stddev_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export type Contract_Line_Items_Sum_Fields = {
  __typename?: 'contract_line_items_sum_fields';
  contract_id?: Maybe<Scalars['Int']>;
  exclude_current_customers?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  promotion_id?: Maybe<Scalars['Int']>;
  recency_max?: Maybe<Scalars['Int']>;
  recency_min?: Maybe<Scalars['Int']>;
};

export type Contract_Line_Items_Sum_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export enum Contract_Line_Items_Update_Column {
  BrandSafetyPackages = 'brand_safety_packages',
  BudgetImpressions = 'budget_impressions',
  BudgetSpend = 'budget_spend',
  CalculatedVolume = 'calculated_volume',
  Channel = 'channel',
  ContractId = 'contract_id',
  CreatedAt = 'created_at',
  Daypart = 'daypart',
  EndDate = 'end_date',
  ExcludeCurrentCustomers = 'exclude_current_customers',
  FlightSchedule = 'flight_schedule',
  FrequencyCap = 'frequency_cap',
  FrequencyCapTimeRange = 'frequency_cap_time_range',
  FrequencyHardCap = 'frequency_hard_cap',
  GoalEvent = 'goal_event',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  InventoryType = 'inventory_type',
  LineItemType = 'line_item_type',
  MinMargin = 'min_margin',
  Name = 'name',
  Notes = 'notes',
  PromotionId = 'promotion_id',
  Rate = 'rate',
  RateType = 'rate_type',
  RecencyMax = 'recency_max',
  RecencyMaxTime = 'recency_max_time',
  RecencyMin = 'recency_min',
  RecencyMinTime = 'recency_min_time',
  ReportingSource = 'reporting_source',
  SpecialPmpPackages = 'special_pmp_packages',
  StartDate = 'start_date',
  TargetCountries = 'target_countries',
  TargetDmAs = 'target_dm_as',
  TargetLanguages = 'target_languages',
  TargetStatesRegions = 'target_states_regions',
  TargetZips = 'target_zips',
  UpdatedAt = 'updated_at',
  ViewabilityTargetPercentage = 'viewability_target_percentage',
  WhiteListBlackList = 'white_list_black_list'
}

export type Contract_Line_Items_Var_Pop_Fields = {
  __typename?: 'contract_line_items_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  promotion_id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
};

export type Contract_Line_Items_Var_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export type Contract_Line_Items_Var_Samp_Fields = {
  __typename?: 'contract_line_items_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  promotion_id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
};

export type Contract_Line_Items_Var_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export type Contract_Line_Items_Variance_Fields = {
  __typename?: 'contract_line_items_variance_fields';
  contract_id?: Maybe<Scalars['Float']>;
  exclude_current_customers?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  promotion_id?: Maybe<Scalars['Float']>;
  recency_max?: Maybe<Scalars['Float']>;
  recency_min?: Maybe<Scalars['Float']>;
};

export type Contract_Line_Items_Variance_Order_By = {
  contract_id?: Maybe<Order_By>;
  exclude_current_customers?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  promotion_id?: Maybe<Order_By>;
  recency_max?: Maybe<Order_By>;
  recency_min?: Maybe<Order_By>;
};

export type Contracts = {
  __typename?: 'contracts';
  account?: Maybe<Accounts>;
  account_id?: Maybe<Scalars['Int']>;
  bill_to?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['String']>;
  campaigns: Array<Campaigns>;
  campaigns_aggregate: Campaigns_Aggregate;
  contract_line_items: Array<Contract_Line_Items>;
  contract_line_items_aggregate: Contract_Line_Items_Aggregate;
  created_at: Scalars['timestamptz'];
  currency?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  flight_schedule?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  sfdc_opportunity_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tc_version?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  uploaded_executed_contract_link?: Maybe<Scalars['String']>;
};


export type ContractsCampaignsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


export type ContractsCampaigns_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


export type ContractsContract_Line_ItemsArgs = {
  distinct_on?: Maybe<Array<Contract_Line_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contract_Line_Items_Order_By>>;
  where?: Maybe<Contract_Line_Items_Bool_Exp>;
};


export type ContractsContract_Line_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Contract_Line_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contract_Line_Items_Order_By>>;
  where?: Maybe<Contract_Line_Items_Bool_Exp>;
};

export type Contracts_Aggregate = {
  __typename?: 'contracts_aggregate';
  aggregate?: Maybe<Contracts_Aggregate_Fields>;
  nodes: Array<Contracts>;
};

export type Contracts_Aggregate_Fields = {
  __typename?: 'contracts_aggregate_fields';
  avg?: Maybe<Contracts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contracts_Max_Fields>;
  min?: Maybe<Contracts_Min_Fields>;
  stddev?: Maybe<Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Sum_Fields>;
  var_pop?: Maybe<Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Variance_Fields>;
};


export type Contracts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contracts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Contracts_Aggregate_Order_By = {
  avg?: Maybe<Contracts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contracts_Max_Order_By>;
  min?: Maybe<Contracts_Min_Order_By>;
  stddev?: Maybe<Contracts_Stddev_Order_By>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Order_By>;
  sum?: Maybe<Contracts_Sum_Order_By>;
  var_pop?: Maybe<Contracts_Var_Pop_Order_By>;
  var_samp?: Maybe<Contracts_Var_Samp_Order_By>;
  variance?: Maybe<Contracts_Variance_Order_By>;
};

export type Contracts_Arr_Rel_Insert_Input = {
  data: Array<Contracts_Insert_Input>;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};

export type Contracts_Avg_Fields = {
  __typename?: 'contracts_avg_fields';
  account_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sfdc_opportunity_id?: Maybe<Scalars['Float']>;
};

export type Contracts_Avg_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export type Contracts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contracts_Bool_Exp>>>;
  _not?: Maybe<Contracts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contracts_Bool_Exp>>>;
  account?: Maybe<Accounts_Bool_Exp>;
  account_id?: Maybe<Int_Comparison_Exp>;
  bill_to?: Maybe<String_Comparison_Exp>;
  budget?: Maybe<String_Comparison_Exp>;
  campaigns?: Maybe<Campaigns_Bool_Exp>;
  contract_line_items?: Maybe<Contract_Line_Items_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  currency?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  flight_schedule?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  sfdc_opportunity_id?: Maybe<Int_Comparison_Exp>;
  start_date?: Maybe<Timestamptz_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  tc_version?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uploaded_executed_contract_link?: Maybe<String_Comparison_Exp>;
};

export enum Contracts_Constraint {
  ContractsPkey = 'contracts_pkey'
}

export type Contracts_Inc_Input = {
  account_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sfdc_opportunity_id?: Maybe<Scalars['Int']>;
};

export type Contracts_Insert_Input = {
  account?: Maybe<Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['Int']>;
  bill_to?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['String']>;
  campaigns?: Maybe<Campaigns_Arr_Rel_Insert_Input>;
  contract_line_items?: Maybe<Contract_Line_Items_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  flight_schedule?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  sfdc_opportunity_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tc_version?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_executed_contract_link?: Maybe<Scalars['String']>;
};

export type Contracts_Max_Fields = {
  __typename?: 'contracts_max_fields';
  account_id?: Maybe<Scalars['Int']>;
  bill_to?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  flight_schedule?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  sfdc_opportunity_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tc_version?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_executed_contract_link?: Maybe<Scalars['String']>;
};

export type Contracts_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  bill_to?: Maybe<Order_By>;
  budget?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tc_version?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploaded_executed_contract_link?: Maybe<Order_By>;
};

export type Contracts_Min_Fields = {
  __typename?: 'contracts_min_fields';
  account_id?: Maybe<Scalars['Int']>;
  bill_to?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  flight_schedule?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  sfdc_opportunity_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tc_version?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_executed_contract_link?: Maybe<Scalars['String']>;
};

export type Contracts_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  bill_to?: Maybe<Order_By>;
  budget?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tc_version?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploaded_executed_contract_link?: Maybe<Order_By>;
};

export type Contracts_Mutation_Response = {
  __typename?: 'contracts_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Contracts>;
};

export type Contracts_Obj_Rel_Insert_Input = {
  data: Contracts_Insert_Input;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};

export type Contracts_On_Conflict = {
  constraint: Contracts_Constraint;
  update_columns: Array<Contracts_Update_Column>;
  where?: Maybe<Contracts_Bool_Exp>;
};

export type Contracts_Order_By = {
  account?: Maybe<Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  bill_to?: Maybe<Order_By>;
  budget?: Maybe<Order_By>;
  campaigns_aggregate?: Maybe<Campaigns_Aggregate_Order_By>;
  contract_line_items_aggregate?: Maybe<Contract_Line_Items_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  flight_schedule?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tc_version?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploaded_executed_contract_link?: Maybe<Order_By>;
};

export type Contracts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Contracts_Select_Column {
  AccountId = 'account_id',
  BillTo = 'bill_to',
  Budget = 'budget',
  CreatedAt = 'created_at',
  Currency = 'currency',
  EndDate = 'end_date',
  FlightSchedule = 'flight_schedule',
  Id = 'id',
  Name = 'name',
  Notes = 'notes',
  SfdcOpportunityId = 'sfdc_opportunity_id',
  StartDate = 'start_date',
  Status = 'status',
  TcVersion = 'tc_version',
  Type = 'type',
  UpdatedAt = 'updated_at',
  UploadedExecutedContractLink = 'uploaded_executed_contract_link'
}

export type Contracts_Set_Input = {
  account_id?: Maybe<Scalars['Int']>;
  bill_to?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  flight_schedule?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  sfdc_opportunity_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  tc_version?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_executed_contract_link?: Maybe<Scalars['String']>;
};

export type Contracts_Stddev_Fields = {
  __typename?: 'contracts_stddev_fields';
  account_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sfdc_opportunity_id?: Maybe<Scalars['Float']>;
};

export type Contracts_Stddev_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export type Contracts_Stddev_Pop_Fields = {
  __typename?: 'contracts_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sfdc_opportunity_id?: Maybe<Scalars['Float']>;
};

export type Contracts_Stddev_Pop_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export type Contracts_Stddev_Samp_Fields = {
  __typename?: 'contracts_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sfdc_opportunity_id?: Maybe<Scalars['Float']>;
};

export type Contracts_Stddev_Samp_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export type Contracts_Sum_Fields = {
  __typename?: 'contracts_sum_fields';
  account_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sfdc_opportunity_id?: Maybe<Scalars['Int']>;
};

export type Contracts_Sum_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export enum Contracts_Update_Column {
  AccountId = 'account_id',
  BillTo = 'bill_to',
  Budget = 'budget',
  CreatedAt = 'created_at',
  Currency = 'currency',
  EndDate = 'end_date',
  FlightSchedule = 'flight_schedule',
  Id = 'id',
  Name = 'name',
  Notes = 'notes',
  SfdcOpportunityId = 'sfdc_opportunity_id',
  StartDate = 'start_date',
  Status = 'status',
  TcVersion = 'tc_version',
  Type = 'type',
  UpdatedAt = 'updated_at',
  UploadedExecutedContractLink = 'uploaded_executed_contract_link'
}

export type Contracts_Var_Pop_Fields = {
  __typename?: 'contracts_var_pop_fields';
  account_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sfdc_opportunity_id?: Maybe<Scalars['Float']>;
};

export type Contracts_Var_Pop_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export type Contracts_Var_Samp_Fields = {
  __typename?: 'contracts_var_samp_fields';
  account_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sfdc_opportunity_id?: Maybe<Scalars['Float']>;
};

export type Contracts_Var_Samp_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export type Contracts_Variance_Fields = {
  __typename?: 'contracts_variance_fields';
  account_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sfdc_opportunity_id?: Maybe<Scalars['Float']>;
};

export type Contracts_Variance_Order_By = {
  account_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sfdc_opportunity_id?: Maybe<Order_By>;
};

export type Creatives = {
  __typename?: 'creatives';
  channel_set?: Maybe<Channel_Sets>;
  channel_set_id?: Maybe<Scalars['Int']>;
  click_tracking_tag?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  creative_data?: Maybe<Scalars['String']>;
  creative_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  impression_tracking_tag?: Maybe<Scalars['String']>;
  landing_page_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size_or_format?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

export type Creatives_Aggregate = {
  __typename?: 'creatives_aggregate';
  aggregate?: Maybe<Creatives_Aggregate_Fields>;
  nodes: Array<Creatives>;
};

export type Creatives_Aggregate_Fields = {
  __typename?: 'creatives_aggregate_fields';
  avg?: Maybe<Creatives_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Creatives_Max_Fields>;
  min?: Maybe<Creatives_Min_Fields>;
  stddev?: Maybe<Creatives_Stddev_Fields>;
  stddev_pop?: Maybe<Creatives_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Creatives_Stddev_Samp_Fields>;
  sum?: Maybe<Creatives_Sum_Fields>;
  var_pop?: Maybe<Creatives_Var_Pop_Fields>;
  var_samp?: Maybe<Creatives_Var_Samp_Fields>;
  variance?: Maybe<Creatives_Variance_Fields>;
};


export type Creatives_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Creatives_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Creatives_Aggregate_Order_By = {
  avg?: Maybe<Creatives_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Creatives_Max_Order_By>;
  min?: Maybe<Creatives_Min_Order_By>;
  stddev?: Maybe<Creatives_Stddev_Order_By>;
  stddev_pop?: Maybe<Creatives_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Creatives_Stddev_Samp_Order_By>;
  sum?: Maybe<Creatives_Sum_Order_By>;
  var_pop?: Maybe<Creatives_Var_Pop_Order_By>;
  var_samp?: Maybe<Creatives_Var_Samp_Order_By>;
  variance?: Maybe<Creatives_Variance_Order_By>;
};

export type Creatives_Arr_Rel_Insert_Input = {
  data: Array<Creatives_Insert_Input>;
  on_conflict?: Maybe<Creatives_On_Conflict>;
};

export type Creatives_Avg_Fields = {
  __typename?: 'creatives_avg_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Creatives_Avg_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Creatives_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Creatives_Bool_Exp>>>;
  _not?: Maybe<Creatives_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Creatives_Bool_Exp>>>;
  channel_set?: Maybe<Channel_Sets_Bool_Exp>;
  channel_set_id?: Maybe<Int_Comparison_Exp>;
  click_tracking_tag?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  creative_data?: Maybe<String_Comparison_Exp>;
  creative_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  impression_tracking_tag?: Maybe<String_Comparison_Exp>;
  landing_page_url?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  size_or_format?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Creatives_Constraint {
  CreativesPkey = 'creatives_pkey'
}

export type Creatives_Inc_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Creatives_Insert_Input = {
  channel_set?: Maybe<Channel_Sets_Obj_Rel_Insert_Input>;
  channel_set_id?: Maybe<Scalars['Int']>;
  click_tracking_tag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creative_data?: Maybe<Scalars['String']>;
  creative_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  impression_tracking_tag?: Maybe<Scalars['String']>;
  landing_page_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size_or_format?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Creatives_Max_Fields = {
  __typename?: 'creatives_max_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  click_tracking_tag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creative_data?: Maybe<Scalars['String']>;
  creative_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  impression_tracking_tag?: Maybe<Scalars['String']>;
  landing_page_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size_or_format?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Creatives_Max_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  click_tracking_tag?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creative_data?: Maybe<Order_By>;
  creative_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  impression_tracking_tag?: Maybe<Order_By>;
  landing_page_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  size_or_format?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Creatives_Min_Fields = {
  __typename?: 'creatives_min_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  click_tracking_tag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creative_data?: Maybe<Scalars['String']>;
  creative_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  impression_tracking_tag?: Maybe<Scalars['String']>;
  landing_page_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size_or_format?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Creatives_Min_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  click_tracking_tag?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creative_data?: Maybe<Order_By>;
  creative_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  impression_tracking_tag?: Maybe<Order_By>;
  landing_page_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  size_or_format?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Creatives_Mutation_Response = {
  __typename?: 'creatives_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Creatives>;
};

export type Creatives_Obj_Rel_Insert_Input = {
  data: Creatives_Insert_Input;
  on_conflict?: Maybe<Creatives_On_Conflict>;
};

export type Creatives_On_Conflict = {
  constraint: Creatives_Constraint;
  update_columns: Array<Creatives_Update_Column>;
  where?: Maybe<Creatives_Bool_Exp>;
};

export type Creatives_Order_By = {
  channel_set?: Maybe<Channel_Sets_Order_By>;
  channel_set_id?: Maybe<Order_By>;
  click_tracking_tag?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creative_data?: Maybe<Order_By>;
  creative_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  impression_tracking_tag?: Maybe<Order_By>;
  landing_page_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  size_or_format?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Creatives_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Creatives_Select_Column {
  ChannelSetId = 'channel_set_id',
  ClickTrackingTag = 'click_tracking_tag',
  CreatedAt = 'created_at',
  CreativeData = 'creative_data',
  CreativeType = 'creative_type',
  Id = 'id',
  ImpressionTrackingTag = 'impression_tracking_tag',
  LandingPageUrl = 'landing_page_url',
  Name = 'name',
  SizeOrFormat = 'size_or_format',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type Creatives_Set_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  click_tracking_tag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creative_data?: Maybe<Scalars['String']>;
  creative_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  impression_tracking_tag?: Maybe<Scalars['String']>;
  landing_page_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size_or_format?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Creatives_Stddev_Fields = {
  __typename?: 'creatives_stddev_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Creatives_Stddev_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Creatives_Stddev_Pop_Fields = {
  __typename?: 'creatives_stddev_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Creatives_Stddev_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Creatives_Stddev_Samp_Fields = {
  __typename?: 'creatives_stddev_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Creatives_Stddev_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Creatives_Sum_Fields = {
  __typename?: 'creatives_sum_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Creatives_Sum_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Creatives_Update_Column {
  ChannelSetId = 'channel_set_id',
  ClickTrackingTag = 'click_tracking_tag',
  CreatedAt = 'created_at',
  CreativeData = 'creative_data',
  CreativeType = 'creative_type',
  Id = 'id',
  ImpressionTrackingTag = 'impression_tracking_tag',
  LandingPageUrl = 'landing_page_url',
  Name = 'name',
  SizeOrFormat = 'size_or_format',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type Creatives_Var_Pop_Fields = {
  __typename?: 'creatives_var_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Creatives_Var_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Creatives_Var_Samp_Fields = {
  __typename?: 'creatives_var_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Creatives_Var_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Creatives_Variance_Fields = {
  __typename?: 'creatives_variance_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Creatives_Variance_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  delete_account_channels?: Maybe<Account_Channels_Mutation_Response>;
  delete_account_channels_by_pk?: Maybe<Account_Channels>;
  delete_account_payment_terms?: Maybe<Account_Payment_Terms_Mutation_Response>;
  delete_account_payment_terms_by_pk?: Maybe<Account_Payment_Terms>;
  delete_account_regions?: Maybe<Account_Regions_Mutation_Response>;
  delete_account_regions_by_pk?: Maybe<Account_Regions>;
  delete_account_statuses?: Maybe<Account_Statuses_Mutation_Response>;
  delete_account_statuses_by_pk?: Maybe<Account_Statuses>;
  delete_account_tiers?: Maybe<Account_Tiers_Mutation_Response>;
  delete_account_tiers_by_pk?: Maybe<Account_Tiers>;
  delete_account_types?: Maybe<Account_Types_Mutation_Response>;
  delete_account_types_by_pk?: Maybe<Account_Types>;
  delete_account_verticals?: Maybe<Account_Verticals_Mutation_Response>;
  delete_account_verticals_by_pk?: Maybe<Account_Verticals>;
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  delete_accounts_by_pk?: Maybe<Accounts>;
  delete_campaigns?: Maybe<Campaigns_Mutation_Response>;
  delete_campaigns_by_pk?: Maybe<Campaigns>;
  delete_channel_sets?: Maybe<Channel_Sets_Mutation_Response>;
  delete_channel_sets_by_pk?: Maybe<Channel_Sets>;
  delete_contract_line_items?: Maybe<Contract_Line_Items_Mutation_Response>;
  delete_contract_line_items_by_pk?: Maybe<Contract_Line_Items>;
  delete_contracts?: Maybe<Contracts_Mutation_Response>;
  delete_contracts_by_pk?: Maybe<Contracts>;
  delete_creatives?: Maybe<Creatives_Mutation_Response>;
  delete_creatives_by_pk?: Maybe<Creatives>;
  delete_optimization_modules?: Maybe<Optimization_Modules_Mutation_Response>;
  delete_optimization_modules_by_pk?: Maybe<Optimization_Modules>;
  delete_setup_modules?: Maybe<Setup_Modules_Mutation_Response>;
  delete_setup_modules_by_pk?: Maybe<Setup_Modules>;
  delete_tactic_goal_types?: Maybe<Tactic_Goal_Types_Mutation_Response>;
  delete_tactic_goal_types_by_pk?: Maybe<Tactic_Goal_Types>;
  delete_tactic_types?: Maybe<Tactic_Types_Mutation_Response>;
  delete_tactic_types_by_pk?: Maybe<Tactic_Types>;
  delete_tactics?: Maybe<Tactics_Mutation_Response>;
  delete_tactics_by_pk?: Maybe<Tactics>;
  delete_traveler_segments?: Maybe<Traveler_Segments_Mutation_Response>;
  delete_traveler_segments_by_pk?: Maybe<Traveler_Segments>;
  insert_account_channels?: Maybe<Account_Channels_Mutation_Response>;
  insert_account_channels_one?: Maybe<Account_Channels>;
  insert_account_payment_terms?: Maybe<Account_Payment_Terms_Mutation_Response>;
  insert_account_payment_terms_one?: Maybe<Account_Payment_Terms>;
  insert_account_regions?: Maybe<Account_Regions_Mutation_Response>;
  insert_account_regions_one?: Maybe<Account_Regions>;
  insert_account_statuses?: Maybe<Account_Statuses_Mutation_Response>;
  insert_account_statuses_one?: Maybe<Account_Statuses>;
  insert_account_tiers?: Maybe<Account_Tiers_Mutation_Response>;
  insert_account_tiers_one?: Maybe<Account_Tiers>;
  insert_account_types?: Maybe<Account_Types_Mutation_Response>;
  insert_account_types_one?: Maybe<Account_Types>;
  insert_account_verticals?: Maybe<Account_Verticals_Mutation_Response>;
  insert_account_verticals_one?: Maybe<Account_Verticals>;
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  insert_accounts_one?: Maybe<Accounts>;
  insert_campaigns?: Maybe<Campaigns_Mutation_Response>;
  insert_campaigns_one?: Maybe<Campaigns>;
  insert_channel_sets?: Maybe<Channel_Sets_Mutation_Response>;
  insert_channel_sets_one?: Maybe<Channel_Sets>;
  insert_contract_line_items?: Maybe<Contract_Line_Items_Mutation_Response>;
  insert_contract_line_items_one?: Maybe<Contract_Line_Items>;
  insert_contracts?: Maybe<Contracts_Mutation_Response>;
  insert_contracts_one?: Maybe<Contracts>;
  insert_creatives?: Maybe<Creatives_Mutation_Response>;
  insert_creatives_one?: Maybe<Creatives>;
  insert_optimization_modules?: Maybe<Optimization_Modules_Mutation_Response>;
  insert_optimization_modules_one?: Maybe<Optimization_Modules>;
  insert_setup_modules?: Maybe<Setup_Modules_Mutation_Response>;
  insert_setup_modules_one?: Maybe<Setup_Modules>;
  insert_tactic_goal_types?: Maybe<Tactic_Goal_Types_Mutation_Response>;
  insert_tactic_goal_types_one?: Maybe<Tactic_Goal_Types>;
  insert_tactic_types?: Maybe<Tactic_Types_Mutation_Response>;
  insert_tactic_types_one?: Maybe<Tactic_Types>;
  insert_tactics?: Maybe<Tactics_Mutation_Response>;
  insert_tactics_one?: Maybe<Tactics>;
  insert_traveler_segments?: Maybe<Traveler_Segments_Mutation_Response>;
  insert_traveler_segments_one?: Maybe<Traveler_Segments>;
  update_account_channels?: Maybe<Account_Channels_Mutation_Response>;
  update_account_channels_by_pk?: Maybe<Account_Channels>;
  update_account_payment_terms?: Maybe<Account_Payment_Terms_Mutation_Response>;
  update_account_payment_terms_by_pk?: Maybe<Account_Payment_Terms>;
  update_account_regions?: Maybe<Account_Regions_Mutation_Response>;
  update_account_regions_by_pk?: Maybe<Account_Regions>;
  update_account_statuses?: Maybe<Account_Statuses_Mutation_Response>;
  update_account_statuses_by_pk?: Maybe<Account_Statuses>;
  update_account_tiers?: Maybe<Account_Tiers_Mutation_Response>;
  update_account_tiers_by_pk?: Maybe<Account_Tiers>;
  update_account_types?: Maybe<Account_Types_Mutation_Response>;
  update_account_types_by_pk?: Maybe<Account_Types>;
  update_account_verticals?: Maybe<Account_Verticals_Mutation_Response>;
  update_account_verticals_by_pk?: Maybe<Account_Verticals>;
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  update_accounts_by_pk?: Maybe<Accounts>;
  update_campaigns?: Maybe<Campaigns_Mutation_Response>;
  update_campaigns_by_pk?: Maybe<Campaigns>;
  update_channel_sets?: Maybe<Channel_Sets_Mutation_Response>;
  update_channel_sets_by_pk?: Maybe<Channel_Sets>;
  update_contract_line_items?: Maybe<Contract_Line_Items_Mutation_Response>;
  update_contract_line_items_by_pk?: Maybe<Contract_Line_Items>;
  update_contracts?: Maybe<Contracts_Mutation_Response>;
  update_contracts_by_pk?: Maybe<Contracts>;
  update_creatives?: Maybe<Creatives_Mutation_Response>;
  update_creatives_by_pk?: Maybe<Creatives>;
  update_optimization_modules?: Maybe<Optimization_Modules_Mutation_Response>;
  update_optimization_modules_by_pk?: Maybe<Optimization_Modules>;
  update_setup_modules?: Maybe<Setup_Modules_Mutation_Response>;
  update_setup_modules_by_pk?: Maybe<Setup_Modules>;
  update_tactic_goal_types?: Maybe<Tactic_Goal_Types_Mutation_Response>;
  update_tactic_goal_types_by_pk?: Maybe<Tactic_Goal_Types>;
  update_tactic_types?: Maybe<Tactic_Types_Mutation_Response>;
  update_tactic_types_by_pk?: Maybe<Tactic_Types>;
  update_tactics?: Maybe<Tactics_Mutation_Response>;
  update_tactics_by_pk?: Maybe<Tactics>;
  update_traveler_segments?: Maybe<Traveler_Segments_Mutation_Response>;
  update_traveler_segments_by_pk?: Maybe<Traveler_Segments>;
};


export type Mutation_RootDelete_Account_ChannelsArgs = {
  where: Account_Channels_Bool_Exp;
};


export type Mutation_RootDelete_Account_Channels_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Account_Payment_TermsArgs = {
  where: Account_Payment_Terms_Bool_Exp;
};


export type Mutation_RootDelete_Account_Payment_Terms_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Account_RegionsArgs = {
  where: Account_Regions_Bool_Exp;
};


export type Mutation_RootDelete_Account_Regions_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Account_StatusesArgs = {
  where: Account_Statuses_Bool_Exp;
};


export type Mutation_RootDelete_Account_Statuses_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Account_TiersArgs = {
  where: Account_Tiers_Bool_Exp;
};


export type Mutation_RootDelete_Account_Tiers_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Account_TypesArgs = {
  where: Account_Types_Bool_Exp;
};


export type Mutation_RootDelete_Account_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Account_VerticalsArgs = {
  where: Account_Verticals_Bool_Exp;
};


export type Mutation_RootDelete_Account_Verticals_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_CampaignsArgs = {
  where: Campaigns_Bool_Exp;
};


export type Mutation_RootDelete_Campaigns_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Channel_SetsArgs = {
  where: Channel_Sets_Bool_Exp;
};


export type Mutation_RootDelete_Channel_Sets_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Contract_Line_ItemsArgs = {
  where: Contract_Line_Items_Bool_Exp;
};


export type Mutation_RootDelete_Contract_Line_Items_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_ContractsArgs = {
  where: Contracts_Bool_Exp;
};


export type Mutation_RootDelete_Contracts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_CreativesArgs = {
  where: Creatives_Bool_Exp;
};


export type Mutation_RootDelete_Creatives_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Optimization_ModulesArgs = {
  where: Optimization_Modules_Bool_Exp;
};


export type Mutation_RootDelete_Optimization_Modules_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Setup_ModulesArgs = {
  where: Setup_Modules_Bool_Exp;
};


export type Mutation_RootDelete_Setup_Modules_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Tactic_Goal_TypesArgs = {
  where: Tactic_Goal_Types_Bool_Exp;
};


export type Mutation_RootDelete_Tactic_Goal_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Tactic_TypesArgs = {
  where: Tactic_Types_Bool_Exp;
};


export type Mutation_RootDelete_Tactic_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_TacticsArgs = {
  where: Tactics_Bool_Exp;
};


export type Mutation_RootDelete_Tactics_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Traveler_SegmentsArgs = {
  where: Traveler_Segments_Bool_Exp;
};


export type Mutation_RootDelete_Traveler_Segments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootInsert_Account_ChannelsArgs = {
  objects: Array<Account_Channels_Insert_Input>;
  on_conflict?: Maybe<Account_Channels_On_Conflict>;
};


export type Mutation_RootInsert_Account_Channels_OneArgs = {
  object: Account_Channels_Insert_Input;
  on_conflict?: Maybe<Account_Channels_On_Conflict>;
};


export type Mutation_RootInsert_Account_Payment_TermsArgs = {
  objects: Array<Account_Payment_Terms_Insert_Input>;
  on_conflict?: Maybe<Account_Payment_Terms_On_Conflict>;
};


export type Mutation_RootInsert_Account_Payment_Terms_OneArgs = {
  object: Account_Payment_Terms_Insert_Input;
  on_conflict?: Maybe<Account_Payment_Terms_On_Conflict>;
};


export type Mutation_RootInsert_Account_RegionsArgs = {
  objects: Array<Account_Regions_Insert_Input>;
  on_conflict?: Maybe<Account_Regions_On_Conflict>;
};


export type Mutation_RootInsert_Account_Regions_OneArgs = {
  object: Account_Regions_Insert_Input;
  on_conflict?: Maybe<Account_Regions_On_Conflict>;
};


export type Mutation_RootInsert_Account_StatusesArgs = {
  objects: Array<Account_Statuses_Insert_Input>;
  on_conflict?: Maybe<Account_Statuses_On_Conflict>;
};


export type Mutation_RootInsert_Account_Statuses_OneArgs = {
  object: Account_Statuses_Insert_Input;
  on_conflict?: Maybe<Account_Statuses_On_Conflict>;
};


export type Mutation_RootInsert_Account_TiersArgs = {
  objects: Array<Account_Tiers_Insert_Input>;
  on_conflict?: Maybe<Account_Tiers_On_Conflict>;
};


export type Mutation_RootInsert_Account_Tiers_OneArgs = {
  object: Account_Tiers_Insert_Input;
  on_conflict?: Maybe<Account_Tiers_On_Conflict>;
};


export type Mutation_RootInsert_Account_TypesArgs = {
  objects: Array<Account_Types_Insert_Input>;
  on_conflict?: Maybe<Account_Types_On_Conflict>;
};


export type Mutation_RootInsert_Account_Types_OneArgs = {
  object: Account_Types_Insert_Input;
  on_conflict?: Maybe<Account_Types_On_Conflict>;
};


export type Mutation_RootInsert_Account_VerticalsArgs = {
  objects: Array<Account_Verticals_Insert_Input>;
  on_conflict?: Maybe<Account_Verticals_On_Conflict>;
};


export type Mutation_RootInsert_Account_Verticals_OneArgs = {
  object: Account_Verticals_Insert_Input;
  on_conflict?: Maybe<Account_Verticals_On_Conflict>;
};


export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


export type Mutation_RootInsert_CampaignsArgs = {
  objects: Array<Campaigns_Insert_Input>;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};


export type Mutation_RootInsert_Campaigns_OneArgs = {
  object: Campaigns_Insert_Input;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};


export type Mutation_RootInsert_Channel_SetsArgs = {
  objects: Array<Channel_Sets_Insert_Input>;
  on_conflict?: Maybe<Channel_Sets_On_Conflict>;
};


export type Mutation_RootInsert_Channel_Sets_OneArgs = {
  object: Channel_Sets_Insert_Input;
  on_conflict?: Maybe<Channel_Sets_On_Conflict>;
};


export type Mutation_RootInsert_Contract_Line_ItemsArgs = {
  objects: Array<Contract_Line_Items_Insert_Input>;
  on_conflict?: Maybe<Contract_Line_Items_On_Conflict>;
};


export type Mutation_RootInsert_Contract_Line_Items_OneArgs = {
  object: Contract_Line_Items_Insert_Input;
  on_conflict?: Maybe<Contract_Line_Items_On_Conflict>;
};


export type Mutation_RootInsert_ContractsArgs = {
  objects: Array<Contracts_Insert_Input>;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};


export type Mutation_RootInsert_Contracts_OneArgs = {
  object: Contracts_Insert_Input;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};


export type Mutation_RootInsert_CreativesArgs = {
  objects: Array<Creatives_Insert_Input>;
  on_conflict?: Maybe<Creatives_On_Conflict>;
};


export type Mutation_RootInsert_Creatives_OneArgs = {
  object: Creatives_Insert_Input;
  on_conflict?: Maybe<Creatives_On_Conflict>;
};


export type Mutation_RootInsert_Optimization_ModulesArgs = {
  objects: Array<Optimization_Modules_Insert_Input>;
  on_conflict?: Maybe<Optimization_Modules_On_Conflict>;
};


export type Mutation_RootInsert_Optimization_Modules_OneArgs = {
  object: Optimization_Modules_Insert_Input;
  on_conflict?: Maybe<Optimization_Modules_On_Conflict>;
};


export type Mutation_RootInsert_Setup_ModulesArgs = {
  objects: Array<Setup_Modules_Insert_Input>;
  on_conflict?: Maybe<Setup_Modules_On_Conflict>;
};


export type Mutation_RootInsert_Setup_Modules_OneArgs = {
  object: Setup_Modules_Insert_Input;
  on_conflict?: Maybe<Setup_Modules_On_Conflict>;
};


export type Mutation_RootInsert_Tactic_Goal_TypesArgs = {
  objects: Array<Tactic_Goal_Types_Insert_Input>;
  on_conflict?: Maybe<Tactic_Goal_Types_On_Conflict>;
};


export type Mutation_RootInsert_Tactic_Goal_Types_OneArgs = {
  object: Tactic_Goal_Types_Insert_Input;
  on_conflict?: Maybe<Tactic_Goal_Types_On_Conflict>;
};


export type Mutation_RootInsert_Tactic_TypesArgs = {
  objects: Array<Tactic_Types_Insert_Input>;
  on_conflict?: Maybe<Tactic_Types_On_Conflict>;
};


export type Mutation_RootInsert_Tactic_Types_OneArgs = {
  object: Tactic_Types_Insert_Input;
  on_conflict?: Maybe<Tactic_Types_On_Conflict>;
};


export type Mutation_RootInsert_TacticsArgs = {
  objects: Array<Tactics_Insert_Input>;
  on_conflict?: Maybe<Tactics_On_Conflict>;
};


export type Mutation_RootInsert_Tactics_OneArgs = {
  object: Tactics_Insert_Input;
  on_conflict?: Maybe<Tactics_On_Conflict>;
};


export type Mutation_RootInsert_Traveler_SegmentsArgs = {
  objects: Array<Traveler_Segments_Insert_Input>;
  on_conflict?: Maybe<Traveler_Segments_On_Conflict>;
};


export type Mutation_RootInsert_Traveler_Segments_OneArgs = {
  object: Traveler_Segments_Insert_Input;
  on_conflict?: Maybe<Traveler_Segments_On_Conflict>;
};


export type Mutation_RootUpdate_Account_ChannelsArgs = {
  _set?: Maybe<Account_Channels_Set_Input>;
  where: Account_Channels_Bool_Exp;
};


export type Mutation_RootUpdate_Account_Channels_By_PkArgs = {
  _set?: Maybe<Account_Channels_Set_Input>;
  pk_columns: Account_Channels_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Account_Payment_TermsArgs = {
  _set?: Maybe<Account_Payment_Terms_Set_Input>;
  where: Account_Payment_Terms_Bool_Exp;
};


export type Mutation_RootUpdate_Account_Payment_Terms_By_PkArgs = {
  _set?: Maybe<Account_Payment_Terms_Set_Input>;
  pk_columns: Account_Payment_Terms_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Account_RegionsArgs = {
  _set?: Maybe<Account_Regions_Set_Input>;
  where: Account_Regions_Bool_Exp;
};


export type Mutation_RootUpdate_Account_Regions_By_PkArgs = {
  _set?: Maybe<Account_Regions_Set_Input>;
  pk_columns: Account_Regions_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Account_StatusesArgs = {
  _set?: Maybe<Account_Statuses_Set_Input>;
  where: Account_Statuses_Bool_Exp;
};


export type Mutation_RootUpdate_Account_Statuses_By_PkArgs = {
  _set?: Maybe<Account_Statuses_Set_Input>;
  pk_columns: Account_Statuses_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Account_TiersArgs = {
  _set?: Maybe<Account_Tiers_Set_Input>;
  where: Account_Tiers_Bool_Exp;
};


export type Mutation_RootUpdate_Account_Tiers_By_PkArgs = {
  _set?: Maybe<Account_Tiers_Set_Input>;
  pk_columns: Account_Tiers_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Account_TypesArgs = {
  _set?: Maybe<Account_Types_Set_Input>;
  where: Account_Types_Bool_Exp;
};


export type Mutation_RootUpdate_Account_Types_By_PkArgs = {
  _set?: Maybe<Account_Types_Set_Input>;
  pk_columns: Account_Types_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Account_VerticalsArgs = {
  _set?: Maybe<Account_Verticals_Set_Input>;
  where: Account_Verticals_Bool_Exp;
};


export type Mutation_RootUpdate_Account_Verticals_By_PkArgs = {
  _set?: Maybe<Account_Verticals_Set_Input>;
  pk_columns: Account_Verticals_Pk_Columns_Input;
};


export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: Maybe<Accounts_Inc_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: Maybe<Accounts_Inc_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


export type Mutation_RootUpdate_CampaignsArgs = {
  _inc?: Maybe<Campaigns_Inc_Input>;
  _set?: Maybe<Campaigns_Set_Input>;
  where: Campaigns_Bool_Exp;
};


export type Mutation_RootUpdate_Campaigns_By_PkArgs = {
  _inc?: Maybe<Campaigns_Inc_Input>;
  _set?: Maybe<Campaigns_Set_Input>;
  pk_columns: Campaigns_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Channel_SetsArgs = {
  _inc?: Maybe<Channel_Sets_Inc_Input>;
  _set?: Maybe<Channel_Sets_Set_Input>;
  where: Channel_Sets_Bool_Exp;
};


export type Mutation_RootUpdate_Channel_Sets_By_PkArgs = {
  _inc?: Maybe<Channel_Sets_Inc_Input>;
  _set?: Maybe<Channel_Sets_Set_Input>;
  pk_columns: Channel_Sets_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Contract_Line_ItemsArgs = {
  _inc?: Maybe<Contract_Line_Items_Inc_Input>;
  _set?: Maybe<Contract_Line_Items_Set_Input>;
  where: Contract_Line_Items_Bool_Exp;
};


export type Mutation_RootUpdate_Contract_Line_Items_By_PkArgs = {
  _inc?: Maybe<Contract_Line_Items_Inc_Input>;
  _set?: Maybe<Contract_Line_Items_Set_Input>;
  pk_columns: Contract_Line_Items_Pk_Columns_Input;
};


export type Mutation_RootUpdate_ContractsArgs = {
  _inc?: Maybe<Contracts_Inc_Input>;
  _set?: Maybe<Contracts_Set_Input>;
  where: Contracts_Bool_Exp;
};


export type Mutation_RootUpdate_Contracts_By_PkArgs = {
  _inc?: Maybe<Contracts_Inc_Input>;
  _set?: Maybe<Contracts_Set_Input>;
  pk_columns: Contracts_Pk_Columns_Input;
};


export type Mutation_RootUpdate_CreativesArgs = {
  _inc?: Maybe<Creatives_Inc_Input>;
  _set?: Maybe<Creatives_Set_Input>;
  where: Creatives_Bool_Exp;
};


export type Mutation_RootUpdate_Creatives_By_PkArgs = {
  _inc?: Maybe<Creatives_Inc_Input>;
  _set?: Maybe<Creatives_Set_Input>;
  pk_columns: Creatives_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Optimization_ModulesArgs = {
  _inc?: Maybe<Optimization_Modules_Inc_Input>;
  _set?: Maybe<Optimization_Modules_Set_Input>;
  where: Optimization_Modules_Bool_Exp;
};


export type Mutation_RootUpdate_Optimization_Modules_By_PkArgs = {
  _inc?: Maybe<Optimization_Modules_Inc_Input>;
  _set?: Maybe<Optimization_Modules_Set_Input>;
  pk_columns: Optimization_Modules_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Setup_ModulesArgs = {
  _inc?: Maybe<Setup_Modules_Inc_Input>;
  _set?: Maybe<Setup_Modules_Set_Input>;
  where: Setup_Modules_Bool_Exp;
};


export type Mutation_RootUpdate_Setup_Modules_By_PkArgs = {
  _inc?: Maybe<Setup_Modules_Inc_Input>;
  _set?: Maybe<Setup_Modules_Set_Input>;
  pk_columns: Setup_Modules_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Tactic_Goal_TypesArgs = {
  _set?: Maybe<Tactic_Goal_Types_Set_Input>;
  where: Tactic_Goal_Types_Bool_Exp;
};


export type Mutation_RootUpdate_Tactic_Goal_Types_By_PkArgs = {
  _set?: Maybe<Tactic_Goal_Types_Set_Input>;
  pk_columns: Tactic_Goal_Types_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Tactic_TypesArgs = {
  _set?: Maybe<Tactic_Types_Set_Input>;
  where: Tactic_Types_Bool_Exp;
};


export type Mutation_RootUpdate_Tactic_Types_By_PkArgs = {
  _set?: Maybe<Tactic_Types_Set_Input>;
  pk_columns: Tactic_Types_Pk_Columns_Input;
};


export type Mutation_RootUpdate_TacticsArgs = {
  _inc?: Maybe<Tactics_Inc_Input>;
  _set?: Maybe<Tactics_Set_Input>;
  where: Tactics_Bool_Exp;
};


export type Mutation_RootUpdate_Tactics_By_PkArgs = {
  _inc?: Maybe<Tactics_Inc_Input>;
  _set?: Maybe<Tactics_Set_Input>;
  pk_columns: Tactics_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Traveler_SegmentsArgs = {
  _inc?: Maybe<Traveler_Segments_Inc_Input>;
  _set?: Maybe<Traveler_Segments_Set_Input>;
  where: Traveler_Segments_Bool_Exp;
};


export type Mutation_RootUpdate_Traveler_Segments_By_PkArgs = {
  _inc?: Maybe<Traveler_Segments_Inc_Input>;
  _set?: Maybe<Traveler_Segments_Set_Input>;
  pk_columns: Traveler_Segments_Pk_Columns_Input;
};


export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

export type Optimization_Modules = {
  __typename?: 'optimization_modules';
  channel_set?: Maybe<Channel_Sets>;
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

export type Optimization_Modules_Aggregate = {
  __typename?: 'optimization_modules_aggregate';
  aggregate?: Maybe<Optimization_Modules_Aggregate_Fields>;
  nodes: Array<Optimization_Modules>;
};

export type Optimization_Modules_Aggregate_Fields = {
  __typename?: 'optimization_modules_aggregate_fields';
  avg?: Maybe<Optimization_Modules_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Optimization_Modules_Max_Fields>;
  min?: Maybe<Optimization_Modules_Min_Fields>;
  stddev?: Maybe<Optimization_Modules_Stddev_Fields>;
  stddev_pop?: Maybe<Optimization_Modules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Optimization_Modules_Stddev_Samp_Fields>;
  sum?: Maybe<Optimization_Modules_Sum_Fields>;
  var_pop?: Maybe<Optimization_Modules_Var_Pop_Fields>;
  var_samp?: Maybe<Optimization_Modules_Var_Samp_Fields>;
  variance?: Maybe<Optimization_Modules_Variance_Fields>;
};


export type Optimization_Modules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Optimization_Modules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Optimization_Modules_Aggregate_Order_By = {
  avg?: Maybe<Optimization_Modules_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Optimization_Modules_Max_Order_By>;
  min?: Maybe<Optimization_Modules_Min_Order_By>;
  stddev?: Maybe<Optimization_Modules_Stddev_Order_By>;
  stddev_pop?: Maybe<Optimization_Modules_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Optimization_Modules_Stddev_Samp_Order_By>;
  sum?: Maybe<Optimization_Modules_Sum_Order_By>;
  var_pop?: Maybe<Optimization_Modules_Var_Pop_Order_By>;
  var_samp?: Maybe<Optimization_Modules_Var_Samp_Order_By>;
  variance?: Maybe<Optimization_Modules_Variance_Order_By>;
};

export type Optimization_Modules_Arr_Rel_Insert_Input = {
  data: Array<Optimization_Modules_Insert_Input>;
  on_conflict?: Maybe<Optimization_Modules_On_Conflict>;
};

export type Optimization_Modules_Avg_Fields = {
  __typename?: 'optimization_modules_avg_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Optimization_Modules_Avg_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Optimization_Modules_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Optimization_Modules_Bool_Exp>>>;
  _not?: Maybe<Optimization_Modules_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Optimization_Modules_Bool_Exp>>>;
  channel_set?: Maybe<Channel_Sets_Bool_Exp>;
  channel_set_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Optimization_Modules_Constraint {
  OptimizationModulesPkey = 'optimization_modules_pkey'
}

export type Optimization_Modules_Inc_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Optimization_Modules_Insert_Input = {
  channel_set?: Maybe<Channel_Sets_Obj_Rel_Insert_Input>;
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Optimization_Modules_Max_Fields = {
  __typename?: 'optimization_modules_max_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Optimization_Modules_Max_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Optimization_Modules_Min_Fields = {
  __typename?: 'optimization_modules_min_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Optimization_Modules_Min_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Optimization_Modules_Mutation_Response = {
  __typename?: 'optimization_modules_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Optimization_Modules>;
};

export type Optimization_Modules_Obj_Rel_Insert_Input = {
  data: Optimization_Modules_Insert_Input;
  on_conflict?: Maybe<Optimization_Modules_On_Conflict>;
};

export type Optimization_Modules_On_Conflict = {
  constraint: Optimization_Modules_Constraint;
  update_columns: Array<Optimization_Modules_Update_Column>;
  where?: Maybe<Optimization_Modules_Bool_Exp>;
};

export type Optimization_Modules_Order_By = {
  channel_set?: Maybe<Channel_Sets_Order_By>;
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Optimization_Modules_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Optimization_Modules_Select_Column {
  ChannelSetId = 'channel_set_id',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Optimization_Modules_Set_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Optimization_Modules_Stddev_Fields = {
  __typename?: 'optimization_modules_stddev_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Optimization_Modules_Stddev_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Optimization_Modules_Stddev_Pop_Fields = {
  __typename?: 'optimization_modules_stddev_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Optimization_Modules_Stddev_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Optimization_Modules_Stddev_Samp_Fields = {
  __typename?: 'optimization_modules_stddev_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Optimization_Modules_Stddev_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Optimization_Modules_Sum_Fields = {
  __typename?: 'optimization_modules_sum_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Optimization_Modules_Sum_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Optimization_Modules_Update_Column {
  ChannelSetId = 'channel_set_id',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Optimization_Modules_Var_Pop_Fields = {
  __typename?: 'optimization_modules_var_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Optimization_Modules_Var_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Optimization_Modules_Var_Samp_Fields = {
  __typename?: 'optimization_modules_var_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Optimization_Modules_Var_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Optimization_Modules_Variance_Fields = {
  __typename?: 'optimization_modules_variance_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Optimization_Modules_Variance_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  account_channels: Array<Account_Channels>;
  account_channels_aggregate: Account_Channels_Aggregate;
  account_channels_by_pk?: Maybe<Account_Channels>;
  account_payment_terms: Array<Account_Payment_Terms>;
  account_payment_terms_aggregate: Account_Payment_Terms_Aggregate;
  account_payment_terms_by_pk?: Maybe<Account_Payment_Terms>;
  account_regions: Array<Account_Regions>;
  account_regions_aggregate: Account_Regions_Aggregate;
  account_regions_by_pk?: Maybe<Account_Regions>;
  account_statuses: Array<Account_Statuses>;
  account_statuses_aggregate: Account_Statuses_Aggregate;
  account_statuses_by_pk?: Maybe<Account_Statuses>;
  account_tiers: Array<Account_Tiers>;
  account_tiers_aggregate: Account_Tiers_Aggregate;
  account_tiers_by_pk?: Maybe<Account_Tiers>;
  account_types: Array<Account_Types>;
  account_types_aggregate: Account_Types_Aggregate;
  account_types_by_pk?: Maybe<Account_Types>;
  account_verticals: Array<Account_Verticals>;
  account_verticals_aggregate: Account_Verticals_Aggregate;
  account_verticals_by_pk?: Maybe<Account_Verticals>;
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  accounts_by_pk?: Maybe<Accounts>;
  campaigns: Array<Campaigns>;
  campaigns_aggregate: Campaigns_Aggregate;
  campaigns_by_pk?: Maybe<Campaigns>;
  channel_sets: Array<Channel_Sets>;
  channel_sets_aggregate: Channel_Sets_Aggregate;
  channel_sets_by_pk?: Maybe<Channel_Sets>;
  contract_line_items: Array<Contract_Line_Items>;
  contract_line_items_aggregate: Contract_Line_Items_Aggregate;
  contract_line_items_by_pk?: Maybe<Contract_Line_Items>;
  contracts: Array<Contracts>;
  contracts_aggregate: Contracts_Aggregate;
  contracts_by_pk?: Maybe<Contracts>;
  creatives: Array<Creatives>;
  creatives_aggregate: Creatives_Aggregate;
  creatives_by_pk?: Maybe<Creatives>;
  optimization_modules: Array<Optimization_Modules>;
  optimization_modules_aggregate: Optimization_Modules_Aggregate;
  optimization_modules_by_pk?: Maybe<Optimization_Modules>;
  setup_modules: Array<Setup_Modules>;
  setup_modules_aggregate: Setup_Modules_Aggregate;
  setup_modules_by_pk?: Maybe<Setup_Modules>;
  tactic_goal_types: Array<Tactic_Goal_Types>;
  tactic_goal_types_aggregate: Tactic_Goal_Types_Aggregate;
  tactic_goal_types_by_pk?: Maybe<Tactic_Goal_Types>;
  tactic_types: Array<Tactic_Types>;
  tactic_types_aggregate: Tactic_Types_Aggregate;
  tactic_types_by_pk?: Maybe<Tactic_Types>;
  tactics: Array<Tactics>;
  tactics_aggregate: Tactics_Aggregate;
  tactics_by_pk?: Maybe<Tactics>;
  traveler_segments: Array<Traveler_Segments>;
  traveler_segments_aggregate: Traveler_Segments_Aggregate;
  traveler_segments_by_pk?: Maybe<Traveler_Segments>;
};


export type Query_RootAccount_ChannelsArgs = {
  distinct_on?: Maybe<Array<Account_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Channels_Order_By>>;
  where?: Maybe<Account_Channels_Bool_Exp>;
};


export type Query_RootAccount_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Channels_Order_By>>;
  where?: Maybe<Account_Channels_Bool_Exp>;
};


export type Query_RootAccount_Channels_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccount_Payment_TermsArgs = {
  distinct_on?: Maybe<Array<Account_Payment_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Payment_Terms_Order_By>>;
  where?: Maybe<Account_Payment_Terms_Bool_Exp>;
};


export type Query_RootAccount_Payment_Terms_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Payment_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Payment_Terms_Order_By>>;
  where?: Maybe<Account_Payment_Terms_Bool_Exp>;
};


export type Query_RootAccount_Payment_Terms_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccount_RegionsArgs = {
  distinct_on?: Maybe<Array<Account_Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Regions_Order_By>>;
  where?: Maybe<Account_Regions_Bool_Exp>;
};


export type Query_RootAccount_Regions_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Regions_Order_By>>;
  where?: Maybe<Account_Regions_Bool_Exp>;
};


export type Query_RootAccount_Regions_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccount_StatusesArgs = {
  distinct_on?: Maybe<Array<Account_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Statuses_Order_By>>;
  where?: Maybe<Account_Statuses_Bool_Exp>;
};


export type Query_RootAccount_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Statuses_Order_By>>;
  where?: Maybe<Account_Statuses_Bool_Exp>;
};


export type Query_RootAccount_Statuses_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccount_TiersArgs = {
  distinct_on?: Maybe<Array<Account_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Tiers_Order_By>>;
  where?: Maybe<Account_Tiers_Bool_Exp>;
};


export type Query_RootAccount_Tiers_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Tiers_Order_By>>;
  where?: Maybe<Account_Tiers_Bool_Exp>;
};


export type Query_RootAccount_Tiers_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccount_TypesArgs = {
  distinct_on?: Maybe<Array<Account_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Types_Order_By>>;
  where?: Maybe<Account_Types_Bool_Exp>;
};


export type Query_RootAccount_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Types_Order_By>>;
  where?: Maybe<Account_Types_Bool_Exp>;
};


export type Query_RootAccount_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccount_VerticalsArgs = {
  distinct_on?: Maybe<Array<Account_Verticals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Verticals_Order_By>>;
  where?: Maybe<Account_Verticals_Bool_Exp>;
};


export type Query_RootAccount_Verticals_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Verticals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Verticals_Order_By>>;
  where?: Maybe<Account_Verticals_Bool_Exp>;
};


export type Query_RootAccount_Verticals_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCampaignsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


export type Query_RootCampaigns_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


export type Query_RootCampaigns_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootChannel_SetsArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};


export type Query_RootChannel_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};


export type Query_RootChannel_Sets_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootContract_Line_ItemsArgs = {
  distinct_on?: Maybe<Array<Contract_Line_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contract_Line_Items_Order_By>>;
  where?: Maybe<Contract_Line_Items_Bool_Exp>;
};


export type Query_RootContract_Line_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Contract_Line_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contract_Line_Items_Order_By>>;
  where?: Maybe<Contract_Line_Items_Bool_Exp>;
};


export type Query_RootContract_Line_Items_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootContractsArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCreativesArgs = {
  distinct_on?: Maybe<Array<Creatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Creatives_Order_By>>;
  where?: Maybe<Creatives_Bool_Exp>;
};


export type Query_RootCreatives_AggregateArgs = {
  distinct_on?: Maybe<Array<Creatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Creatives_Order_By>>;
  where?: Maybe<Creatives_Bool_Exp>;
};


export type Query_RootCreatives_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOptimization_ModulesArgs = {
  distinct_on?: Maybe<Array<Optimization_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Optimization_Modules_Order_By>>;
  where?: Maybe<Optimization_Modules_Bool_Exp>;
};


export type Query_RootOptimization_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Optimization_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Optimization_Modules_Order_By>>;
  where?: Maybe<Optimization_Modules_Bool_Exp>;
};


export type Query_RootOptimization_Modules_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSetup_ModulesArgs = {
  distinct_on?: Maybe<Array<Setup_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Modules_Order_By>>;
  where?: Maybe<Setup_Modules_Bool_Exp>;
};


export type Query_RootSetup_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Setup_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Modules_Order_By>>;
  where?: Maybe<Setup_Modules_Bool_Exp>;
};


export type Query_RootSetup_Modules_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTactic_Goal_TypesArgs = {
  distinct_on?: Maybe<Array<Tactic_Goal_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Goal_Types_Order_By>>;
  where?: Maybe<Tactic_Goal_Types_Bool_Exp>;
};


export type Query_RootTactic_Goal_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactic_Goal_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Goal_Types_Order_By>>;
  where?: Maybe<Tactic_Goal_Types_Bool_Exp>;
};


export type Query_RootTactic_Goal_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTactic_TypesArgs = {
  distinct_on?: Maybe<Array<Tactic_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Types_Order_By>>;
  where?: Maybe<Tactic_Types_Bool_Exp>;
};


export type Query_RootTactic_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactic_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Types_Order_By>>;
  where?: Maybe<Tactic_Types_Bool_Exp>;
};


export type Query_RootTactic_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTacticsArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};


export type Query_RootTactics_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};


export type Query_RootTactics_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTraveler_SegmentsArgs = {
  distinct_on?: Maybe<Array<Traveler_Segments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Traveler_Segments_Order_By>>;
  where?: Maybe<Traveler_Segments_Bool_Exp>;
};


export type Query_RootTraveler_Segments_AggregateArgs = {
  distinct_on?: Maybe<Array<Traveler_Segments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Traveler_Segments_Order_By>>;
  where?: Maybe<Traveler_Segments_Bool_Exp>;
};


export type Query_RootTraveler_Segments_By_PkArgs = {
  id: Scalars['Int'];
};

export type Setup_Modules = {
  __typename?: 'setup_modules';
  channel_set?: Maybe<Channel_Sets>;
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  setup_rules_and_logic?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  supply_partner?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

export type Setup_Modules_Aggregate = {
  __typename?: 'setup_modules_aggregate';
  aggregate?: Maybe<Setup_Modules_Aggregate_Fields>;
  nodes: Array<Setup_Modules>;
};

export type Setup_Modules_Aggregate_Fields = {
  __typename?: 'setup_modules_aggregate_fields';
  avg?: Maybe<Setup_Modules_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Setup_Modules_Max_Fields>;
  min?: Maybe<Setup_Modules_Min_Fields>;
  stddev?: Maybe<Setup_Modules_Stddev_Fields>;
  stddev_pop?: Maybe<Setup_Modules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Setup_Modules_Stddev_Samp_Fields>;
  sum?: Maybe<Setup_Modules_Sum_Fields>;
  var_pop?: Maybe<Setup_Modules_Var_Pop_Fields>;
  var_samp?: Maybe<Setup_Modules_Var_Samp_Fields>;
  variance?: Maybe<Setup_Modules_Variance_Fields>;
};


export type Setup_Modules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Setup_Modules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Setup_Modules_Aggregate_Order_By = {
  avg?: Maybe<Setup_Modules_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Setup_Modules_Max_Order_By>;
  min?: Maybe<Setup_Modules_Min_Order_By>;
  stddev?: Maybe<Setup_Modules_Stddev_Order_By>;
  stddev_pop?: Maybe<Setup_Modules_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Setup_Modules_Stddev_Samp_Order_By>;
  sum?: Maybe<Setup_Modules_Sum_Order_By>;
  var_pop?: Maybe<Setup_Modules_Var_Pop_Order_By>;
  var_samp?: Maybe<Setup_Modules_Var_Samp_Order_By>;
  variance?: Maybe<Setup_Modules_Variance_Order_By>;
};

export type Setup_Modules_Arr_Rel_Insert_Input = {
  data: Array<Setup_Modules_Insert_Input>;
  on_conflict?: Maybe<Setup_Modules_On_Conflict>;
};

export type Setup_Modules_Avg_Fields = {
  __typename?: 'setup_modules_avg_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Setup_Modules_Avg_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Setup_Modules_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Setup_Modules_Bool_Exp>>>;
  _not?: Maybe<Setup_Modules_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Setup_Modules_Bool_Exp>>>;
  channel_set?: Maybe<Channel_Sets_Bool_Exp>;
  channel_set_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  setup_rules_and_logic?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  supply_partner?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Setup_Modules_Constraint {
  SetupModulesPkey = 'setup_modules_pkey'
}

export type Setup_Modules_Inc_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Setup_Modules_Insert_Input = {
  channel_set?: Maybe<Channel_Sets_Obj_Rel_Insert_Input>;
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  setup_rules_and_logic?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  supply_partner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Setup_Modules_Max_Fields = {
  __typename?: 'setup_modules_max_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  setup_rules_and_logic?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  supply_partner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Setup_Modules_Max_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  setup_rules_and_logic?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  supply_partner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Setup_Modules_Min_Fields = {
  __typename?: 'setup_modules_min_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  setup_rules_and_logic?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  supply_partner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Setup_Modules_Min_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  setup_rules_and_logic?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  supply_partner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Setup_Modules_Mutation_Response = {
  __typename?: 'setup_modules_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Setup_Modules>;
};

export type Setup_Modules_Obj_Rel_Insert_Input = {
  data: Setup_Modules_Insert_Input;
  on_conflict?: Maybe<Setup_Modules_On_Conflict>;
};

export type Setup_Modules_On_Conflict = {
  constraint: Setup_Modules_Constraint;
  update_columns: Array<Setup_Modules_Update_Column>;
  where?: Maybe<Setup_Modules_Bool_Exp>;
};

export type Setup_Modules_Order_By = {
  channel_set?: Maybe<Channel_Sets_Order_By>;
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  setup_rules_and_logic?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  supply_partner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Setup_Modules_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Setup_Modules_Select_Column {
  ChannelSetId = 'channel_set_id',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  SetupRulesAndLogic = 'setup_rules_and_logic',
  Status = 'status',
  SupplyPartner = 'supply_partner',
  UpdatedAt = 'updated_at'
}

export type Setup_Modules_Set_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  setup_rules_and_logic?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  supply_partner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Setup_Modules_Stddev_Fields = {
  __typename?: 'setup_modules_stddev_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Setup_Modules_Stddev_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Setup_Modules_Stddev_Pop_Fields = {
  __typename?: 'setup_modules_stddev_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Setup_Modules_Stddev_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Setup_Modules_Stddev_Samp_Fields = {
  __typename?: 'setup_modules_stddev_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Setup_Modules_Stddev_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Setup_Modules_Sum_Fields = {
  __typename?: 'setup_modules_sum_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Setup_Modules_Sum_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Setup_Modules_Update_Column {
  ChannelSetId = 'channel_set_id',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  SetupRulesAndLogic = 'setup_rules_and_logic',
  Status = 'status',
  SupplyPartner = 'supply_partner',
  UpdatedAt = 'updated_at'
}

export type Setup_Modules_Var_Pop_Fields = {
  __typename?: 'setup_modules_var_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Setup_Modules_Var_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Setup_Modules_Var_Samp_Fields = {
  __typename?: 'setup_modules_var_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Setup_Modules_Var_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Setup_Modules_Variance_Fields = {
  __typename?: 'setup_modules_variance_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Setup_Modules_Variance_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};


export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  account_channels: Array<Account_Channels>;
  account_channels_aggregate: Account_Channels_Aggregate;
  account_channels_by_pk?: Maybe<Account_Channels>;
  account_payment_terms: Array<Account_Payment_Terms>;
  account_payment_terms_aggregate: Account_Payment_Terms_Aggregate;
  account_payment_terms_by_pk?: Maybe<Account_Payment_Terms>;
  account_regions: Array<Account_Regions>;
  account_regions_aggregate: Account_Regions_Aggregate;
  account_regions_by_pk?: Maybe<Account_Regions>;
  account_statuses: Array<Account_Statuses>;
  account_statuses_aggregate: Account_Statuses_Aggregate;
  account_statuses_by_pk?: Maybe<Account_Statuses>;
  account_tiers: Array<Account_Tiers>;
  account_tiers_aggregate: Account_Tiers_Aggregate;
  account_tiers_by_pk?: Maybe<Account_Tiers>;
  account_types: Array<Account_Types>;
  account_types_aggregate: Account_Types_Aggregate;
  account_types_by_pk?: Maybe<Account_Types>;
  account_verticals: Array<Account_Verticals>;
  account_verticals_aggregate: Account_Verticals_Aggregate;
  account_verticals_by_pk?: Maybe<Account_Verticals>;
  accounts: Array<Accounts>;
  accounts_aggregate: Accounts_Aggregate;
  accounts_by_pk?: Maybe<Accounts>;
  campaigns: Array<Campaigns>;
  campaigns_aggregate: Campaigns_Aggregate;
  campaigns_by_pk?: Maybe<Campaigns>;
  channel_sets: Array<Channel_Sets>;
  channel_sets_aggregate: Channel_Sets_Aggregate;
  channel_sets_by_pk?: Maybe<Channel_Sets>;
  contract_line_items: Array<Contract_Line_Items>;
  contract_line_items_aggregate: Contract_Line_Items_Aggregate;
  contract_line_items_by_pk?: Maybe<Contract_Line_Items>;
  contracts: Array<Contracts>;
  contracts_aggregate: Contracts_Aggregate;
  contracts_by_pk?: Maybe<Contracts>;
  creatives: Array<Creatives>;
  creatives_aggregate: Creatives_Aggregate;
  creatives_by_pk?: Maybe<Creatives>;
  optimization_modules: Array<Optimization_Modules>;
  optimization_modules_aggregate: Optimization_Modules_Aggregate;
  optimization_modules_by_pk?: Maybe<Optimization_Modules>;
  setup_modules: Array<Setup_Modules>;
  setup_modules_aggregate: Setup_Modules_Aggregate;
  setup_modules_by_pk?: Maybe<Setup_Modules>;
  tactic_goal_types: Array<Tactic_Goal_Types>;
  tactic_goal_types_aggregate: Tactic_Goal_Types_Aggregate;
  tactic_goal_types_by_pk?: Maybe<Tactic_Goal_Types>;
  tactic_types: Array<Tactic_Types>;
  tactic_types_aggregate: Tactic_Types_Aggregate;
  tactic_types_by_pk?: Maybe<Tactic_Types>;
  tactics: Array<Tactics>;
  tactics_aggregate: Tactics_Aggregate;
  tactics_by_pk?: Maybe<Tactics>;
  traveler_segments: Array<Traveler_Segments>;
  traveler_segments_aggregate: Traveler_Segments_Aggregate;
  traveler_segments_by_pk?: Maybe<Traveler_Segments>;
};


export type Subscription_RootAccount_ChannelsArgs = {
  distinct_on?: Maybe<Array<Account_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Channels_Order_By>>;
  where?: Maybe<Account_Channels_Bool_Exp>;
};


export type Subscription_RootAccount_Channels_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Channels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Channels_Order_By>>;
  where?: Maybe<Account_Channels_Bool_Exp>;
};


export type Subscription_RootAccount_Channels_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccount_Payment_TermsArgs = {
  distinct_on?: Maybe<Array<Account_Payment_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Payment_Terms_Order_By>>;
  where?: Maybe<Account_Payment_Terms_Bool_Exp>;
};


export type Subscription_RootAccount_Payment_Terms_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Payment_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Payment_Terms_Order_By>>;
  where?: Maybe<Account_Payment_Terms_Bool_Exp>;
};


export type Subscription_RootAccount_Payment_Terms_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccount_RegionsArgs = {
  distinct_on?: Maybe<Array<Account_Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Regions_Order_By>>;
  where?: Maybe<Account_Regions_Bool_Exp>;
};


export type Subscription_RootAccount_Regions_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Regions_Order_By>>;
  where?: Maybe<Account_Regions_Bool_Exp>;
};


export type Subscription_RootAccount_Regions_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccount_StatusesArgs = {
  distinct_on?: Maybe<Array<Account_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Statuses_Order_By>>;
  where?: Maybe<Account_Statuses_Bool_Exp>;
};


export type Subscription_RootAccount_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Statuses_Order_By>>;
  where?: Maybe<Account_Statuses_Bool_Exp>;
};


export type Subscription_RootAccount_Statuses_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccount_TiersArgs = {
  distinct_on?: Maybe<Array<Account_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Tiers_Order_By>>;
  where?: Maybe<Account_Tiers_Bool_Exp>;
};


export type Subscription_RootAccount_Tiers_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Tiers_Order_By>>;
  where?: Maybe<Account_Tiers_Bool_Exp>;
};


export type Subscription_RootAccount_Tiers_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccount_TypesArgs = {
  distinct_on?: Maybe<Array<Account_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Types_Order_By>>;
  where?: Maybe<Account_Types_Bool_Exp>;
};


export type Subscription_RootAccount_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Types_Order_By>>;
  where?: Maybe<Account_Types_Bool_Exp>;
};


export type Subscription_RootAccount_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccount_VerticalsArgs = {
  distinct_on?: Maybe<Array<Account_Verticals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Verticals_Order_By>>;
  where?: Maybe<Account_Verticals_Bool_Exp>;
};


export type Subscription_RootAccount_Verticals_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Verticals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Verticals_Order_By>>;
  where?: Maybe<Account_Verticals_Bool_Exp>;
};


export type Subscription_RootAccount_Verticals_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCampaignsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


export type Subscription_RootCampaigns_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


export type Subscription_RootCampaigns_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootChannel_SetsArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};


export type Subscription_RootChannel_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};


export type Subscription_RootChannel_Sets_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootContract_Line_ItemsArgs = {
  distinct_on?: Maybe<Array<Contract_Line_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contract_Line_Items_Order_By>>;
  where?: Maybe<Contract_Line_Items_Bool_Exp>;
};


export type Subscription_RootContract_Line_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Contract_Line_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contract_Line_Items_Order_By>>;
  where?: Maybe<Contract_Line_Items_Bool_Exp>;
};


export type Subscription_RootContract_Line_Items_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootContractsArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCreativesArgs = {
  distinct_on?: Maybe<Array<Creatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Creatives_Order_By>>;
  where?: Maybe<Creatives_Bool_Exp>;
};


export type Subscription_RootCreatives_AggregateArgs = {
  distinct_on?: Maybe<Array<Creatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Creatives_Order_By>>;
  where?: Maybe<Creatives_Bool_Exp>;
};


export type Subscription_RootCreatives_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOptimization_ModulesArgs = {
  distinct_on?: Maybe<Array<Optimization_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Optimization_Modules_Order_By>>;
  where?: Maybe<Optimization_Modules_Bool_Exp>;
};


export type Subscription_RootOptimization_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Optimization_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Optimization_Modules_Order_By>>;
  where?: Maybe<Optimization_Modules_Bool_Exp>;
};


export type Subscription_RootOptimization_Modules_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSetup_ModulesArgs = {
  distinct_on?: Maybe<Array<Setup_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Modules_Order_By>>;
  where?: Maybe<Setup_Modules_Bool_Exp>;
};


export type Subscription_RootSetup_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Setup_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Modules_Order_By>>;
  where?: Maybe<Setup_Modules_Bool_Exp>;
};


export type Subscription_RootSetup_Modules_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTactic_Goal_TypesArgs = {
  distinct_on?: Maybe<Array<Tactic_Goal_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Goal_Types_Order_By>>;
  where?: Maybe<Tactic_Goal_Types_Bool_Exp>;
};


export type Subscription_RootTactic_Goal_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactic_Goal_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Goal_Types_Order_By>>;
  where?: Maybe<Tactic_Goal_Types_Bool_Exp>;
};


export type Subscription_RootTactic_Goal_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTactic_TypesArgs = {
  distinct_on?: Maybe<Array<Tactic_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Types_Order_By>>;
  where?: Maybe<Tactic_Types_Bool_Exp>;
};


export type Subscription_RootTactic_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactic_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactic_Types_Order_By>>;
  where?: Maybe<Tactic_Types_Bool_Exp>;
};


export type Subscription_RootTactic_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTacticsArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};


export type Subscription_RootTactics_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};


export type Subscription_RootTactics_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTraveler_SegmentsArgs = {
  distinct_on?: Maybe<Array<Traveler_Segments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Traveler_Segments_Order_By>>;
  where?: Maybe<Traveler_Segments_Bool_Exp>;
};


export type Subscription_RootTraveler_Segments_AggregateArgs = {
  distinct_on?: Maybe<Array<Traveler_Segments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Traveler_Segments_Order_By>>;
  where?: Maybe<Traveler_Segments_Bool_Exp>;
};


export type Subscription_RootTraveler_Segments_By_PkArgs = {
  id: Scalars['Int'];
};

export type Tactic_Goal_Types = {
  __typename?: 'tactic_goal_types';
  description?: Maybe<Scalars['String']>;
  tactics: Array<Tactics>;
  tactics_aggregate: Tactics_Aggregate;
  value: Scalars['String'];
};


export type Tactic_Goal_TypesTacticsArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};


export type Tactic_Goal_TypesTactics_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};

export type Tactic_Goal_Types_Aggregate = {
  __typename?: 'tactic_goal_types_aggregate';
  aggregate?: Maybe<Tactic_Goal_Types_Aggregate_Fields>;
  nodes: Array<Tactic_Goal_Types>;
};

export type Tactic_Goal_Types_Aggregate_Fields = {
  __typename?: 'tactic_goal_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tactic_Goal_Types_Max_Fields>;
  min?: Maybe<Tactic_Goal_Types_Min_Fields>;
};


export type Tactic_Goal_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tactic_Goal_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Tactic_Goal_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tactic_Goal_Types_Max_Order_By>;
  min?: Maybe<Tactic_Goal_Types_Min_Order_By>;
};

export type Tactic_Goal_Types_Arr_Rel_Insert_Input = {
  data: Array<Tactic_Goal_Types_Insert_Input>;
  on_conflict?: Maybe<Tactic_Goal_Types_On_Conflict>;
};

export type Tactic_Goal_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tactic_Goal_Types_Bool_Exp>>>;
  _not?: Maybe<Tactic_Goal_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tactic_Goal_Types_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  tactics?: Maybe<Tactics_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Tactic_Goal_Types_Constraint {
  TacticGoalTypesPkey = 'tactic_goal_types_pkey'
}

export type Tactic_Goal_Types_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  tactics?: Maybe<Tactics_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Tactic_Goal_Types_Max_Fields = {
  __typename?: 'tactic_goal_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Tactic_Goal_Types_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Tactic_Goal_Types_Min_Fields = {
  __typename?: 'tactic_goal_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Tactic_Goal_Types_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Tactic_Goal_Types_Mutation_Response = {
  __typename?: 'tactic_goal_types_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Tactic_Goal_Types>;
};

export type Tactic_Goal_Types_Obj_Rel_Insert_Input = {
  data: Tactic_Goal_Types_Insert_Input;
  on_conflict?: Maybe<Tactic_Goal_Types_On_Conflict>;
};

export type Tactic_Goal_Types_On_Conflict = {
  constraint: Tactic_Goal_Types_Constraint;
  update_columns: Array<Tactic_Goal_Types_Update_Column>;
  where?: Maybe<Tactic_Goal_Types_Bool_Exp>;
};

export type Tactic_Goal_Types_Order_By = {
  description?: Maybe<Order_By>;
  tactics_aggregate?: Maybe<Tactics_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Tactic_Goal_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Tactic_Goal_Types_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Tactic_Goal_Types_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Tactic_Goal_Types_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Tactic_Types = {
  __typename?: 'tactic_types';
  description?: Maybe<Scalars['String']>;
  tactics: Array<Tactics>;
  tactics_aggregate: Tactics_Aggregate;
  value: Scalars['String'];
};


export type Tactic_TypesTacticsArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};


export type Tactic_TypesTactics_AggregateArgs = {
  distinct_on?: Maybe<Array<Tactics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tactics_Order_By>>;
  where?: Maybe<Tactics_Bool_Exp>;
};

export type Tactic_Types_Aggregate = {
  __typename?: 'tactic_types_aggregate';
  aggregate?: Maybe<Tactic_Types_Aggregate_Fields>;
  nodes: Array<Tactic_Types>;
};

export type Tactic_Types_Aggregate_Fields = {
  __typename?: 'tactic_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tactic_Types_Max_Fields>;
  min?: Maybe<Tactic_Types_Min_Fields>;
};


export type Tactic_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tactic_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Tactic_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tactic_Types_Max_Order_By>;
  min?: Maybe<Tactic_Types_Min_Order_By>;
};

export type Tactic_Types_Arr_Rel_Insert_Input = {
  data: Array<Tactic_Types_Insert_Input>;
  on_conflict?: Maybe<Tactic_Types_On_Conflict>;
};

export type Tactic_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tactic_Types_Bool_Exp>>>;
  _not?: Maybe<Tactic_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tactic_Types_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  tactics?: Maybe<Tactics_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Tactic_Types_Constraint {
  TacticTypesPkey = 'tactic_types_pkey'
}

export type Tactic_Types_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  tactics?: Maybe<Tactics_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Tactic_Types_Max_Fields = {
  __typename?: 'tactic_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Tactic_Types_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Tactic_Types_Min_Fields = {
  __typename?: 'tactic_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Tactic_Types_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Tactic_Types_Mutation_Response = {
  __typename?: 'tactic_types_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Tactic_Types>;
};

export type Tactic_Types_Obj_Rel_Insert_Input = {
  data: Tactic_Types_Insert_Input;
  on_conflict?: Maybe<Tactic_Types_On_Conflict>;
};

export type Tactic_Types_On_Conflict = {
  constraint: Tactic_Types_Constraint;
  update_columns: Array<Tactic_Types_Update_Column>;
  where?: Maybe<Tactic_Types_Bool_Exp>;
};

export type Tactic_Types_Order_By = {
  description?: Maybe<Order_By>;
  tactics_aggregate?: Maybe<Tactics_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Tactic_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Tactic_Types_Select_Column {
  Description = 'description',
  Value = 'value'
}

export type Tactic_Types_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum Tactic_Types_Update_Column {
  Description = 'description',
  Value = 'value'
}

export type Tactics = {
  __typename?: 'tactics';
  campaign?: Maybe<Campaigns>;
  campaign_id?: Maybe<Scalars['Int']>;
  channel_sets: Array<Channel_Sets>;
  channel_sets_aggregate: Channel_Sets_Aggregate;
  created_at: Scalars['timestamptz'];
  goal_rate: Scalars['String'];
  goal_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  optimization_event?: Maybe<Scalars['String']>;
  tacticTypeByTacticType: Tactic_Types;
  tactic_goal_type: Tactic_Goal_Types;
  tactic_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


export type TacticsChannel_SetsArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};


export type TacticsChannel_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Sets_Order_By>>;
  where?: Maybe<Channel_Sets_Bool_Exp>;
};

export type Tactics_Aggregate = {
  __typename?: 'tactics_aggregate';
  aggregate?: Maybe<Tactics_Aggregate_Fields>;
  nodes: Array<Tactics>;
};

export type Tactics_Aggregate_Fields = {
  __typename?: 'tactics_aggregate_fields';
  avg?: Maybe<Tactics_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tactics_Max_Fields>;
  min?: Maybe<Tactics_Min_Fields>;
  stddev?: Maybe<Tactics_Stddev_Fields>;
  stddev_pop?: Maybe<Tactics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tactics_Stddev_Samp_Fields>;
  sum?: Maybe<Tactics_Sum_Fields>;
  var_pop?: Maybe<Tactics_Var_Pop_Fields>;
  var_samp?: Maybe<Tactics_Var_Samp_Fields>;
  variance?: Maybe<Tactics_Variance_Fields>;
};


export type Tactics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tactics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Tactics_Aggregate_Order_By = {
  avg?: Maybe<Tactics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tactics_Max_Order_By>;
  min?: Maybe<Tactics_Min_Order_By>;
  stddev?: Maybe<Tactics_Stddev_Order_By>;
  stddev_pop?: Maybe<Tactics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tactics_Stddev_Samp_Order_By>;
  sum?: Maybe<Tactics_Sum_Order_By>;
  var_pop?: Maybe<Tactics_Var_Pop_Order_By>;
  var_samp?: Maybe<Tactics_Var_Samp_Order_By>;
  variance?: Maybe<Tactics_Variance_Order_By>;
};

export type Tactics_Arr_Rel_Insert_Input = {
  data: Array<Tactics_Insert_Input>;
  on_conflict?: Maybe<Tactics_On_Conflict>;
};

export type Tactics_Avg_Fields = {
  __typename?: 'tactics_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Tactics_Avg_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Tactics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tactics_Bool_Exp>>>;
  _not?: Maybe<Tactics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tactics_Bool_Exp>>>;
  campaign?: Maybe<Campaigns_Bool_Exp>;
  campaign_id?: Maybe<Int_Comparison_Exp>;
  channel_sets?: Maybe<Channel_Sets_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  goal_rate?: Maybe<String_Comparison_Exp>;
  goal_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  optimization_event?: Maybe<String_Comparison_Exp>;
  tacticTypeByTacticType?: Maybe<Tactic_Types_Bool_Exp>;
  tactic_goal_type?: Maybe<Tactic_Goal_Types_Bool_Exp>;
  tactic_type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Tactics_Constraint {
  TacticsPkey = 'tactics_pkey'
}

export type Tactics_Inc_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Tactics_Insert_Input = {
  campaign?: Maybe<Campaigns_Obj_Rel_Insert_Input>;
  campaign_id?: Maybe<Scalars['Int']>;
  channel_sets?: Maybe<Channel_Sets_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  optimization_event?: Maybe<Scalars['String']>;
  tacticTypeByTacticType?: Maybe<Tactic_Types_Obj_Rel_Insert_Input>;
  tactic_goal_type?: Maybe<Tactic_Goal_Types_Obj_Rel_Insert_Input>;
  tactic_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Tactics_Max_Fields = {
  __typename?: 'tactics_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  optimization_event?: Maybe<Scalars['String']>;
  tactic_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Tactics_Max_Order_By = {
  campaign_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  optimization_event?: Maybe<Order_By>;
  tactic_type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Tactics_Min_Fields = {
  __typename?: 'tactics_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  optimization_event?: Maybe<Scalars['String']>;
  tactic_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Tactics_Min_Order_By = {
  campaign_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  optimization_event?: Maybe<Order_By>;
  tactic_type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Tactics_Mutation_Response = {
  __typename?: 'tactics_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Tactics>;
};

export type Tactics_Obj_Rel_Insert_Input = {
  data: Tactics_Insert_Input;
  on_conflict?: Maybe<Tactics_On_Conflict>;
};

export type Tactics_On_Conflict = {
  constraint: Tactics_Constraint;
  update_columns: Array<Tactics_Update_Column>;
  where?: Maybe<Tactics_Bool_Exp>;
};

export type Tactics_Order_By = {
  campaign?: Maybe<Campaigns_Order_By>;
  campaign_id?: Maybe<Order_By>;
  channel_sets_aggregate?: Maybe<Channel_Sets_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  goal_rate?: Maybe<Order_By>;
  goal_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  optimization_event?: Maybe<Order_By>;
  tacticTypeByTacticType?: Maybe<Tactic_Types_Order_By>;
  tactic_goal_type?: Maybe<Tactic_Goal_Types_Order_By>;
  tactic_type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Tactics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Tactics_Select_Column {
  CampaignId = 'campaign_id',
  CreatedAt = 'created_at',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  OptimizationEvent = 'optimization_event',
  TacticType = 'tactic_type',
  UpdatedAt = 'updated_at'
}

export type Tactics_Set_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal_rate?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  optimization_event?: Maybe<Scalars['String']>;
  tactic_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Tactics_Stddev_Fields = {
  __typename?: 'tactics_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Tactics_Stddev_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Tactics_Stddev_Pop_Fields = {
  __typename?: 'tactics_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Tactics_Stddev_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Tactics_Stddev_Samp_Fields = {
  __typename?: 'tactics_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Tactics_Stddev_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Tactics_Sum_Fields = {
  __typename?: 'tactics_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Tactics_Sum_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Tactics_Update_Column {
  CampaignId = 'campaign_id',
  CreatedAt = 'created_at',
  GoalRate = 'goal_rate',
  GoalType = 'goal_type',
  Id = 'id',
  OptimizationEvent = 'optimization_event',
  TacticType = 'tactic_type',
  UpdatedAt = 'updated_at'
}

export type Tactics_Var_Pop_Fields = {
  __typename?: 'tactics_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Tactics_Var_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Tactics_Var_Samp_Fields = {
  __typename?: 'tactics_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Tactics_Var_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Tactics_Variance_Fields = {
  __typename?: 'tactics_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Tactics_Variance_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Traveler_Segments = {
  __typename?: 'traveler_segments';
  channel_set?: Maybe<Channel_Sets>;
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  created_by?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

export type Traveler_Segments_Aggregate = {
  __typename?: 'traveler_segments_aggregate';
  aggregate?: Maybe<Traveler_Segments_Aggregate_Fields>;
  nodes: Array<Traveler_Segments>;
};

export type Traveler_Segments_Aggregate_Fields = {
  __typename?: 'traveler_segments_aggregate_fields';
  avg?: Maybe<Traveler_Segments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Traveler_Segments_Max_Fields>;
  min?: Maybe<Traveler_Segments_Min_Fields>;
  stddev?: Maybe<Traveler_Segments_Stddev_Fields>;
  stddev_pop?: Maybe<Traveler_Segments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Traveler_Segments_Stddev_Samp_Fields>;
  sum?: Maybe<Traveler_Segments_Sum_Fields>;
  var_pop?: Maybe<Traveler_Segments_Var_Pop_Fields>;
  var_samp?: Maybe<Traveler_Segments_Var_Samp_Fields>;
  variance?: Maybe<Traveler_Segments_Variance_Fields>;
};


export type Traveler_Segments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Traveler_Segments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Traveler_Segments_Aggregate_Order_By = {
  avg?: Maybe<Traveler_Segments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Traveler_Segments_Max_Order_By>;
  min?: Maybe<Traveler_Segments_Min_Order_By>;
  stddev?: Maybe<Traveler_Segments_Stddev_Order_By>;
  stddev_pop?: Maybe<Traveler_Segments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Traveler_Segments_Stddev_Samp_Order_By>;
  sum?: Maybe<Traveler_Segments_Sum_Order_By>;
  var_pop?: Maybe<Traveler_Segments_Var_Pop_Order_By>;
  var_samp?: Maybe<Traveler_Segments_Var_Samp_Order_By>;
  variance?: Maybe<Traveler_Segments_Variance_Order_By>;
};

export type Traveler_Segments_Arr_Rel_Insert_Input = {
  data: Array<Traveler_Segments_Insert_Input>;
  on_conflict?: Maybe<Traveler_Segments_On_Conflict>;
};

export type Traveler_Segments_Avg_Fields = {
  __typename?: 'traveler_segments_avg_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Traveler_Segments_Avg_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Traveler_Segments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Traveler_Segments_Bool_Exp>>>;
  _not?: Maybe<Traveler_Segments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Traveler_Segments_Bool_Exp>>>;
  channel_set?: Maybe<Channel_Sets_Bool_Exp>;
  channel_set_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Traveler_Segments_Constraint {
  TravelerSegmentsPkey = 'traveler_segments_pkey'
}

export type Traveler_Segments_Inc_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Traveler_Segments_Insert_Input = {
  channel_set?: Maybe<Channel_Sets_Obj_Rel_Insert_Input>;
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Traveler_Segments_Max_Fields = {
  __typename?: 'traveler_segments_max_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Traveler_Segments_Max_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Traveler_Segments_Min_Fields = {
  __typename?: 'traveler_segments_min_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Traveler_Segments_Min_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Traveler_Segments_Mutation_Response = {
  __typename?: 'traveler_segments_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Traveler_Segments>;
};

export type Traveler_Segments_Obj_Rel_Insert_Input = {
  data: Traveler_Segments_Insert_Input;
  on_conflict?: Maybe<Traveler_Segments_On_Conflict>;
};

export type Traveler_Segments_On_Conflict = {
  constraint: Traveler_Segments_Constraint;
  update_columns: Array<Traveler_Segments_Update_Column>;
  where?: Maybe<Traveler_Segments_Bool_Exp>;
};

export type Traveler_Segments_Order_By = {
  channel_set?: Maybe<Channel_Sets_Order_By>;
  channel_set_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Traveler_Segments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Traveler_Segments_Select_Column {
  ChannelSetId = 'channel_set_id',
  CreatedAt = 'created_at',
  CreatedBy = 'created_by',
  Id = 'id',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updated_at'
}

export type Traveler_Segments_Set_Input = {
  channel_set_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Traveler_Segments_Stddev_Fields = {
  __typename?: 'traveler_segments_stddev_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Traveler_Segments_Stddev_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Traveler_Segments_Stddev_Pop_Fields = {
  __typename?: 'traveler_segments_stddev_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Traveler_Segments_Stddev_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Traveler_Segments_Stddev_Samp_Fields = {
  __typename?: 'traveler_segments_stddev_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Traveler_Segments_Stddev_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Traveler_Segments_Sum_Fields = {
  __typename?: 'traveler_segments_sum_fields';
  channel_set_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Traveler_Segments_Sum_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Traveler_Segments_Update_Column {
  ChannelSetId = 'channel_set_id',
  CreatedAt = 'created_at',
  CreatedBy = 'created_by',
  Id = 'id',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updated_at'
}

export type Traveler_Segments_Var_Pop_Fields = {
  __typename?: 'traveler_segments_var_pop_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Traveler_Segments_Var_Pop_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Traveler_Segments_Var_Samp_Fields = {
  __typename?: 'traveler_segments_var_samp_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Traveler_Segments_Var_Samp_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Traveler_Segments_Variance_Fields = {
  __typename?: 'traveler_segments_variance_fields';
  channel_set_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Traveler_Segments_Variance_Order_By = {
  channel_set_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};
