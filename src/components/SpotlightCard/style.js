import styled from 'styled-components';

const Balloon = styled.View`
  justify-content: space-evenly;
  width: 263px;
  height: 165px;
  border-radius: 14px;
  background-color:   ${({ color }) => (color || '#D9D9F9')} ;
  padding: 16px 0 16px 22px;
`;

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const ImagePhoto = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 23px;
  margin-right: 18px;
`;

const CustomText = styled.Text`
  font-family: Inter;
  padding-left: 7px;
  color:  ${({ color }) => (color || '#000')};
`;

export {
  Balloon, Row, ImagePhoto, CustomText,
};
