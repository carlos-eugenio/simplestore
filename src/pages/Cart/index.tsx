import React from 'react';

import FloatingCart from '../../components/FloatingCart';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {useCart} from '../../hooks/cart';

import {useNavigation} from '@react-navigation/native';

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

interface ProductInterface {
  id: string;
  title: string;
  short_title: string;
  images_url: Array<string>;
  specifications: string;
  price: number;
  reviews: number;
  color: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const {addToCart, removeFromCart, products} = useCart();

  const navigation = useNavigation();

  function handleAddToCart(item: ProductInterface): void {
    addToCart(item);
  }

  function handleRemoveFromCart(item: ProductInterface): void {
    removeFromCart(item);
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
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
                  <ProductDetailsContainer>
                    <ProductColor
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}
                      style={{backgroundColor: `${item.color}`}}
                    />
                    <ProductTitle>{item.short_title}</ProductTitle>
                    <ProductPrice>
                      $ {(item.price * item.quantity).toFixed(2)}
                    </ProductPrice>
                    <ProductQuantityContainer>
                      <ButtonQuantity
                        testID={`increment-${item.id}`}
                        onPress={() => handleAddToCart(item)}>
                        <FeatherIcon
                          size={24}
                          name="plus-square"
                          color="#fff"
                        />
                      </ButtonQuantity>
                      <ProductQuantity>{item.quantity}</ProductQuantity>
                      <ButtonQuantity
                        testID={`decrement-${item.id}`}
                        onPress={() => handleRemoveFromCart(item)}>
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
