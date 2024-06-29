import { StyleSheet, TextInput, View } from 'react-native'
import { Search } from '../icons/search'
import { theme } from '../configs/theme'

export const SearchInput = props => (
  <View style={styles.searchInput}>
    <Search />
    <TextInput {...props} />
  </View>
)

const styles = StyleSheet.create({
  searchInput: {
    borderColor: theme.colors.gray[300],
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'column',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})
