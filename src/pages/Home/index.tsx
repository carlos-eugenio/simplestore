import React from 'react';

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

const categories = [
  {
    id: '1',
    title: 'Mobile Phones',
    image_url:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Laptops',
    image_url:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '3',
    title: 'Smart Watches',
    image_url:
      'https://images.unsplash.com/photo-1542541864-4abf21a55761?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80',
  },
  {
    id: '4',
    title: 'Head phones',
    image_url:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1346&q=80',
  },
  {
    id: '5',
    title: 'Phone Chargers',
    image_url:
      'https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  },
  {
    id: '6',
    title: 'Phone Cases',
    image_url:
      'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

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
