import styled from 'styled-components';

const Card = styled.TouchableOpacity`
  width: 100%;
  height: 68px;
  flex-direction: row;
  align-items:center;
  background-color:#FFF;
  border-radius: 5px;
`;

const Square = styled.View`
  width: 36px;
  height: 36px;
  background-color:  ${({ color }) => (color || '#D9D9F9')} ;
  border-radius: 5px;
  margin: 0 20px 0 16px;
`;

export {
  Card, Square,
};
