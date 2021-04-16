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
  ProductDetailsContainer,
  BackgroundImageDarken,
  ProductPrice,
  ProductColor,
  ProductQuantityContainer,
  ButtonQuantity,
  ProductQuantity,
} from './styles';

// interface Product {
//   id: string;
//   title: string;
//   image_url: string;
//   price: number;
//   category_id: number;
// }

const products = [];

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
                <BackgroundImageDarken>
                  <ProductDetailsContainer>
                    <ProductColor
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}
                      style={{backgroundColor: `${item.color}`}}
                    />
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>$ {item.price}</ProductPrice>
                    <ProductQuantityContainer>
                      <ButtonQuantity
                        testID={`${item.id}`}
                        onPress={() => console.log(`deu${item.id}`)}>
                        <FeatherIcon
                          size={24}
                          name="plus-square"
                          color="#fff"
                        />
                      </ButtonQuantity>
                      <ProductQuantity>1</ProductQuantity>
                      <ButtonQuantity
                        testID={`${item.id}`}
                        onPress={() => console.log(`deu${item.id}`)}>
                        <FeatherIcon
                          size={24}
                          name="minus-square"
                          color="#fff"
                        />
                      </ButtonQuantity>
                    </ProductQuantityContainer>
                  </ProductDetailsContainer>
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

export default Cart;
