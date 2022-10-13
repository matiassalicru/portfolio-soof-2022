// Translations
import { useTranslation } from 'react-i18next'
// import { ExperienceItem } from './components/ExperienceItem/ExperienceItem'
import { Card } from './components/Cards/index'
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
    { id: 1, title: 'Streming Designs', image_URL: 'https://i.ibb.co/CQLs7PV/travel-app.jpg' },
    { id: 2, title: 'Personal Projects', image_URL: 'https://i.ibb.co/CQLs7PV/travel-app.jpg' },
  ]

  return (
    <SCExpContainer>
      <SCExpTitle>{t('exp:title')}</SCExpTitle>
      <SCExpContent>
        {EXPERIENCES.map((exp) => (
          <Card exp={exp} key={exp.id} />
        ))}
      </SCExpContent>
    </SCExpContainer>
  )
}
