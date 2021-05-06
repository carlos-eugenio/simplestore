import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import FeatherIcon from 'react-native-vector-icons/Feather';

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
  NoResults,
  NoResultsContainer,
  LoadingIndicator,
} from './styles';

interface ProductInterface {
  id: string;
  title: string;
  images_url: Array<string>;
  price: number;
}

interface RouteNavigation {
  [key: string]: any;
}

const Search: React.FC<RouteNavigation> = ({route}) => {
  const [products, setProduct] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const {searchTitle} = route.params;

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`/products?title_like=${searchTitle}`);
      setProduct(response.data);
      setLoading(false);
    }

    loadProduct();
  }, [searchTitle]);

  return (
    <Container>
      <ProductContainer>
        {loading ? (
          <LoadingIndicator>
            <ActivityIndicator size="large" color="#1b1b1b" />
          </LoadingIndicator>
        ) : products.length ? (
          <ProductList
            data={products}
            keyExtractor={(item: ProductInterface) => item.id}
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
        ) : (
          <NoResultsContainer>
            <FeatherIcon size={50} name="cloud-off" color="#1b1b1b" />
            <NoResults>No results found!</NoResults>
          </NoResultsContainer>
        )}
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Search;
