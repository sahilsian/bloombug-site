import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WORDPRESS_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  cache: new InMemoryCache(),
});

export default client;