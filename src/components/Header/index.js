import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

class Header extends Component {
  render() {
    return (
      <Container>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/">
              <button className="btn btn-primary" onClick={this.handleActive}>
                Lista
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/novo">
              <button className="btn btn-success" onClick={this.handleActive}>
                Criar novo serviço
              </button>
            </Link>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Header;
