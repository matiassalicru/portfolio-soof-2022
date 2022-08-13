import { useContext } from 'react'

// Context
import { ThemeContext } from './context/themeContext/Context'

// Styled-Components
import { ThemeProvider } from 'styled-components'
import { SCThemeButton, SCLang, SCFixedButtons } from './styles'
import GlobalCSS from './global.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons'

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

  const setNewLang = () => {
    i18n.changeLanguage(i18n.language === ENG_LANG ? ESP_LANG : ENG_LANG)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <SCFixedButtons>
        <SCThemeButton onClick={changeTheme} type='button' rightSpace='10px'>
          <FontAwesomeIcon
            icon={theme.theme === DARK ? faSun : faMoon}
            size='xl'
          />
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
