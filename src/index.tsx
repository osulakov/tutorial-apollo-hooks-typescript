import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//import ApolloClient from 'react-apollo';
// import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
// import { ApolloProvider } from 'react-apollo-hooks';
//import { resolvers } from './apollo/resolvers';

// // Generate TypeScript from GraphQL file
// import { generateTypeScriptTypes } from 'graphql-schema-typescript';
// // import { loader } from 'graphql.macro';
// // const schema = loader('./schema.graphql');

// const outputPath = './apollo';
// const options = {}

// /// <reference path="./index.d.ts" />
// import * as schema from './schema.graphql';

 
// generateTypeScriptTypes(schema, outputPath, options)
//     .then(() => {
//         console.log('DONE');
//         process.exit(0);
//     })
//     .catch(err =>{
//         console.error(err);
//         process.exit(1);
//     });

  // Create Apollo client

const client = new ApolloClient({
 uri: 'http://localhost:8089/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "sojernadminsecret",
    "content-type": "application/json"
  }
  //resolvers: resolvers as any
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}> <App /></ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
