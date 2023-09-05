import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { t } from '../../i18n'
import {
  BORDER_COLOR,
  BORDER_STYLE,
  BORDER_WIDTH,
  FONT,
  SIZES,
} from '../../theme'
import { useRouter } from 'expo-router'

interface SearchCompanyProps {
  convertedData: {
    title: string
    paragraphOne: string
    paragraphTwo: string
  }[]
  uid: string
}

export const SearchCompany = ({ convertedData, uid }: SearchCompanyProps) => {
  const router = useRouter()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/company/${uid}`)}>
      {convertedData.map(({ title, paragraphOne, paragraphTwo }, index) => {
        return (
          <View
            style={styles.text}
            key={title + index}>
            {title && <Text style={styles.title}>{t(title)}</Text>}
            {paragraphOne && <Text>{t(paragraphOne)}</Text>}
            {paragraphTwo && <Text>{t(paragraphTwo)}</Text>}
          </View>
        )
      })}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    marginTop: SIZES.medium,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
  text: {
    padding: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
  },
})
