import { ActivityIndicator } from 'react-native'
import { COLORS } from '../theme'

export const LoadingComponent = () => {
  return (
    <ActivityIndicator
      size="large"
      color={COLORS.primary}
    />
  )
}
