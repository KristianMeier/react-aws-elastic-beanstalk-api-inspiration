import {
  FlatList,
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { navigationData } from '../constants'
import {
  SIZES,
  COLORS,
  FONT,
  BORDER_WIDTH,
  BORDER_COLOR,
  BORDER_STYLE,
} from '../theme'
import { NavigationContextProps, useNagigationContext } from '../context'

interface NavigationItemProps {
  item: {
    text: string
    path: string
  }
}

export const Navigation = () => {
  const { activeTab, setActiveTab } =
    useNagigationContext() as NavigationContextProps
  const router = useRouter()

  const NavigationItem = ({ item }: NavigationItemProps) => {
    const isActiveTab = activeTab === item.path

    return (
      <TouchableOpacity
        style={[
          styles.tab,
          { borderColor: isActiveTab ? COLORS.black : COLORS.gray2 },
        ]}
        onPress={() => {
          setActiveTab(item.path)
          router.push(item.path)
        }}>
        <Text
          style={[
            styles.tabText,
            { color: isActiveTab ? COLORS.black : COLORS.gray2 },
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.tabsContainer}>
        <FlatList
          data={navigationData}
          renderItem={NavigationItem}
          keyExtractor={(item) => item.text}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  tabsContainer: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    maxHeight: 40,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.small,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
  tabText: {
    fontFamily: FONT.medium,
    textAlign: 'center',
  },
})
