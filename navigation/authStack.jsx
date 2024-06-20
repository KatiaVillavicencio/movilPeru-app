import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE } from './routes'
import { Login } from '../screens/login'
import { SignUp } from '../screens/signUp'

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthStack = () => (
  <Navigator
    initialRouteName={ROUTE.LOGIN}
    screenOptions={{
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitleStyle: { fontFamily: 'Rubik-Regular' },
    }}
  >
    <Screen
      name={ROUTE.LOGIN}
      component={Login}
      options={{
        title: 'Movil-Perú',
      }}
    />
    <Screen
      name={ROUTE.SIGN_UP}
      component={SignUp}
      options={{
        title: 'Crear cuenta',
      }}
    />
  </Navigator>
)
