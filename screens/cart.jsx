import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';
import { usePostOrderMutation } from '../services/shopService';
import { CartItem } from '../components/cartItem';
import { formatPrice } from '../utils/price';
import { Button } from '../components/button';

export const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.value.user);
  const items = useSelector(state => state.cart.value.items);
  const total = useSelector(state => state.cart.value.total);
  const [triggerPost, result] = usePostOrderMutation();
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const cartIsEmpty = items.length === 0;

  const handleDelete = item => {
    dispatch(removeItem(item));
    setConfirmationMessage(''); // Limpiar el mensaje de confirmación
  };

  const confirmOrder = async () => {
    try {
      const order = { items, total, userId: user.localId, date: new Date().toISOString() }; // Asegúrate de incluir userId
      await triggerPost(order).unwrap();
      setConfirmationMessage('¡Pedido confirmado!');
    } catch (error) {
      setConfirmationMessage('Error al confirmar el pedido. Inténtelo de nuevo.');
    }
  };
  
  


  useEffect(() => {
    setConfirmationMessage(''); // Limpia el msj de confirmación cuando se actualiza el carrito
  }, [items]);

  return (
    <View style={styles.cart}>
      <FlatList
        contentContainerStyle={{ gap: 32 }}
        data={items}
        renderItem={({ item }) => (
          <CartItem {...item} onDelete={() => handleDelete(item)} />
        )}
        ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
      />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalText}>{formatPrice(total)}</Text>
      </View>
      {cartIsEmpty ? null : (
        <Button disabled={cartIsEmpty} onPress={confirmOrder}>
          Confirmar pedido
        </Button>
      )}
      {confirmationMessage ? <Text style={styles.confirmation}>{confirmationMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    minHeight: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 16,
  },
  total: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    fontSize: 30,
  },
  totalText: {
    fontFamily: 'Rubik-Bold',
    fontSize:16,
  },
  confirmation: {
    marginTop: 16,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});
