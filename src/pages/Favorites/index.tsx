import React from 'react';

import FloatingCart from '../../components/FloatingCart';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  ButtonFavoriteTitleContainer,
  BackgroundImageDarken,
  ButtonAddFavorite,
} from './styles';

// interface Product {
//   id: string;
//   title: string;
//   image_url: string;
//   price: number;
//   category_id: number;
// }

const products = [];

const Favorites: React.FC = () => {
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{uri: item.image_url}}>
                <BackgroundImageDarken>
                  <ButtonFavoriteTitleContainer>
                    <ButtonAddFavorite
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}>
                      <FeatherIcon size={28} name="star" color="#BD9F00" />
                    </ButtonAddFavorite>
                    <ProductTitle>{item.title}</ProductTitle>
                  </ButtonFavoriteTitleContainer>
                </BackgroundImageDarken>
              </ProductImage>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Favorites;
