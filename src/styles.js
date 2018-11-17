import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px;
`;
