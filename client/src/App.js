//TODO: refactor and add in:

import React, { useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchGames from './pages/SearchGames';
import SavedGames from './pages/SavedGames';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
//   // API for search bar =================================================================================================
//   const [state, setState] = useState({
//     results: []
//   });
//   const onSearch = async (text) => {
//     const results = await GameSource.get("/")
//     setState(prevState => {
//       return {...prevState, results: results}
//     })
//   }
// //================ testing for API=================================================================
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<SearchGames />} 
          />
          <Route 
            path='/saved' 
            element={<SavedGames />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
        <Footer />
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;

