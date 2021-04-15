import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background: #f6f6f6;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LogoImageContainer = styled.TouchableOpacity`
  justify-content: flex-start;
`;

export const LogoImage = styled.Image`
  width: 90px;
  height: 38px;
`;

export const SearchFavoritesContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonSearch = styled.TouchableOpacity`
  padding: 0 5px;
`;

export const ButtonFavorites = styled.TouchableOpacity``;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.Text`
  font-family: 'RobotoCondensed-Regular';
  color: #1b1b1b;
  font-size: 12px;
  padding: 0 5px;
  line-height: 13px;
`;

export const ButtonGoBack = styled.TouchableOpacity``;
