import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const url = process.env.API_URL;

const httpLink = createHttpLink({
  uri: url 
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.SANITY_STUDIO_API_KEY ;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
