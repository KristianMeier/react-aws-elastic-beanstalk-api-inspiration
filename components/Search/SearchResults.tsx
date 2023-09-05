import { useEffect } from 'react'
import { getConvertedSearchData, getFilteredCompanies } from '../../utils'
import { CompanyData } from '../../types'
import { View, Text, StyleSheet } from 'react-native'
import { t } from '../../i18n'
import { SearchContextProps, useSearchContext } from '../../context'
import { SearchCompany } from './SearchCompany'
import { FONT, FONTSIZES, SIZES } from '../../theme'

interface SearchResultsProps {
  allCompanies: CompanyData[]
}

export const SearchResults = ({ allCompanies }: SearchResultsProps) => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSearchContext() as SearchContextProps

  useEffect(() => {
    isSearchFieldEmpty
      ? setCompanies(allCompanies)
      : setCompanies(getFilteredCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty)
    return (
      <View style={styles.noCompaniesWrapper}>
        <Text style={styles.noCompaniesText}>{t('companiesNoCompanies')}</Text>
      </View>
    )

  if (isCompaniesFound)
    return (
      <View style={styles.companyWrapper}>
        {companies.map((company, index) => {
          const convertedData = getConvertedSearchData({ ...company })
          const uid = t(company.uid)

          return (
            <SearchCompany
              key={index}
              convertedData={convertedData}
              uid={uid}
            />
          )
        })}
      </View>
    )

  return null
}

const styles = StyleSheet.create({
  companyWrapper: {
    width: '100%',
  },
  noCompaniesText: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.l,
  },
  noCompaniesWrapper: {
    marginTop: SIZES.medium,
  },
})
