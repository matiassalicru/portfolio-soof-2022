// Translations
import { useTranslation } from 'react-i18next'

// Styled-components
import {
  SCSkillsContainer,
  SCSkillsTitle,
  SCSkillsList,
  SCSkillsListItem,
  SCSkillsListItemContainer,
} from './styles'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export const Skills = () => {
  const { t } = useTranslation('skills')

  const SKILLS = [
    'figma',
    'procreate',
    'video_editing',
    'code',
    'communication',
    'g_suite',
  ]

  return (
    <SCSkillsContainer>
      <SCSkillsTitle>{t('skills:title')}</SCSkillsTitle>
      <SCSkillsList>
        {SKILLS.map((skill, index) => (
          <SCSkillsListItemContainer key={index}>
            <FontAwesomeIcon icon={faCircle} />
            <SCSkillsListItem>{t(`skills:${skill}`)}</SCSkillsListItem>
          </SCSkillsListItemContainer>
        ))}
      </SCSkillsList>
    </SCSkillsContainer>
  )
}
