import React, {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import useFavorites from '../../hooks/favorites';

import FloatingCart from '../../components/FloatingCart';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  TitleFavoritesContainer,
  ProductFavorite,
  BackgroundImageDarken,
  NoResults,
  NoResultsContainer,
  LoadingIndicator,
} from './styles';

interface ProductInterface {
  id: string;
  title: string;
  short_title: string;
  images_url: Array<string>;
  specifications: string;
  price: number;
  reviews: number;
  color: string;
}

const Favorites: React.FC = () => {
  const {favorites, loading, addRemoveFavorites} = useFavorites();

  const navigation = useNavigation();

  const handleAddRemoveFavorites = useCallback(
    (item: ProductInterface): void => {
      addRemoveFavorites(item);
    },
    [addRemoveFavorites],
  );

  return (
    <Container>
      <ProductContainer>
        {loading ? (
          <LoadingIndicator>
            <ActivityIndicator size="large" color="#1b1b1b" />
          </LoadingIndicator>
        ) : favorites.length ? (
          <ProductList
            data={favorites}
            keyExtractor={(item: ProductInterface) => item.id}
            renderItem={({item}: {item: ProductInterface}) => (
              <Product
                testID="navigate-to-product"
                onPress={() =>
                  navigation.navigate('Product', {
                    productId: item.id,
                  })
                }>
                <ProductImage source={{uri: item.images_url[0]}}>
                  <BackgroundImageDarken>
                    <TitleFavoritesContainer>
                      <ProductFavorite
                        testID={`add-remove-favorite-${item.id}`}
                        onPress={() => handleAddRemoveFavorites(item)}>
                        <FeatherIcon size={28} name="heart" color="#BD9F00" />
                      </ProductFavorite>
                      <ProductTitle>{item.short_title}</ProductTitle>
                    </TitleFavoritesContainer>
                  </BackgroundImageDarken>
                </ProductImage>
              </Product>
            )}
          />
        ) : (
          <NoResultsContainer>
            <FeatherIcon size={50} name="cloud-off" color="#1b1b1b" />
            <NoResults>Wish list is empty!</NoResults>
          </NoResultsContainer>
        )}
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Favorites;
