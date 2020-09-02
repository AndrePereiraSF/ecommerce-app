import React from 'react';
import { useForm } from 'react-hook-form';

import {
  RegisterPageContainer,
  RegisterContainer,
  InputLabel,
  Submit,
  Form,
  SignInContainer,
} from './styles';

import Title from '../../components/Title';
import StyledLink from '../../components/StyledLink';
import ControlledInput from '../../components/ControlledInput';

export default function Login() {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <RegisterPageContainer>
      <RegisterContainer>
        <Title>THRIFT SHOP</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel>Email</InputLabel>
          <ControlledInput type="email" name="email" control={control} />
          <InputLabel>Senha</InputLabel>
          <ControlledInput type="password" name="password" control={control} />
          <InputLabel>Confirmar senha</InputLabel>
          <ControlledInput
            type="password"
            name="confirm-password"
            control={control}
          />
          <Submit type="submit" value="Registrar" />
        </Form>
        <SignInContainer>
          <div>Já possui uma conta?</div>
          <StyledLink to="/login" color="#faa014">
            Entrar
          </StyledLink>
        </SignInContainer>
      </RegisterContainer>
    </RegisterPageContainer>
  );
}
