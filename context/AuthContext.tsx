import { useState, useContext, createContext } from 'react'
import * as SQLite from 'expo-sqlite'
import { useRouter } from 'expo-router'
import { GATED_CONTENT_PATH, MYACCOUNT_PATH, REGISTER_PATH } from '../constants'
import { Alert } from 'react-native'

const db = SQLite.openDatabase('authentication.db')

interface AuthContextProviderProps {
  children: React.ReactNode
}

export interface AuthContextProps {
  isLoggedIn: boolean
  logOut: () => void
  logIn: () => void
  username: string
  password: string
  setUsername: (username: string) => void
  setPassword: (password: string) => void
  createTable: () => void
  loginUser: () => void
  registerUser: () => void
  clearInputFieldsAndGoTOPath: (path: string) => void
}

const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const logOut = () => {
    setIsLoggedIn(false)
  }

  const logIn = () => {
    setIsLoggedIn(true)
    router.push(GATED_CONTENT_PATH)
  }

  const createTable = () => {
    db.transaction((tx) =>
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL);'
      )
    )
  }

  const showLoginFailAlert = () => {
    Alert.alert('Login Failed', 'Try again', [
      {
        text: 'Ok',
        onPress: () => clearInputFieldsAndGoToPath(MYACCOUNT_PATH),
      },
    ])
  }

  const loginUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?;',
        [username, password],
        (_, { rows }) => {
          const userExists = rows.length > 0
          userExists ? logIn() : showLoginFailAlert()
        }
      )
    })
  }

  const clearInputFieldsAndGoToPath = (path: string) => {
    setUsername('')
    setPassword('')
    router.push(path)
  }

  const showRegisterFailAlert = () => {
    Alert.alert('Another user with that name', 'Super duper', [
      {
        text: 'Ok',
        onPress: () => clearInputFieldsAndGoToPath(REGISTER_PATH),
      },
    ])
  }

  const showRegisterSuccessAlert = () => {
    Alert.alert('Registration Successfull', 'Everything is Ok', [
      {
        text: 'Go to Login Page',
        onPress: () => clearInputFieldsAndGoToPath(MYACCOUNT_PATH),
      },
      {
        text: 'Register more users',
        onPress: () => clearInputFieldsAndGoToPath(REGISTER_PATH),
      },
    ])
  }

  const addUsertoDb = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (username, password) VALUES (?, ?);',
        [username, password],
        (_, {}) => showRegisterSuccessAlert()
      )
    })
  }

  const registerUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ?;',
        [username],
        (_, { rows }) => {
          const userExists = rows.length > 0
          userExists ? showRegisterFailAlert() : addUsertoDb()
        }
      )
    })
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logOut,
        logIn,
        username,
        setUsername,
        password,
        setPassword,
        createTable,
        loginUser,
        registerUser,
        clearInputFieldsAndGoTOPath: clearInputFieldsAndGoToPath,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
