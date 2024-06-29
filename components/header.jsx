import { StyleSheet, Text, View } from 'react-native'
import { Diamond } from '../icons/diamond'

export const Header = () => (
  <View style={styles.header}>
    <Diamond />
    <Text style={styles.text}>movilperu</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontFamily: 'Rubik-Bold',
    fontSize: 18,
  },
})
