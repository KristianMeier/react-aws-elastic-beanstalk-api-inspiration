import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { AuthContextProps, useAuthContext } from '../context'
import { BORDER_COLOR, BORDER_STYLE, BORDER_WIDTH, SIZES } from '../theme'
import { SafeAreaViewWrapper } from './SafeAreaViewWrapper'

interface AuthComponentProps {
  onPressLeft: () => void
  btnTextLeft: string
  onPressRight: () => void
  btnTextRight: string
  header: string
}

export const AuthComponent = ({
  onPressLeft,
  btnTextLeft,
  onPressRight,
  btnTextRight,
  header,
}: AuthComponentProps) => {
  const { username, password, setUsername, setPassword } =
    useAuthContext() as AuthContextProps

  return (
    <SafeAreaViewWrapper header={header}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressLeft}>
          <Text style={styles.buttonText}>{btnTextLeft}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressRight}>
          <Text style={styles.buttonText}>{btnTextRight}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaViewWrapper>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    gap: SIZES.small,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: SIZES.small,
    padding: SIZES.small,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.small,
    marginBottom: SIZES.small,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
  buttonText: {
    textAlign: 'center',
  },
})
