import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

const FloatingCart: React.FC = () => {
  return (
    <Container>
      <CartButton testID={'1'} onPress={() => console.log('deu 1')}>
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <CartButtonText>20 items</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice>$ 14,564.68</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
