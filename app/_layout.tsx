import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { SearchContextProvider, AuthContextProvider } from '../context'
import { NavigationContextProvider } from '../context'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContextProvider>
      <SearchContextProvider>
        <AuthContextProvider>
          <Stack />
        </AuthContextProvider>
      </SearchContextProvider>
    </NavigationContextProvider>
  )
}
