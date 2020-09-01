import styled from 'styled-components';

const Button = styled.div`
  background: #faa014;
  color: #000;
  border: 1px solid #000;
  padding: 10px;
  margin: 20px auto 0;
  border-radius: 8px;
  text-align: center;
  font-size: 24px;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;

  @media (min-width: 1100px) {
    &:hover {
      background: #000;
      color: #fff;
      border-color: #fff;
    }
  }
`;

export default Button;