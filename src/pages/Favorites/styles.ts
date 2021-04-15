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
  padding-bottom: 60px;
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

export const ButtonFavoriteTitleContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.Text`
  flex-direction: row;
  align-self: flex-start;
  padding: 60px 20px 30px 20px;
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  font-size: 18px;
`;

export const ButtonAddFavorite = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-end;
  padding: 10px 10px 60px 10px;
  color: #fff;
`;
