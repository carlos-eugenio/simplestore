import React from 'react';

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

const products = [
  {
    id: '1',
    title: 'Smartphone S1 64gb 5G NFC',
    image_url:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 429.25,
    category_id: 1,
  },
  {
    id: '2',
    title: 'Smartphone P4 32gb 4G WiFi ',
    image_url:
      'https://images.unsplash.com/photo-1600340048140-909329c17ac1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    price: 286.17,
    category_id: 1,
  },
  {
    id: '3',
    title: 'Smartphone F2 16gb 4G NFC',
    image_url:
      'https://images.unsplash.com/photo-1597075095386-87bdd1ee195c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=635&q=80',
    price: 235.59,
    category_id: 1,
  },
  {
    id: '4',
    title: 'Smartphone K8 16gb 4G WiFi',
    image_url:
      'https://images.unsplash.com/photo-1587204714992-2c93329aaa3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=618&q=80',
    price: 228.73,
    category_id: 1,
  },
  {
    id: '5',
    title: 'Smartphone J25 8gb 3G',
    image_url:
      'https://images.unsplash.com/photo-1519619091416-f5d7e5200702?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    price: 176.52,
    category_id: 1,
  },
  {
    id: '6',
    title: 'Smartphone G8 128gb 5G NFC',
    image_url:
      'https://images.unsplash.com/photo-1597075095400-fb3f0de70140?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=635&q=80',
    price: 521.98,
    category_id: 1,
  },
];

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
    </Container>
  );
};

export default Search;
