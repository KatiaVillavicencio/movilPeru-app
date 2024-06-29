import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { CategoryItem } from './categoryItem'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { setCategorySelected } from '../features/shop/shopSlice'
import { useGetCategoriesQuery } from '../services/shopService'
import { theme } from '../configs/theme'

export const Categories = () => {
  const { navigate } = useNavigation()
  const { data, isLoading, error } = useGetCategoriesQuery()
  const dispatch = useDispatch()

  const handlePress = brand => {
    dispatch(setCategorySelected(brand))
    navigate(ROUTE.ITEM_LIST_CATEGORIES, { brand })
  }

  return (
    <View style={styles.categories}>
      <Text style={styles.text}>Categorias</Text>
      {isLoading ? (
        <View style={styles.categoriesLoading}>
          <ActivityIndicator size='small' color={theme.colors.primary[500]} />
          <Text>Cargando categorias...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          vertical
          renderItem={({ item }) => (
            <CategoryItem name={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  categoriesLoading: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  categories: {
    gap: 16,
  },
  list: {
    gap: 12,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
  },
})
