/* eslint-disable react-native/no-inline-styles */
import React from 'react';

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

const products = [
  {
    id: '1',
    title: 'Smartphone S1 64gb 5G NFC',
    short_title: 'Smartphone S1 64gb 5G',
    images_url: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80',
      'https://images.unsplash.com/photo-1560849735-f0a88439a4a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    ],
    specifications:
      'Hardware: 6gb ram memory, 64gb storage, Helio P90 CPU\nConnectivity: 4G / 5G network, WiFi, Bluetooth, NFC\nScreen: 6.2 inches screen, Full HD 1920 x 1080\nBattery: 4750 mah lithium-ion',
    color: ['silver', 'black', 'red'],
    reviews: 451,
    quantity: 1,
    price: 429.25,
  },
];

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
                    <ProductQuantity>{item.quantity}</ProductQuantity>
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
    </Container>
  );
};

export default Product;
