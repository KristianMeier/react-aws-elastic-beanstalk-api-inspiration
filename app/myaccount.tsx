import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { AuthContextProps, useAuthContext } from '../context'
import { GATED_CONTENT_PATH, REGISTER_PATH } from '../constants'
import { AuthComponent } from '../components/AuthComponent'
import { View } from 'react-native'

const MyAccount = () => {
  const { createTable, isLoggedIn, loginUser, clearInputFieldsAndGoTOPath } =
    useAuthContext() as AuthContextProps
  const router = useRouter()

  useEffect(() => {
    createTable()
  }, [])

  if (isLoggedIn) router.push(GATED_CONTENT_PATH)

  return (
    <View>
      <AuthComponent
        header="Log in beneath"
        onPressLeft={() => loginUser()}
        btnTextLeft="Log In"
        onPressRight={() => clearInputFieldsAndGoTOPath(REGISTER_PATH)}
        btnTextRight="Go to Register Screen"
      />
    </View>
  )
}

export default MyAccount
