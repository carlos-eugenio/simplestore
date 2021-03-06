import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  images_url: Array<string>;
  specifications: string;
  price: number;
  reviews: number;
  color: string;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  removeFromCart(item: Omit<Product, 'quantity'>): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = await AsyncStorage.getItem(
        '@SimpleStore:products',
      );

      if (storagedProducts) {
        setProducts([...JSON.parse(storagedProducts)]);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const productExists = products.find(p => p.id === product.id);

      if (productExists) {
        setProducts(
          products.map(p =>
            p.id === product.id ? {...product, quantity: p.quantity + 1} : p,
          ),
        );
      } else {
        setProducts([...products, {...product, quantity: 1}]);
      }

      await AsyncStorage.setItem(
        '@SimpleStore:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const removeFromCart = useCallback(
    async product => {
      const productExists = products.find(p => p.id === product.id);

      if (productExists && productExists.quantity >= 2) {
        setProducts(
          products.map(p =>
            p.id === product.id ? {...product, quantity: p.quantity - 1} : p,
          ),
        );
      } else {
        setProducts(products.filter(p => p.id !== product.id));
      }

      await AsyncStorage.setItem(
        '@SimpleStore:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const value = React.useMemo(() => ({addToCart, removeFromCart, products}), [
    products,
    addToCart,
    removeFromCart,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export {CartProvider, useCart};
