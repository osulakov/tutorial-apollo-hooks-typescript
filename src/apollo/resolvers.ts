import gql from "graphql-tag";
import { QueryResolvers } from './graphql';
import { GET_ACCOUNTS } from './queries';
import { useQuery } from "react-apollo-hooks";

// export const resolvers = {
//     Query: {
//         getAccounts: (parent, args, { cache }) => {
//             const { accounts } = cache.readQuery<any>({
//                 query: useQuery(GET_ACCOUNTS)
//             })
//         }
//     }
// } as {
//     Query: QueryResolvers;
// }