import {useState, useCallback, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  short_title: string;
  images_url: Array<string>;
  specifications: string;
  price: number;
  reviews: number;
  color: string;
}

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites(): Promise<void> {
      const storagedFavorites = await AsyncStorage.getItem(
        '@SimpleStore:favorites',
      );

      if (storagedFavorites) {
        setFavorites([...JSON.parse(storagedFavorites)]);
      }
      setLoading(false);
    }

    loadFavorites();
  }, []);

  const addRemoveFavorites = useCallback(
    async product => {
      const productExists = favorites.find(p => p.id === product.id);

      if (!productExists) {
        const newFavorites = [...favorites, {...product, is_favorite: true}];
        await AsyncStorage.setItem(
          '@SimpleStore:favorites',
          JSON.stringify(newFavorites),
        );
        setFavorites(newFavorites);
      } else {
        const newFavorites = favorites.filter(p => p.id !== product.id);
        await AsyncStorage.setItem(
          '@SimpleStore:favorites',
          JSON.stringify(newFavorites),
        );
        setFavorites(newFavorites);
      }
    },
    [favorites],
  );
  return {favorites, loading, addRemoveFavorites};
};

export default useFavorites;
