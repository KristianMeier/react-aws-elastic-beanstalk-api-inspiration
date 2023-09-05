import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { BORDER_COLOR, BORDER_WIDTH, FONT, FONTSIZES, SIZES } from '../theme'
import { SafeAreaViewWrapper } from '../components/SafeAreaViewWrapper'
import axios from 'axios'
import { VIRKOPEDIA_ENDPOINT } from '../constants'
import { LoadingComponent } from '../components/LoadingComponent'

interface VirkopediaProps {
  title: string
  content: string
}

const Virkopedia = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const [data, setData] = useState<VirkopediaProps[] | null>(null)
  const isNoData = !data?.length

  useEffect(() => {
    axios.get(VIRKOPEDIA_ENDPOINT).then((response) => {
      setData(response.data)
    })
  }, [])

  if (isNoData) return <LoadingComponent />

  const title = data[activeButtonIndex]?.title
  const content = data[activeButtonIndex]?.content

  return (
    <SafeAreaViewWrapper header="Virkopedia">
      <View>
        <View style={styles.btnContainer}>
          {data.map(({ title }, index) => {
            const isActiveButton = index === activeButtonIndex
            return (
              <TouchableOpacity
                key={t(title) + index}
                onPress={() => setActiveButtonIndex(index)}>
                <Text
                  style={[
                    styles.buttonText,
                    {
                      fontFamily: isActiveButton ? FONT.bold : FONT.regular,
                    },
                  ]}>
                  {t(title)}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <View>
        <Text style={styles.headline}>{t(title)}</Text>
        <Text style={styles.text}>{t(content)}</Text>
      </View>
    </SafeAreaViewWrapper>
  )
}

export default Virkopedia

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZES.xSmall,
    marginBottom: SIZES.medium,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: BORDER_WIDTH,
  },

  headline: {
    fontSize: FONTSIZES.m,
    fontFamily: FONT.bold,
  },
  text: {
    fontSize: FONTSIZES.xs,
    lineHeight: SIZES.large,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: FONTSIZES.m,
  },
})
