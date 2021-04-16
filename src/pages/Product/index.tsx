/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import FloatingCart from '../../components/FloatingCart';

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
  ProductQuantity,
  ProductPrice,
  ProductQuantityContainer,
  ButtonQuantity,
  ProductReviewContainer,
  ProductReviewIcon,
  ProductReviewText,
  ProductQuantityPriceCartContainer,
  ProductAddToCartText,
  ProductAddToCartButton,
  ProductColorContainer,
  ProductColorText,
  ProductColor,
} from './styles';

// interface Product {
//   id: string;
//   title: string;
//   image_url: string;
//   price: number;
//   category_id: number;
// }

const products = [];

const Product: React.FC = () => {
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ProductDetails>
              <ProductGallery>
                <ProductUnselectedImageContainer>
                  <ProductUnselectedImage source={{uri: item.images_url[0]}} />
                  <ProductUnselectedImage source={{uri: item.images_url[1]}} />
                  <ProductUnselectedImage source={{uri: item.images_url[2]}} />
                  <ProductUnselectedImage source={{uri: item.images_url[3]}} />
                </ProductUnselectedImageContainer>
                <ProductSelectedImage source={{uri: item.images_url[3]}} />
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

                <ProductQuantityPriceCartContainer>
                  <ProductQuantityContainer>
                    <ButtonQuantity
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}>
                      <FeatherIcon
                        size={24}
                        name="plus-square"
                        color="#1b1b1b"
                      />
                    </ButtonQuantity>
                    <ProductQuantity>1</ProductQuantity>
                    <ButtonQuantity
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}>
                      <FeatherIcon
                        size={24}
                        name="minus-square"
                        color="#1b1b1b"
                      />
                    </ButtonQuantity>
                  </ProductQuantityContainer>
                  <ProductPrice>$ {item.price}</ProductPrice>
                  <ProductAddToCartButton
                    testID={`${item.id}`}
                    onPress={() => console.log(`deu${item.id}`)}>
                    <ProductAddToCartText>Add to Cart</ProductAddToCartText>
                  </ProductAddToCartButton>
                </ProductQuantityPriceCartContainer>

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
                    <ProductColor
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}
                      style={{backgroundColor: `${item.color[2]}`}}
                    />
                    <ProductColorText style={{color: `${item.color[2]}`}}>
                      {item.color[2]}
                    </ProductColorText>
                    <ProductColor
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}
                      style={{backgroundColor: `${item.color[1]}`}}
                    />
                    <ProductColorText style={{color: `${item.color[1]}`}}>
                      {item.color[1]}
                    </ProductColorText>
                    <ProductColor
                      testID={`${item.id}`}
                      onPress={() => console.log(`deu${item.id}`)}
                      style={{backgroundColor: `${item.color[0]}`}}
                    />
                    <ProductColorText style={{color: `${item.color[0]}`}}>
                      {item.color[0]}
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
