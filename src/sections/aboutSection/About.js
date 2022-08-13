// Translations
import { useTranslation } from 'react-i18next'

// Styled-components
import {
  SCAboutContainer,
  SCAboutContent,
  SCAboutProfile,
  SCAboutText,
  SCAboutTitle,
} from './styles'

export const About = () => {
  const { t } = useTranslation('about')

  return (
    <SCAboutContainer id='about_section'>
      <SCAboutTitle>{t('about:title')}</SCAboutTitle>
      <SCAboutContent>
        <SCAboutText>{t('about:text')}</SCAboutText>
        <SCAboutProfile />
      </SCAboutContent>
      <SCAboutText>{t('about:text')}</SCAboutText>
    </SCAboutContainer>
  )
}
