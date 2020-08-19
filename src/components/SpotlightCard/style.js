import styled from 'styled-components';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';

const Balloon = styled.View`
  width: 263px;
  height: 165px;
  border-radius: 14px;
  background-color: orange;
  padding: 24px;
`;

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-bottom: 10px;
`;

const ImagePhoto = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 23px;
  margin-right: 18px;
`;

const IconFromIonic = styled(IconIonic)`
  margin-right: 10px;
`;

const IconFromAnt = styled(IconAnt)`
  margin-right: 10px;
`;

const IconFromMaterial = styled(IconMaterial)`
  margin-right: 10px;
`;

export {
  Balloon, Row, ImagePhoto, IconFromIonic, IconFromAnt, IconFromMaterial,
};
