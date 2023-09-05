import { SEARCH_PATH } from '../constants'
import { createContext, useContext, useState } from 'react'

interface NavigationContextProviderProps {
  children: React.ReactNode
}

export interface NavigationContextProps {
  activeTab: string
  setActiveTab: (activeTab: string) => void
}

const NavigationContext = createContext<NavigationContextProps | null>(null)

export const NavigationContextProvider = ({
  children,
}: NavigationContextProviderProps) => {
  const [activeTab, setActiveTab] = useState(SEARCH_PATH)

  return (
    <NavigationContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNagigationContext = () => useContext(NavigationContext)
