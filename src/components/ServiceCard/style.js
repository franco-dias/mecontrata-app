import styled from 'styled-components';

const Card = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row; 
  align-items:center;
  background-color: #FFF;
  border-radius: 10px;
`;

const CategoryColor = styled.View`
  width: 12px;
  height: 100%;
  background-color: ${({ color }) => (color || '#FFFFFF')};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  margin: 0 16px;
  border-radius: 20px;
`;

export {
  Card, 
  CategoryColor, 
  ProfilePhoto
};
