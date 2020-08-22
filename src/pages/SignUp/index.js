import React, { useState } from 'react';

import PhotoUpload from '../../components/PhotoUpload';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

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
  return (
    <Container>
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
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            iconName="mail-outline"
            placeholder="E-mail"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            iconName="vpn-key"
            placeholder="Senha"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            iconName="phone"
            placeholder="Telefone"
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
          <Button label="Cadastrar" />
        </InputWrapper>
        <LinkContainer>
          <LinkText onPress={() => navigation.navigate('SignIn')}> Já tenho cadastro </LinkText>
        </LinkContainer>
      </PageContent>
    </Container>
  );
};

export default SignUp;
