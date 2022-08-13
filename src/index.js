import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProviderContext } from './context/themeContext/Context'
import './lang/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  </React.StrictMode>
)
