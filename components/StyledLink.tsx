import { Linking, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

interface StyledLinkProps {
  path: string
  children: React.ReactNode
  style?: {}
}

export const StyledLink = ({ path, children, style }: StyledLinkProps) => {
  const router = useRouter()

  if (path.includes('http')) {
    return (
      <TouchableOpacity
        style={style}
        onPress={() => Linking.openURL(path)}>
        {children}
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      style={style}
      onPress={() => router.push(path)}>
      {children}
    </TouchableOpacity>
  )
}
