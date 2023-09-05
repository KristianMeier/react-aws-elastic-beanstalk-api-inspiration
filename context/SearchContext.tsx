import { createContext, useContext, useState } from 'react'
import { CompanyData } from '../types'

interface SearchContectProviderProps {
  children: React.ReactNode
}

export interface SearchContextProps {
  companies: CompanyData[]
  setCompanies: (companies: CompanyData[]) => void
  searchField: string
  setSearchField: (searchField: string) => void
  isSearchFieldEmpty: boolean
  isCompaniesFound: boolean
}

const SearchContext = createContext<SearchContextProps | null>(null)

export const SearchContextProvider = ({
  children,
}: SearchContectProviderProps) => {
  const [companies, setCompanies] = useState<CompanyData[]>([])
  const [searchField, setSearchField] = useState('')

  const isSearchFieldEmpty = searchField === ''
  const isCompaniesFound = !!companies.length

  return (
    <SearchContext.Provider
      value={{
        companies,
        setCompanies,
        searchField,
        setSearchField,
        isSearchFieldEmpty,
        isCompaniesFound,
      }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)
