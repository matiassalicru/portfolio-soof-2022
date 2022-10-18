import { useContext, useEffect } from 'react'

// Context
import { ThemeContext } from './context/themeContext/Context'

// Styled-Components
import { ThemeProvider } from 'styled-components'
import { SCThemeButton, SCLang, SCFixedButtons, SCIcon } from './styles'
import GlobalCSS from './global.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons'
import faMoon from './lotties/moon-outline.svg'
import faSun from './lotties/sunny-outline.svg'

// Constants
import { DARK } from './context/themeContext/constants'

// Sections
import { Home } from './sections/homeSection/Home'

// Translations
import { useTranslation } from 'react-i18next'

// Constants
import { ENG_LANG, ESP_LANG } from './constants'

// Componentes
import { About } from './sections/aboutSection/About'
import { Skills } from './sections/skillsSection/Skills'
import { Experience } from './sections/experienceSection/Experience'
import { Contact } from './sections/contactSection/Contact'

function App() {
  const { i18n } = useTranslation()

  const { theme, changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (i18n.language !== (ESP_LANG || ENG_LANG)) {
      i18n.changeLanguage(ENG_LANG)
    }
  }, [i18n])

  const setNewLang = () => {
    i18n.changeLanguage(i18n.language === ENG_LANG ? ESP_LANG : ENG_LANG)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <SCFixedButtons>
        <SCThemeButton onClick={changeTheme} type='button' rightSpace='10px'>
          <SCIcon src={theme.theme === DARK ? faSun : faMoon} />
        </SCThemeButton>
        <SCThemeButton type='button' rightSpace='60px' onClick={setNewLang}>
          <SCLang>{i18n.language}</SCLang>
          <FontAwesomeIcon icon={faGlobeAmericas} size='xl' />
        </SCThemeButton>
      </SCFixedButtons>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </ThemeProvider>
  )
}

export default App
