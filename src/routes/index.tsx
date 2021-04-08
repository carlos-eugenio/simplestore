import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

// import Header from '../components/Header';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';

import logoImg from '../assets/logo.png';

const Routes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Routes.Navigator
    initialRouteName="Cart"
    screenOptions={{
      headerStyle: {
        height: 80,
        backgroundColor: '#f6f6f6',
      },
      headerTitleAlign: 'center',
      headerTitle: () => <Image source={logoImg} />,
      cardStyle: {backgroundColor: '#f6f6f6'},
    }}>
    <Routes.Screen name="Home" component={Home} />
    <Routes.Screen name="Cart" component={Cart} />
    <Routes.Screen name="Product" component={Product} />
    <Routes.Screen name="Favorites" component={Favorites} />
    <Routes.Screen name="Search" component={Search} />
  </Routes.Navigator>
);

export default AppRoutes;
