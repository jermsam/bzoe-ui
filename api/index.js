/* eslint-disable no-console */
import feathers from '@feathersjs/client';

import io from 'socket.io-client';
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// require('dotenv').config();

// @feathersjs/client is exposed as the `feathers` global.
const app = feathers();

const url =publicRuntimeConfig.BACKEND;

if (process.browser) {
  // Socket.io is exposed as the `io` global.
  const socket = io(url, {
    transports: ['websocket'],
    forceNew: true,
  });

  // Connect to a different URL

  const socketsClient = feathers.socketio(socket, {
    timeout: 100000,
  });

  // Configure socket client
  app.configure(socketsClient);
  // incase we later have to do authentication
  if (typeof window !== "undefined") {
  app.configure(
    feathers.authentication({
      storage: window.localStorage,
      // timeout: 20000
    })
  );
  }
}

export default app;

/*
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import fetch from 'node-fetch';
import auth0 from 'auth0-js'



const cache = new InMemoryCache();
let link = new HttpLink({
    uri, 
    fetch
});



const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ,
    }
  }
});

link= authLink.concat(link)


const client =new ApolloClient({
  cache,
  link
});


const webAuth = new auth0.WebAuth({
  
  responseType: 'token id_token',
  scope: 'openid email profile'
});




export {client,webAuth}
*/