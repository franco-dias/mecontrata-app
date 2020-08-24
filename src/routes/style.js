import styled from 'styled-components/native';

const DrawerContainer = styled.View`
  padding: 44px 12px 44px 20px;
  flex: 1;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 12px;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-family: LobsterRegular;
`;

const UserEmail = styled.Text`
  font-size: 10px;
  font-family: InterLight;
`;

const MenuContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const MenuItem = styled.TouchableOpacity`
  margin-top: 36px;
`;

export {
  DrawerContainer,
  UserInfo,
  UserImage,
  UserName,
  UserEmail,
  HeaderRow,
  MenuContainer,
  MenuItem,
};
