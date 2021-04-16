import React from 'react';

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

const categories = [];

const Home: React.FC = () => {
  return (
    <Container>
      <CategoryContainer>
        <CategoryList
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Category>
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
