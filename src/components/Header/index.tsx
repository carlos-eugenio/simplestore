import React from 'react';

import {useNavigation} from '@react-navigation/native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  LogoImage,
  LogoImageContainer,
  SearchFavoritesContainer,
  ButtonSearch,
  ButtonFavorites,
  SearchContainer,
  SearchInput,
  ButtonGoBack,
} from './styles';

import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoImageContainer
        testID="navigate-to-home"
        onPress={() => navigation.navigate('Home')}>
        <LogoImage source={logoImg} />
      </LogoImageContainer>
      <SearchFavoritesContainer>
        <SearchContainer>
          {/* <ButtonGoBack testID={'1'} onPress={() => console.log('deu 1')}>
            <MaterialIcon size={28} name="keyboard-backspace" color="#1b1b1b" />
          </ButtonGoBack> */}
          <SearchInput>Search</SearchInput>
        </SearchContainer>
        <ButtonSearch testID={'1'} onPress={() => console.log('deu 1')}>
          <MaterialIcon size={28} name="cloud-search-outline" color="#1b1b1b" />
        </ButtonSearch>
        <ButtonFavorites
          testID="navigate-to-favorites"
          onPress={() => navigation.navigate('Favorites')}>
          <FeatherIcon size={28} name="star" color="#1b1b1b" />
        </ButtonFavorites>
      </SearchFavoritesContainer>
    </Container>
  );
};

export default Header;
