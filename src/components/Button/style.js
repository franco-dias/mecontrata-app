import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 42px;
  border-radius: 21px; 
  background-color: #6C6CE5;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  font-family: InterSemiBold;
  text-transform: uppercase;
`;

export { ButtonContainer, ButtonText };
