import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  RegisterPageContainer,
  RegisterContainer,
  InputLabel,
  Submit,
  Form,
  SignInContainer,
  ErrorMessage,
} from './styles';

import { UserService } from '../../services/user';
import Title from '../../components/Title';
import StyledLink from '../../components/StyledLink';
import ControlledInput from '../../components/ControlledInput';
import Loading from '../../components/Loading';

export default function Login() {
  const { control, handleSubmit, errors, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const history = useHistory();

  const onSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);

      await UserService.signUp({ email, password });

      history.push('/');
    } catch (error) {
      console.error(error);

      setErrorMessage('Erro ao cadastrar. Tente novamente');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <RegisterPageContainer>
        <RegisterContainer>
          <Title>THRIFT SHOP</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel>Email</InputLabel>
            <ControlledInput
              type="email"
              name="email"
              control={control}
              rules={{
                required: 'Informe um email',
              }}
              error={errors.email && errors.email.message}
            />
            <InputLabel>Senha</InputLabel>
            <ControlledInput
              type="password"
              name="password"
              control={control}
              rules={{
                required: 'Informe uma senha',
                minLength: {
                  value: 8,
                  message: 'Mín. 8 caractéres',
                },
              }}
              error={errors.password && errors.password.message}
            />
            <InputLabel>Confirmar senha</InputLabel>
            <ControlledInput
              type="password"
              name="confirm"
              control={control}
              rules={{
                required: 'Confirme sua senha',
                validate: (value) => {
                  return (
                    value === watch('password') || 'As senhas devem ser iguais.'
                  );
                },
              }}
              error={errors.confirm && errors.confirm.message}
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <Submit type="submit" value="Registrar" />
          </Form>
          <SignInContainer>
            <div>Já possui uma conta?</div>
            <StyledLink to="/" color="#faa014">
              Entrar
            </StyledLink>
          </SignInContainer>
        </RegisterContainer>
      </RegisterPageContainer>
      {isLoading && <Loading />}
    </>
  );
}
