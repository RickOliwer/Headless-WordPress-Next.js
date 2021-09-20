import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const client = new ApolloClient({
    uri: '',
    cache: new InMemoryCache,
})