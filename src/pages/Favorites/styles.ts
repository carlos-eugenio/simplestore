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
  padding: 60px 0;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
`;

export const Product = styled.TouchableOpacity`
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
`;

export const TitleFavoritesContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const ProductTitle = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  font-size: 18px;
  padding: 10px 0px;
`;

export const ProductFavorite = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const NoResults = styled.Text`
  align-self: center;
  font-size: 24px;
  color: #1b1b1b;
  font-family: 'RobotoCondensed-Bold';
`;

export const NoResultsContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.View`
  justify-content: center;
  align-items: center;
`;
