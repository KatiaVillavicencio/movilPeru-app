import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import products from '../data/products.json';
import { theme } from '../configs/theme';
import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { formatPrice } from '../utils/price';
import { Button } from '../components/button';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export const ItemDetail = () => {
  const { params } = useRoute();
  const { goBack, setOptions } = useNavigation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad de productos

  const item = products.find(product => product.id === params.productId);
  const { brand, image, model, price } = item;

  const handleAddToCart = () => {
    dispatch(addItem({ ...item, quantity })); // Pasar cantidad al añadir al carrito
    goBack();
  };

  useEffect(() => {
    setOptions({ title: model });
  }, [params.brand]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Función para aumentar la cantidad
  };

  return (
    <SafeAreaView style={styles.itemDetail}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode='contain'
          />
          <Text style={styles.titleSection}>Details</Text>
          <View style={styles.info}>
            <Text style={styles.text}>{brand}</Text>
            <Text style={styles.text}>{model}</Text>
            <Text style={styles.text}>{formatPrice(price)}</Text>
          </View>
          <Text style={styles.titleSection}>Cantidad</Text>
          <View style={styles.quantityContainer}>
            <Button onPress={increaseQuantity}>+</Button>
            <Text style={styles.quantity}>{quantity}</Text>
          </View>
          <Button onPress={handleAddToCart}>Agregar al carrito</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemDetail: {
    paddingTop: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  container: {
    gap: 32,
  },
  image: {
    width: '100%',
    height: 320,
  },
  info: {
    gap: 16,
  },
  titleSection: {
    fontFamily: 'Rubik-Bold',
  },
  text: {
    textTransform: 'capitalize',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});