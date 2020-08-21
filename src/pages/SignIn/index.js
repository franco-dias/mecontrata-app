import React from 'react';

import {
  Container,
  LogoWrapper,
  FormWrapper,
  InputWrapper,
  Link as LinkContainer,
  LinkText,
} from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

function SignIn() {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <FormWrapper>
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
          <Button label="Cadastrar" />
        </InputWrapper>
        <LinkContainer>
          <LinkText> Já tenho cadastro </LinkText>
        </LinkContainer>
      </FormWrapper>
    </Container>
  );
}

export default SignIn;
