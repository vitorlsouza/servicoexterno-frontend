import React, { Component } from 'react';
import api from '../../services/api';
import socket from 'socket.io-client';

import Header from '../../components/Header';
import ListItem from '../ListItem';

import { Container, Content } from './styles';

export class List extends Component {
  state = {
    servicos: [],
    departments: [
      { title: 'CPD' },
      { title: 'TESOURARIA' },
      { title: 'DP' },
      { title: 'VENDAS' },
      { title: 'LOCACAO' },
      { title: 'CONDOMINIO' },
      { title: 'JURIDICO' },
      { title: 'ENGENHARIA' },
    ],
  };
  async componentDidMount() {
    this.describeToEvents();
    const response = await api.get('/servicos');

    this.setState({ servicos: response.data });
  }

  describeToEvents = () => {
    const io = socket('https://servicoexterno-backend.herokuapp.com/');

    io.on('servico', data => {
      this.setState({ servicos: [...this.state.servicos, data] });
    });
  };

  render() {
    const { departments, servicos } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          {departments.map(d => (
            <ListItem key={d.title} department={d.title} servicos={servicos} />
          ))}
        </Content>
      </Container>
    );
  }
}

export default List;
