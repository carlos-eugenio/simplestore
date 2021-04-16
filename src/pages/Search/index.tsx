import React from 'react';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  TitlePriceContainer,
  ProductPrice,
  BackgroundImageDarken,
} from './styles';

// interface Product {
//   id: string;
//   title: string;
//   image_url: string;
//   price: number;
//   category_id: number;
// }

const products = [];

const Search: React.FC = () => {
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
                  <TitlePriceContainer>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>$ {item.price}</ProductPrice>
                  </TitlePriceContainer>
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

export default Search;
