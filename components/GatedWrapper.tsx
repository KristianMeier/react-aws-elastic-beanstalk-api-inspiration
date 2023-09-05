import {
  BORDER_COLOR,
  BORDER_STYLE,
  BORDER_WIDTH,
  FONTSIZES,
  SIZES,
} from '../theme'
import { SafeAreaViewWrapper } from './SafeAreaViewWrapper'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface GatedWrapperProps {
  onPress: () => void
  buttonText: string
  header: string
  children?: React.ReactNode
}

export const GatedWrapper = ({
  header,
  onPress,
  buttonText,
  children,
}: GatedWrapperProps) => {
  return (
    <SafeAreaViewWrapper header={header}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      {children}
    </SafeAreaViewWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONTSIZES.l,
    marginBottom: SIZES.large,
  },
  button: {
    width: 145,
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
