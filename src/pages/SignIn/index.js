import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

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

const validationSchema = yup.object().shape({
  email: yup.string().email('Deve ser um e-mail válido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório').min(8, 'No mínimo 8 caracteres.'),
});

function SignIn() {
  const navigation = useNavigation();
  const { signIn, authenticated } = useAuth();

  const onSubmit = ({ email, password }) => {
    signIn({ email, password });
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
        }) => (
          <FormWrapper>
            <InputWrapper>
              <Input
                iconName="mail-outline"
                placeholder="E-mail"
                value={values.email}
                onChangeText={handleChange('email')}
                error={errors.email}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="vpn-key"
                placeholder="Senha"
                value={values.password}
                onChangeText={handleChange('password')}
                error={errors.password}
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
