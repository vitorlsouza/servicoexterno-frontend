import React, { Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Content } from './styles';

export class CreateService extends Component {
  state = {
    department: '0',
    title: '',
    solicitacao: '',
    solicitante: '',
    prioridade: 1,
  };

  handleChangeDepartment = e => {
    this.setState({ department: e.target.value });
  };

  handleChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleChangeSolicitacao = e => {
    this.setState({ solicitacao: e.target.value });
  };

  handleChangeSolicitante = e => {
    this.setState({ solicitante: e.target.value });
  };

  handleChangePrioridade = e => {
    this.setState({ prioridade: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      department,
      title,
      solicitacao,
      solicitante,
      prioridade,
    } = this.state;

    await api.post('/servicos/novo', {
      department,
      title,
      body: solicitacao,
      author: solicitante,
      priority: prioridade,
    });

    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <Container>
          <Header />
          <Content>
            <form className="col" onSubmit={this.handleSubmit}>
              <div className="form-group col-lg-6 col-md-8">
                <label htmlFor="department">Departamento</label>
                <select
                  className="form-control"
                  id="department"
                  value={this.state.department}
                  onChange={this.handleChangeDepartment}
                >
                  <option value="0">Selecione o setor...</option>
                  <option value="CPD">CPD</option>
                  <option value="TESOURARIA">TESOURARIA</option>
                  <option value="DP">DP</option>
                  <option value="VENDAS">VENDAS</option>
                  <option value="LOCACAO">LOCACAO</option>
                  <option value="CONDOMINIO">CONDOMINIO</option>
                  <option value="JURIDICO">JURIDICO</option>
                  <option value="ENGENHARIA">ENGENHARIA</option>
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-8">
                <label htmlFor="title">Assunto</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                />
              </div>
              <div className="form-group col">
                <label htmlFor="solicitacao">Solicitação</label>
                <textarea
                  className="form-control"
                  id="solicitacao"
                  rows="3"
                  value={this.state.solicitacao}
                  onChange={this.handleChangeSolicitacao}
                />
              </div>
              <div className="form-group col-lg-6 col-md-8">
                <label htmlFor="name">Solicitante</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.solicitante}
                  onChange={this.handleChangeSolicitante}
                />
              </div>
              <div className="form-group col-lg-6 col-md-8">
                <label htmlFor="prioritySelect">Prioridade</label>
                <select
                  className="form-control"
                  id="prioritySelect"
                  onChange={this.handleChangePrioridade}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </Content>
        </Container>
      </div>
    );
  }
}

export default CreateService;
