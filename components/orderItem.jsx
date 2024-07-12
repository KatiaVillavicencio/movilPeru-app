import { StyleSheet, Text, View } from 'react-native';
import { formatPrice } from '../utils/price';
import { formatDate } from '../utils/date';

export const OrderItem = ({ createdAt, totalPrice }) => (
  <View style={styles.orderItem}>
    <Text style={styles.orderText}>{formatDate(createdAt)}</Text>
    <Text style={styles.orderText}>{formatPrice(totalPrice)}</Text>
  </View>
);

export const styles = StyleSheet.create({
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  orderText: {
    fontFamily: 'Unbounded-Bold',
  },
});
