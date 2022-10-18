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
    {
      id: 1,
      title: 'Personal Projects',
      images_URL: [
        'https://i.ibb.co/dB4gk0M/Frame-17.png',
        'https://i.ibb.co/fvKXNHT/Whats-App-Image-2022-10-17-at-20-50-24.jpg',
        'https://i.ibb.co/NKDJXbF/Whats-App-Image-2022-10-17-at-20-50-24-1.jpg',
        'https://i.ibb.co/cy8d9tj/Whats-App-Image-2022-10-17-at-20-50-24-2.jpg',
      ],
      link: 'https://www.figma.com/proto/PiNNoFOqFOF6ZDuuBdGvML/Traveler.finali?page-id=0%3A1&node-id=5%3A497&viewport=3048%2C2195%2C0.79&scaling=scale-down&starting-point-node-id=5%3A497',
    },
    {
      id: 2,
      title: 'Streming Designs',
      images_URL: ['https://i.ibb.co/CQLs7PV/travel-app.jpg'],
      link: '',
    },
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
