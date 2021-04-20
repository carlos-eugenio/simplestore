import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  TitlePriceContainer,
  ProductPrice,
  BackgroundImageDarken,
} from './styles';

interface ProductInterface {
  id: string;
  title: string;
  images_url: Array<string>;
  price: number;
}

const Search: React.FC = () => {
  const [products, setProduct] = useState<ProductInterface[]>([]);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get('/products?title_like=smartphone');

      setProduct(response.data);
    }

    loadProduct();
  }, []);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}: {item: ProductInterface}) => (
            <Product
              testID={`${item.id}`}
              onPress={() => console.log(`deu${item.id}`)}>
              <ProductImage source={{uri: item.images_url[0]}}>
                <BackgroundImageDarken>
                  <TitlePriceContainer>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>$ {item.price}</ProductPrice>
                  </TitlePriceContainer>
                </BackgroundImageDarken>
              </ProductImage>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Search;
