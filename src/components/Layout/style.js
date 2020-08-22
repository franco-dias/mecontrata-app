import styled from 'styled-components/native';

const Container = styled.ScrollView`
  padding: 0;
  position: relative;
  flex: 1;
  background: #fff;
`;

const KeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 24px 24px 0;
`;

export {
  Container,
  KeyboardAvoid,
};
