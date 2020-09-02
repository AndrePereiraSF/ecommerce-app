import React from 'react';
import { useForm } from 'react-hook-form';

import {
  LoginPageContainer,
  LoginContainer,
  InputLabel,
  Submit,
  Form,
  SignUpContainer,
} from './styles';

import Title from '../../components/Title';
import StyledLink from '../../components/StyledLink';
import ControlledInput from '../../components/ControlledInput';

export default function Login() {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <LoginPageContainer>
      <LoginContainer>
        <Title>THRIFT SHOP</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel>Email</InputLabel>
          <ControlledInput type="email" name="email" control={control} />
          <InputLabel>Senha</InputLabel>
          <ControlledInput type="password" name="password" control={control} />
          <Submit type="submit" value="Entrar"/>
        </Form>
        <SignUpContainer>
          <div>Não possui uma conta?</div>
          <StyledLink to="/register" color="#faa014">
            Cadastre-se
          </StyledLink>
        </SignUpContainer>
      </LoginContainer>
    </LoginPageContainer>
  );
}
