import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  LogoWrapper,
  FormWrapper,
  InputWrapper,
  Link as LinkContainer,
  LinkText,
} from './style';

import { useAuth } from '../../contexts/AuthContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

function SignIn() {
  const navigation = useNavigation();
  const { signIn, authenticated } = useAuth();

  const onSubmit = ({ email, password }) => {
    signIn({ email, password });
  };

  console.log({ authenticated });

  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Formik
        initialValues={{ email: 'gabrielfdg10@gmail.com', password: 'g12081997' }}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          values,
        }) => (
          <FormWrapper>
            <InputWrapper>
              <Input
                iconName="mail-outline"
                placeholder="E-mail"
                value={values.email}
                onChangeText={handleChange('email')}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="vpn-key"
                placeholder="Senha"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
            </InputWrapper>
            <InputWrapper>
              <Button onPress={handleSubmit} label="Entrar" />
            </InputWrapper>
            <LinkContainer>
              <LinkText onPress={() => navigation.navigate('SignUp')}> Criar uma conta </LinkText>
            </LinkContainer>
          </FormWrapper>
        )}
      </Formik>
    </Container>
  );
}

export default SignIn;
