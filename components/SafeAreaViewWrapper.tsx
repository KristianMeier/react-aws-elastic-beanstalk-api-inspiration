import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  RefreshControl,
} from 'react-native'
import { Navigation } from './Navigation'
import { COLORS, FONT, FONTSIZES, SIZES } from '../theme'
import { useState, useCallback } from 'react'

interface SafeAreaViewWrapperProps {
  children: React.ReactNode
  header: string
}

export const SafeAreaViewWrapper = ({
  children,
  header,
}: SafeAreaViewWrapperProps) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }, [])

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View style={styles.container}>
          <Navigation />
          <Text style={styles.header}>{header}</Text>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
  },
  header: {
    marginBottom: SIZES.medium,
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.xxl,
  },
})
