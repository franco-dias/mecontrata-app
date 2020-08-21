import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  height: 40px;
`;

const MenuButton = styled.View`
  position: absolute;
  left: 16px;
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
};
