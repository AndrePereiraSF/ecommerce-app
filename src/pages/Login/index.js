import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserActions } from '../../store/reducers/user';

import {
  LoginPageContainer,
  LoginContainer,
  InputLabel,
  Submit,
  Form,
  SignUpContainer,
  ErrorMessage,
} from './styles';

import Title from '../../components/Title';
import StyledLink from '../../components/StyledLink';
import ControlledInput from '../../components/ControlledInput';
import Loading from '../../components/Loading';

export default function Login() {
  const { control, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);

      await dispatch(UserActions.signIn(email, password));

      history.push('/homepage');
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao logar. Tente novamente');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoginPageContainer>
        <LoginContainer>
          <Title>THRIFT SHOP</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel>Email</InputLabel>
            <ControlledInput
              type="email"
              name="email"
              control={control}
              rules={{
                required: 'informe seu email',
              }}
              error={errors.email && errors.email.message}
            />
            <InputLabel>Senha</InputLabel>
            <ControlledInput
              type="password"
              name="password"
              control={control}
              rules={{
                required: 'Informe sua senha',
              }}
              error={errors.password && errors.password.message}
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <Submit type="submit" value="Entrar" />
          </Form>
          <SignUpContainer>
            <div>Não possui uma conta?</div>
            <StyledLink to="/register" color="#faa014">
              Cadastre-se
            </StyledLink>
          </SignUpContainer>
        </LoginContainer>
      </LoginPageContainer>
      {isLoading && <Loading />}
    </>
  );
}
