import React, { Fragment } from 'react';

import { Department, Container, Content } from './styles';

const ListItem = ({ department, servicos }) => (
  <Fragment>
    <Department>{department}</Department>
    <Container>
      {servicos
        .filter(servico => servico.department === department)
        .map(s => (
          <Content key={s._id}>
            <div className="card border-primary mb-3" style={{ minWidth: 350 }}>
              <div className="card-header">{s.department}</div>
              <div className="card-body text-primary">
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text">{s.body}</p>
              </div>
            </div>
          </Content>
        ))}
    </Container>
  </Fragment>
);

export default ListItem;
