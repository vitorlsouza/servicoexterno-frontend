import styled from 'styled-components';

export const Department = styled.h4`
  display: flex;
  flex-direction: column;

  &:after {
    content: '';
    display: block;
    width: 180px;
    height: 3px;
    background: #0169d9;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
