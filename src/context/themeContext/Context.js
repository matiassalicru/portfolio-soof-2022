import { createContext, useEffect, useState } from 'react'
import { DARK, DARK_THEME, LIGHT_THEME } from './constants'

export const ThemeContext = createContext()

export const ThemeProviderContext = ({ children }) => {
  const storage = localStorage.getItem('theme')
  const localTheme = JSON.parse(storage)
  const [theme, setTheme] = useState(localTheme || DARK_THEME)

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme.theme === DARK ? LIGHT_THEME : DARK_THEME
    })
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
