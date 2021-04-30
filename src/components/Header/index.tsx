import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  HeaderContainer,
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
  const [textSearch, setTextSearch] = useState('');
  const navigation = useNavigation();

  function handleSearch(textSearch) {
    const valueSearch = textSearch;
    setTextSearch('');
    navigation.navigate('Search', {searchTitle: valueSearch});
  }

  return (
    <HeaderContainer>
      <Container>
        <LogoImageContainer
          testID="navigate-to-home"
          onPress={() => navigation.navigate('Home')}>
          <LogoImage source={logoImg} />
        </LogoImageContainer>
        <SearchFavoritesContainer>
          <SearchContainer>
            <ButtonGoBack
              testID="navigate-go-back"
              onPress={() => navigation.goBack()}>
              <FeatherIcon size={28} name="chevron-left" color="#1b1b1b" />
            </ButtonGoBack>
            <SearchInput
              placeholder="Search"
              onChangeText={value => setTextSearch(value)}
              defaultValue={textSearch}
              returnKeyType="send"
              onSubmitEditing={() => handleSearch(textSearch)}
            />
            <ButtonSearch
              testID="submit-search"
              onPress={() => handleSearch(textSearch)}>
              <MaterialIcon
                size={28}
                name="cloud-search-outline"
                color="#1b1b1b"
              />
            </ButtonSearch>
          </SearchContainer>
          <ButtonFavorites
            testID="navigate-to-favorites"
            onPress={() => navigation.navigate('Favorites')}>
            <FeatherIcon size={28} name="star" color="#1b1b1b" />
          </ButtonFavorites>
        </SearchFavoritesContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
