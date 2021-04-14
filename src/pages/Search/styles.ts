import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  category_id: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 0 10px;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
`;

export const Product = styled.View`
  background: #000;
  border-radius: 10px;
  flex: 1;
  margin: 10px;
`;

export const ProductImage = styled.ImageBackground`
  border-radius: 10px;
  height: 241px;
  width: 100%;
  overflow: hidden;
  align-self: center;
`;

export const BackgroundImageDarken = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: 'rgba(0,0,0, 0.30)';
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitlePriceContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 20px;
  margin-top: auto;
`;

export const ProductTitle = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  font-size: 18px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  padding-top: 5px;
`;

export const ProductButton = styled.TouchableOpacity``;
