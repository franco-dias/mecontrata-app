import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const PhotoList = styled.ScrollView`
  flex: 1;
  padding-top: 15px;
`;

const Photo = styled.Image`
  width: 250px;
  height: 166.67px;
  margin-right:  24px;
`;

export {
  Container,
  PhotoList,
  Photo,
};
