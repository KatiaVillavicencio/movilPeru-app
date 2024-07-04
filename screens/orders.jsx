import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
/* import orderData from '../data/orders.json' */
import { OrderItem } from '../components/orderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersByUserQuery } from '../services/shopService'

export const Orders = () => {
  const user = useSelector(state => state.auth.value.user)
  console.log('Current user:', user); 
  const { data: orders, error, isLoading } = useGetOrdersByUserQuery(user.localId)
  console.log('Orders data:', orders);
  
  if (isLoading) {
    return <Text>Cargando ordenes...</Text>
  }
  if (error) {
    return <Text>Error al cargar ordenes!</Text>
  }
  
  const ordersArray = orders ? Object.values(orders) : [];

  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={styles.list} data={ordersArray} renderItem={({ item }) => <OrderItem {...item} />} ListEmptyComponent={<Text>No hay ordenes</Text>} />
    </View>

  )
}

export const styles = StyleSheet.create({
  orders: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  list: {
    gap: 32,
  },
})









