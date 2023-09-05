import { SearchResults } from '../components/Search/SearchResults'
import { TextInput, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { SearchContextProps, useSearchContext } from '../context'
import { SIZES, BORDER_WIDTH, BORDER_COLOR, BORDER_STYLE } from '../theme'
import { SafeAreaViewWrapper } from '../components/SafeAreaViewWrapper'
import { COMPANIES_ENDPOINT } from '../constants'
import { CompanyData } from '../types'
import axios from 'axios'
import { LoadingComponent } from '../components/LoadingComponent'
import { useState, useEffect } from 'react'

const Index = () => {
  const { searchField, setSearchField } =
    useSearchContext() as SearchContextProps
  const [data, setData] = useState<CompanyData[] | null>(null)
  const isNoData = !data?.length

  useEffect(() => {
    axios.get(COMPANIES_ENDPOINT).then((response) => {
      setData(response.data)
    })
  }, [])

  if (isNoData) return <LoadingComponent />

  return (
    <SafeAreaViewWrapper header={t('searchTitle')}>
      <TextInput
        style={styles.textInput}
        value={searchField}
        onChangeText={setSearchField}
        placeholder="Write Company Name, Cvr Number or Address"
      />
      <SearchResults allCompanies={data} />
    </SafeAreaViewWrapper>
  )
}

export default Index

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    flex: 1,
    padding: SIZES.medium,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
})
