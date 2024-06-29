import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../configs/theme'

export const CategoryItem = ({ name, onPress }) => (
  <Pressable style={styles.category} onPress={onPress}>
    <Text style={styles.name}>{name}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    backgroundColor: '#D1C4E9',
    borderRadius: 8,
    height: 64,
    justifyContent: 'center',
    width: 200,
  },
  name: {
    color: '#4A148C',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})
