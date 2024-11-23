import { ApolloClient, InMemoryCache, gql as apolloGql } from '@apollo/client'

export const wpApolloClient: any = new ApolloClient({
 uri: process.env.WP_GRAPHQL_URL,
 cache: new InMemoryCache(),
})

export const gql = apolloGql;