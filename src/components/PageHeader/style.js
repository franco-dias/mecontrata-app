import styled from 'styled-components/native';

import Logo from '../Logo';

const Container = styled.View`
  justify-content: center;
  flex-direction: row;
  height: 40px;
`;

const MenuButton = styled.View`
  position: absolute;
  left: 16px;
  top: 16px;
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 16px;
`;

const SearchButton = styled.View`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export {
  Container,
  MenuButton,
  SearchButton,
  StyledLogo,
};
