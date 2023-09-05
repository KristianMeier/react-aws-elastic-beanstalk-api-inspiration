import { getConvertedCompanyData } from '../../utils'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { t } from '../../i18n'
import {
  BORDER_COLOR,
  BORDER_STYLE,
  BORDER_WIDTH,
  COLORS,
  FONT,
  FONTSIZES,
  SIZES,
} from '../../theme'
import { SafeAreaViewWrapper } from '../../components/SafeAreaViewWrapper'
import { useRouter, useSearchParams } from 'expo-router'
import { COMPANIES_ENDPOINT, SEARCH_PATH } from '../../constants'
import axios from 'axios'
import { LoadingComponent } from '../../components/LoadingComponent'
import { useState, useEffect } from 'react'
import { CompanyData } from '../../types'

const Company = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [data, setData] = useState<CompanyData[] | null>(null)
  const isNoData = !data?.length
  const uid = params.uid

  useEffect(() => {
    axios.get(COMPANIES_ENDPOINT).then((response) => {
      setData(response.data)
    })
  }, [])

  if (isNoData) return <LoadingComponent />

  const company = data.find((company) => t(company.uid) === uid)

  if (!company)
    return (
      <View>
        <Text>{t('companies.nocompanies')}</Text>
      </View>
    )

  return (
    <SafeAreaViewWrapper header="Company Details">
      <TouchableOpacity
        style={styles.backLink}
        onPress={() => router.push(SEARCH_PATH)}>
        <Text style={styles.backText}>{t('companiesBackToSearch')}</Text>
      </TouchableOpacity>
      <View style={styles.companyWrapper}>
        <View style={styles.companyContainer}>
          {getConvertedCompanyData(company).map(({ title, field }) => (
            <View key={t(field)}>
              <Text style={styles.title}>{t(title)} </Text>
              <Text>{t(field)} </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaViewWrapper>
  )
}

export default Company

export const styles = StyleSheet.create({
  backLink: {
    width: '100%',
    alignItems: 'flex-start',
  },
  backText: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.s,
    color: COLORS.primary,
    marginBottom: SIZES.medium,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  companyWrapper: {
    width: '100%',
    padding: SIZES.medium,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
  companyName: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.s,
  },
  companyContainer: {
    gap: SIZES.large,
  },
  title: {
    fontFamily: FONT.bold,
  },
})
