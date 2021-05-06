import React, {useState, useCallback, useEffect} from 'react';

import api from '../../services/api';

import {useCart} from '../../hooks/cart';
import FloatingCart from '../../components/FloatingCart';

import useFavorites from '../../hooks/favorites';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductContainer,
  ProductGallery,
  ProductSelectedImage,
  ProductUnselectedImage,
  ProductUnselectedImageContainer,
  ProductList,
  ProductDetails,
  ProductDescription,
  ProductDescriptionText,
  ProductSpecifications,
  ProductTitle,
  ProductPrice,
  ProductReviewContainer,
  ProductReviewIcon,
  ProductReviewText,
  ProductPriceCartContainer,
  ProductAddToCartText,
  ProductAddToCartButton,
  ProductColorContainer,
  ProductColorText,
  ProductColor,
  TouchableUnselectedImage,
  TouchableFavorite,
} from './styles';

interface ProductInterface {
  id: string;
  title: string;
  images_url: Array<string>;
  specifications: string;
  price: number;
  reviews: number;
  color: string;
}

interface RouteNavigation {
  [key: string]: any;
}

const Product: React.FC<RouteNavigation> = ({route}) => {
  const {addToCart} = useCart();
  const {favorites, addRemoveFavorites} = useFavorites();
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const {productId} = route.params;

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`/products?id=${productId}`);

      setProduct(response.data);
    }

    loadProduct();
  }, [productId]);

  function handleAddToCart(item: ProductInterface): void {
    addToCart(item);
  }

  const handleAddRemoveFavorites = useCallback(
    (item: ProductInterface): void => {
      addRemoveFavorites(item);
    },
    [addRemoveFavorites],
  );

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={product}
          keyExtractor={(item: ProductInterface) => item.id}
          renderItem={({item}: {item: ProductInterface}) => (
            <ProductDetails>
              <ProductGallery>
                <ProductUnselectedImageContainer>
                  <TouchableUnselectedImage
                    testID={`change-image-${item.id}`}
                    onPress={() => setSelectedImage(0)}>
                    <ProductUnselectedImage
                      source={{uri: item.images_url[0]}}
                    />
                  </TouchableUnselectedImage>
                  <TouchableUnselectedImage
                    testID={`change-image-${item.id}`}
                    onPress={() => setSelectedImage(1)}>
                    <ProductUnselectedImage
                      source={{uri: item.images_url[1]}}
                    />
                  </TouchableUnselectedImage>
                  <TouchableUnselectedImage
                    testID={`change-image-${item.id}`}
                    onPress={() => setSelectedImage(2)}>
                    <ProductUnselectedImage
                      source={{uri: item.images_url[2]}}
                    />
                  </TouchableUnselectedImage>
                  <TouchableUnselectedImage
                    testID={`change-image-${item.id}`}
                    onPress={() => setSelectedImage(3)}>
                    <ProductUnselectedImage
                      source={{uri: item.images_url[3]}}
                    />
                  </TouchableUnselectedImage>
                </ProductUnselectedImageContainer>
                <ProductSelectedImage
                  source={{uri: item.images_url[selectedImage]}}>
                  <TouchableFavorite
                    testID={`add-remove-favorite-${item.id}`}
                    onPress={() => handleAddRemoveFavorites(item)}>
                    <FeatherIcon
                      size={46}
                      name="heart"
                      color={
                        favorites.find(p => p.id === item.id)
                          ? '#BD9F00'
                          : '#6a6a6a'
                      }
                    />
                  </TouchableFavorite>
                </ProductSelectedImage>
              </ProductGallery>
              <ProductDescription>
                <ProductTitle>{item.title}</ProductTitle>

                <ProductReviewContainer>
                  <ProductReviewIcon>
                    <FeatherIcon size={18} name="star" color="#BD9F00" />
                    <FeatherIcon size={18} name="star" color="#BD9F00" />
                    <FeatherIcon size={18} name="star" color="#BD9F00" />
                    <FeatherIcon size={18} name="star" color="#BD9F00" />
                    <FeatherIcon size={18} name="star" color="#BD9F00" />
                  </ProductReviewIcon>
                  <ProductReviewText>{item.reviews} reviews</ProductReviewText>
                </ProductReviewContainer>

                <ProductPriceCartContainer>
                  <ProductPrice>$ {item.price}</ProductPrice>
                  <ProductAddToCartButton
                    testID={`add-to-cart-${item.id}`}
                    onPress={() => handleAddToCart(item)}>
                    <ProductAddToCartText>Add to Cart</ProductAddToCartText>
                  </ProductAddToCartButton>
                </ProductPriceCartContainer>

                <ProductSpecifications>
                  <ProductDescriptionText
                    style={{fontFamily: 'RobotoCondensed-Bold'}}>
                    Product specifications
                  </ProductDescriptionText>
                  <ProductDescriptionText
                    style={{fontFamily: 'RobotoCondensed-Regular'}}>
                    {item.specifications}
                  </ProductDescriptionText>
                  <ProductColorContainer>
                    <ProductColor style={{backgroundColor: `${item.color}`}} />
                    <ProductColorText style={{color: `${item.color}`}}>
                      {item.color}
                    </ProductColorText>
                  </ProductColorContainer>
                </ProductSpecifications>
              </ProductDescription>
            </ProductDetails>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Product;
