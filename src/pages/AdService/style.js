import styled from 'styled-components';

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-bottom: 24px;
`;

const Col = styled.View`
  flex-direction: column;
  flex: 1;
`;

const UserPhoto = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 23px;
  margin-right: 18px;
`;

const UsernameAndIcon = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export {
  Row,
  Col,
  UserPhoto,
  UsernameAndIcon,
};
