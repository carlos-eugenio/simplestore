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
  justify-content: space-between;
  margin: 0 10px;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 1,
})`
  flex: 1;
`;

export const Product = styled.View`
  background: #2f2f2f;
  border-radius: 10px;
  flex: 1;
  margin: 0 10px 10px 10px;
`;

export const ProductImage = styled.ImageBackground`
  border-radius: 10px;
  height: 116px;
  width: 110px;
  overflow: hidden;
  align-self: flex-start;
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
  font-family: 'RobotoCondensed-Bold';
  font-size: 18px;
`;

export const ButtonAddFavorite = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-end;
  padding: 10px 10px 60px 10px;
  color: #fff;
`;
