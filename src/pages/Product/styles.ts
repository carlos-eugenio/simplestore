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
  margin: 0 10px;
  padding: 60px 0;
`;

export const ProductGallery = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 314px;
`;

export const ProductSelectedImage = styled.Image`
  flex: 3 1;
  width: 275px;
  height: 314px;
  border-radius: 10px;
`;

export const ProductUnselectedImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const TouchableUnselectedImage = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const ProductUnselectedImageContainer = styled.View`
  flex: 1 1;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

export const ProductDescription = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

export const ProductDescriptionText = styled.Text`
  color: #1b1b1b;
  align-self: flex-start;
  font-size: 15px;
  line-height: 22px;
  padding: 5px 0;
`;

export const ProductSpecifications = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 35px;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 1,
})`
  flex: 1;
`;

export const ProductDetails = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 10px 10px;
`;

export const ProductTitle = styled.Text`
  flex-direction: row;
  align-self: flex-start;
  color: #1b1b1b;
  font-family: 'RobotoCondensed-Bold';
  font-size: 24px;
`;

export const ProductReviewContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding: 8px 0;
`;

export const ProductReviewIcon = styled.View`
  flex-direction: row;
`;

export const ProductReviewText = styled.Text`
  color: #1b1b1b;
  font-family: 'RobotoCondensed-Regular';
  font-size: 12px;
  padding-left: 3px;
  line-height: 18px;
`;

export const ProductPriceCartContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductPrice = styled.Text`
  color: #1b1b1b;
  font-family: 'RobotoCondensed-Bold';
  font-size: 24px;
`;

export const ProductAddToCartButton = styled.TouchableOpacity`
  border: 2px solid #1b1b1b;
  border-radius: 5px;
  padding: 2px 8px;
`;

export const ProductAddToCartText = styled.Text`
  color: #1b1b1b;
  font-family: 'RobotoCondensed-Bold';
  font-size: 18px;
`;

export const ProductColorContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding: 10px 0;
`;

export const ProductColor = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 20px;
`;

export const ProductColorText = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  margin-right: 10px;
  margin-left: 5px;
`;