import {ApolloClient, InMemoryCache,createHttpLink, from} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error'
// import { FetchResult } from '@apollo/client';
import { keySeccionToken } from '../hooks/useAuth';
const httpLink = createHttpLink({
  uri: 'https://petgram-server-alejandroverita-alejandroverita.vercel.app/graphql',
});

const authLink = setContext((_, { headers }): { headers: Record<string, string> } => {
  // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem(keySeccionToken);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});
//Error handling
const errorlink = onError(({graphQLErrors,networkError})=>{
    if(networkError && networkError.message === 'invalid_token'){
        sessionStorage.removeItem(keySeccionToken);
        window.location.href='/'
        // console.log(networkError,'error of networkError')
    }
    if(graphQLErrors){
        // errors of querys or mutations of graphql
        graphQLErrors.map((error)=> {
            if(error.message =='user does not exist'){
                sessionStorage.removeItem(keySeccionToken);
                window.location.href='/'
            }
        } )
    }
});

export const client = new ApolloClient({
  link: from([
    errorlink,
    authLink,
    httpLink
  ]),
  cache: new InMemoryCache(),
});
