import styled from 'styled-components';

export const Input = styled.input`
  font-size: 18px;
  height: 50px;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 5px;

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

export const ErrorMessage = styled.small`
  color: red;
  height: 24px;
`;