import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import products from '../data/products.json';
import { useNavigation, useRoute } from '@react-navigation/native';
import { formatPrice } from '../utils/price';
import { Button } from '../components/button';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export const ItemDetail = () => {
  const { params } = useRoute();
  const { goBack, setOptions } = useNavigation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Cantidad de productos

  const item = products.find(product => product.id === params.productId);
  const { brand, image, model, price } = item;

  const handleAddToCart = () => {
    dispatch(addItem({ ...item, quantity })); // Pasar cantidad al añadir al carrito
    goBack();
  };

  useEffect(() => {
    setOptions({ title: model });
  }, [setOptions, model]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Función para aumentar la cantidad
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Función para disminuir la cantidad
    }
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
          <Text style={styles.titleSection}>Detalles</Text>
          <View style={styles.info}>
            <Text style={styles.text}>{brand}</Text>
            <Text style={styles.text}>{model}</Text>
            <Text style={styles.text}>{formatPrice(price)}</Text>
          </View>
          <Text style={styles.titleSection}>Cantidad</Text>
          <View style={styles.quantityContainer}>
            <Button onPress={decreaseQuantity} style={styles.quantityButton}>-</Button>
            <Text style={styles.quantity}>{quantity}</Text>
            <Button onPress={increaseQuantity} style={styles.quantityButton}>+</Button>
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
    paddingBottom: 5,
  },
  container: {
    gap: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  info: {
    gap: 4,
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
    marginBottom: 10,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,

  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
