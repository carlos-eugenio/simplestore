import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Category {
  id: string;
  title: string;
  image_url: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const CategoryContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 0 10px;
`;

export const CategoryList = styled(
  FlatList as new () => FlatList<Category>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
`;

export const Category = styled.View`
  flex: 1;
  margin: 10px;
`;

export const CategoryImage = styled.ImageBackground`
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

export const CategoryTitle = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Bold';
  text-align: center;
  font-size: 32px;
  padding: 0 20px;
`;

export const CategoryButton = styled.TouchableOpacity``;
