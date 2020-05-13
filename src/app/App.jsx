import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routing from '../routing/routing'

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Routing />
      </Container>
    </>
  )
}

export default App
