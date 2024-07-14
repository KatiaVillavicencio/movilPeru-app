import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetOrdersByUserQuery } from '../services/shopService';
import { OrderItem } from '../components/orderItem';

export const Orders = () => {
  const user = useSelector(state => state.auth.value.user);
  console.log('Current user:', user);

  const { data: orders, error, isLoading } = useGetOrdersByUserQuery(user.localId);
  console.log('Orders data:', orders);

  if (isLoading) {
    return <Text>Cargando órdenes...</Text>;
  }
  if (error) {
    console.error('Error al cargar órdenes:', error);
    return <Text>Error al cargar órdenes</Text>;
  }

  // Convierte el objeto de órdenes en un array
  const ordersArray = orders ? Object.values(orders) : [];
  console.log('Orders array:', ordersArray);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={ordersArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OrderItem createdAt={item.date} totalPrice={item.total} />
        )}
        ListEmptyComponent={<Text>No hay órdenes</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  list: {
    marginTop: 16,
    flexGrow: 1,
  },
});
 




