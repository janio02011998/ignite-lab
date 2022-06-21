import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4o4qrk10jnz01xmaz834z3z/master',
  cache: new InMemoryCache(),
});
