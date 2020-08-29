import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';

import * as yup from 'yup';
import PhotoUpload from '../../components/PhotoUpload';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import api, { formDataApi } from '../../resources/api';

import {
  UploadWrapper,
  Container,
  PageContent,
  InputWrapper,
  Link as LinkContainer,
  LinkText,
} from './style';

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Deve ser um e-mail válido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório').min(8, 'No mínimo 8 caracteres.'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('Campo obrigatório'),
  phoneNumber: yup.string().required('Campo obrigatório'),
  state: yup.string().required('Campo obrigatório'),
  city: yup.string('Campo obrigatório').required('Campo obrigatório').nullable(),
});

const SignUp = ({ navigation }) => {
  const [photo, setPhoto] = useState({});
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    api.get('/states/list')
      .then(({ data }) => setLocations(data));
  };

  useEffect(() => {
    getLocations();
  }, []);

  const onSubmit = (values) => {
    const data = new FormData();

    data.append('avatar', {
      uri: photo.uri,
      type: photo.type,
      name: photo.fileName,
    });

    data.append('data', JSON.stringify(values));

    formDataApi.post('/user', data)
      .then(() => {
        Toast.show('Cadastro realizado com sucesso!');
        navigation.navigate('SignIn');
      });
  };

  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={{}}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange
      >
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          values,
          errors,
        }) => (
          <PageContent>
            <UploadWrapper>
              <PhotoUpload
                size={192}
                photo={photo}
                setPhoto={setPhoto}
              />
            </UploadWrapper>
            <InputWrapper>
              <Input
                iconName="person"
                placeholder="Nome completo"
                onChangeText={handleChange('name')}
                value={values.name}
                error={errors.name}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="mail-outline"
                placeholder="E-mail"
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                value={values.email}
                error={errors.email}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="vpn-key"
                placeholder="Senha"
                onChangeText={handleChange('password')}
                secureTextEntry
                autoCapitalize="none"
                value={values.password}
                error={errors.password}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="vpn-key"
                placeholder="Senha"
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
                autoCapitalize="none"
                value={values.confirmPassword}
                error={errors.confirmPassword}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="phone"
                placeholder="Telefone"
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
                error={errors.phoneNumber}
              />
            </InputWrapper>
            <InputWrapper>
              <Select
                options={locations}
                placeholder="Selecione um estado"
                value={values.state}
                error={errors.state}
                onChange={(value) => {
                  setFieldValue('state', value);
                  setFieldValue('city', null);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <Select
                options={locations.find((item) => item.value === values.state)?.cities}
                placeholder="Selecione uma cidade"
                value={values.city}
                error={errors.city}
                onChange={(value) => setFieldValue('city', value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Button onPress={handleSubmit} label="Cadastrar" />
            </InputWrapper>
            <LinkContainer>
              <LinkText onPress={() => navigation.navigate('SignIn')}> Já tenho cadastro </LinkText>
            </LinkContainer>
          </PageContent>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
