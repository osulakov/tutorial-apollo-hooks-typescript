import { MyContext } from './context';
import { GraphQLResolveInfo } from "graphql";

export type Maybe<T> = T | null;

export interface Query {
    query?: Maybe<Query>;
}

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
    parent: Parent,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ) => Promise<Result> | Result;

export type QueryQueryResolver<
  R = Maybe<Query>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

export type QueryGetAccountsResolver<
  R = Maybe<number>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

// -- //
export interface QueryResolvers<TContext = MyContext, TypeParent = {}> {
    query?: QueryQueryResolver<Maybe<Query>, TypeParent, TContext>;
  
    getAccounts?: QueryGetAccountsResolver<Maybe<number>, TypeParent, TContext>;
}