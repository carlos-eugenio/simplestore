import React, {useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  CategoryContainer,
  CategoryImage,
  CategoryList,
  Category,
  CategoryTitle,
  BackgroundImageDarken,
} from './styles';

interface ProductsCategory {
  id: string;
  title: string;
  search_title: string;
  image_url: string;
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<ProductsCategory[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get('/categories');

      setCategories(response.data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <CategoryContainer>
        <CategoryList
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}: {item: ProductsCategory}) => (
            <Category
              testID="navigate-to-search"
              onPress={() =>
                navigation.navigate('Search', {
                  searchTitle: item.search_title,
                })
              }>
              <CategoryImage source={{uri: item.image_url}}>
                <BackgroundImageDarken>
                  <CategoryTitle>{item.title}</CategoryTitle>
                </BackgroundImageDarken>
              </CategoryImage>
            </Category>
          )}
        />
      </CategoryContainer>
      <FloatingCart />
    </Container>
  );
};

export default Home;
