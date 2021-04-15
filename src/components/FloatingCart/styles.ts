import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #1b1b1b;

  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
`;

export const CartPricing = styled.Text`
  padding: 20px;
`;

export const CartTotalPrice = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
`;

export const CartButton = styled.TouchableOpacity`
  flex-direction: row;
  background: #1b1b1b;

  flex: 1;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CartButtonText = styled.Text`
  font-family: 'RobotoCondensed-Regular';
  font-size: 14px;
  color: #fff;
  margin-left: 20px;
  flex: 1;
  margin-right: auto;
`;
