import { CompanyData } from 'types/sharedTypes'
import { t } from '../i18n'

export const getFilteredCompanies = (
  searchField: string,
  allCompanies: CompanyData[]
) => {
  const filteredCompanies = allCompanies.filter(
    (company) =>
      t(company.companyName)
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
      t(company.cvrNumber).toLowerCase().includes(searchField.toLowerCase())
  )

  return searchField ? filteredCompanies : []
}
