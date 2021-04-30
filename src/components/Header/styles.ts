import styled from 'styled-components/native';

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background: #f6f6f6;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

export const LogoImageContainer = styled.TouchableOpacity`
  justify-content: flex-start;
  padding: 0 20px;
`;

export const LogoImage = styled.Image`
  width: 92px;
  height: 38px;
`;

export const SearchFavoritesContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`;

export const SearchInput = styled.TextInput`
  font-family: 'RobotoCondensed-Regular';
  max-width: 100px;
  color: #1b1b1b;
  font-size: 12px;
  padding: 0 10px 0 5px;
  line-height: 13px;
`;

export const ButtonSearch = styled.TouchableOpacity``;

export const ButtonFavorites = styled.TouchableOpacity``;

export const ButtonGoBack = styled.TouchableOpacity``;
