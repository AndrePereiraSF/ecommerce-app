import styled from 'styled-components';
import ShopBackgroundImg from '../../assets/images/bg-shop.jpg';

export const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url(${ShopBackgroundImg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginContainer = styled.div`
  display: flex;
  background: #000;
  flex-direction: column;
  color: #fff;
  padding: 50px 0;
  width: 80vw;
  height: 80vh;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;

  @media (min-width: 600px) {
    width: 40vw;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const ErrorMessage = styled.small`
  color: red;
  height: 20px;
  width: 100%;

  @media (min-width: 750px) {
    font-size: 18px;
  }
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
