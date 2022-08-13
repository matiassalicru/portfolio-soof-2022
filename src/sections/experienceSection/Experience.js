// Translations
import { useTranslation } from 'react-i18next'
import { ExperienceItem } from './components/ExperienceItem/ExperienceItem'

// Styled-components
import {
  SCExpContainer,
  SCExpContent,
  // SCExpProfile,
  // SCExpText,
  SCExpTitle,
} from './styles'

export const Experience = () => {
  const { t } = useTranslation('exp')

  const EXPERIENCES = [
    { id: 1, image_URL: 'https://i.ibb.co/VYqfgCJ/Elstreamyacomienza.gif' },
    { id: 2, image_URL: 'https://i.ibb.co/THwY44n/IMG-3325.png' },
  ]

  return (
    <SCExpContainer>
      <SCExpTitle>{t('exp:title')}</SCExpTitle>
      <SCExpContent>
        {EXPERIENCES.map((exp) => (
          <ExperienceItem exp={exp} key={exp.id} />
        ))}
      </SCExpContent>
    </SCExpContainer>
  )
}
