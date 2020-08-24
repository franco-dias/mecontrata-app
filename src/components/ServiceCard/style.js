import styled from 'styled-components';

const Card = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items:center;
  background-color: #FFF;
  border-radius: 10px;
  padding-right: 12px;
`;

const CategoryColor = styled.View`
  width: 12px;
  height: 100%;
  background-color: ${({ color }) => (color || '#FFF')};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const ProfilePhoto = styled.Image`
  width: 60px;
  height: 60px;
  margin: 0 16px;
  border-radius: 30px;
`;

const TextProfile = styled.Text`
  font-size: ${({ size }) => (size || 14)}px;
  font-family: ${({ family }) => (family || 'InterRegular')};
  color: #666;
`;

export {
  Card,
  CategoryColor,
  ProfilePhoto,
  TextProfile,
};
