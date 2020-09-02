import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 50px 0;
  width: 80vw;
  height: 80vh;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;

  @media (min-width: 1100px) {
    width: 40vw;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.span`
  margin-right: auto;

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

export const Submit = styled.input`
  background: #faa014;
  color: #000;
  border: 1px solid #000;
  padding: 10px;
  margin: 20px auto 0;
  width: 120px;
  border-radius: 8px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 1100px) {
    
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;
