import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

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

const Search: React.FC = ({route}) => {
  const [products, setProduct] = useState<ProductInterface[]>([]);

  const navigation = useNavigation();

  const {searchTitle} = route.params;

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`/products?title_like=${searchTitle}`);

      setProduct(response.data);
    }

    loadProduct();
  }, [searchTitle]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}: {item: ProductInterface}) => (
            <Product
              testID="navigate-to-product"
              onPress={() =>
                navigation.navigate('Product', {
                  productId: item.id,
                })
              }>
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
