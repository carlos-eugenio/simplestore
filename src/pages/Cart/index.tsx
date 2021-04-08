import React from 'react';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  ButtonFavoriteTitleContainer,
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
    color: 'Black',
  },
  {
    id: '2',
    title: 'Laptop XS 15 screen',
    image_url:
      'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 1429.25,
    color: 'Gray',
  },
  {
    id: '3',
    title: 'Smartwatch W100',
    image_url:
      'https://images.unsplash.com/photo-1550935268-e9e4bdc7c972?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=676&q=80',
    price: 114.98,
    color: 'Green',
  },
  {
    id: '4',
    title: 'Headphone HD100',
    image_url:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 119.99,
    color: 'White',
  },
  {
    id: '5',
    title: 'Charger for J9 smartphone',
    image_url:
      'https://images.unsplash.com/photo-1600490722773-35753aea6332?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
    price: 35.73,
    color: 'Black',
  },
  {
    id: '6',
    title: 'Phone case for K8 smartphone',
    image_url:
      'https://images.unsplash.com/photo-1578840602674-bd891cb7ea5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    price: 8.25,
    color: 'Blue',
  },
];

const Cart: React.FC = () => {
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{uri: item.image_url}}>
                <ButtonFavoriteTitleContainer>
                  {/* <ProductTitle>{item.title}</ProductTitle> */}
                </ButtonFavoriteTitleContainer>
              </ProductImage>
            </Product>
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default Cart;
