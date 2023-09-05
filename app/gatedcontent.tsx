import { MYACCOUNT_PATH } from '../constants'
import { GatedWrapper } from '../components/GatedWrapper'
import { AuthContextProps, useAuthContext } from '../context'

const GatedContent = () => {
  const { isLoggedIn, logOut, clearInputFieldsAndGoTOPath } =
    useAuthContext() as AuthContextProps

  if (isLoggedIn)
    return (
      <GatedWrapper
        header="You are logged in"
        onPress={logOut}
        buttonText="Log Out"
      />
    )

  return (
    <GatedWrapper
      header="You are not logged in"
      onPress={() => clearInputFieldsAndGoTOPath(MYACCOUNT_PATH)}
      buttonText="Log In"
    />
  )
}

export default GatedContent
