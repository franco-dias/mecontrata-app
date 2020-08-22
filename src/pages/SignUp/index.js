import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import PhotoUpload from '../../components/PhotoUpload';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { formDataApi } from '../../resources/api';

import {
  UploadWrapper,
  Container,
  PageContent,
  InputWrapper,
  Link as LinkContainer,
  LinkText,
} from './style';

const SignUp = ({ navigation }) => {
  const [photo, setPhoto] = useState({});

  const onSubmit = (values) => {
    const formData = new FormData();

    formData.append('avatar', {
      uri: photo.uri,
      type: photo.type,
      name: photo.fileName,
    });

    formDataApi.post('/user', formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          name: 'Franco',
          email: 'franco@teste.com',
          password: 'g12081997',
          phoneNumber: '+5534999171345',
          state: 'Minas Gerais',
          city: 'Uberlândia',
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <PageContent>
            <UploadWrapper>
              <PhotoUpload
                size={256}
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
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="mail-outline"
                placeholder="E-mail"
                onChangeText={handleChange('email')}
                value={values.email}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="vpn-key"
                placeholder="Senha"
                onChangeText={handleChange('password')}
                secureTextEntry
                value={values.password}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                iconName="phone"
                placeholder="Telefone"
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
              />
            </InputWrapper>
            <InputWrapper>
              <Select
                options={[]}
              />
            </InputWrapper>
            <InputWrapper>
              <Select
                options={[]}
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
