import React, { Component } from 'react';

import Routes from './routes';

import GlobalStyle from './styles';
import { Container } from './styles';

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Routes />
      </Container>
    );
  }
}

export default App;
