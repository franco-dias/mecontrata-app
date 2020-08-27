import React from 'react';
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
  const { signIn } = useAuth();

  const onSubmit = ({ email, password }) => {
    signIn({ email, password });
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo width="320" />
      </LogoWrapper>
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldTouched,
          touched,
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
                onBlur={() => setFieldTouched('email')}
                touched={touched.email}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="vpn-key"
                placeholder="Senha"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                error={errors.password}
                touched={touched.password}
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
