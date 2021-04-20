import React, {useState, useEffect} from 'react';

import FloatingCart from '../../components/FloatingCart';

import api from '../../services/api';

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
  image_url: string;
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<ProductsCategory[]>([]);

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
              testID={`${item.id}`}
              onPress={() => console.log(`deu${item.id}`)}>
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
