// Thrid party
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

// Local
import { Router } from './router'
import { client } from './services/apollo'

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
