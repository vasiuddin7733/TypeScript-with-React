import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './App'
import './index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
// import { apolloClient } from './apollo'


const queryClient = new QueryClient()

const apolloClient1 = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient1}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
