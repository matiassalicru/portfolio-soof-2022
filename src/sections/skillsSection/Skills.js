// Translations
import { useTranslation } from 'react-i18next'

// Lottie
import Lottie from 'react-lottie'
import * as animationData from '../../lotties/design.json'

// Styled-components
import {
  SCSkillsContainer,
  SCSkillsTitle,
  SCSkillsList,
  SCSkillsListItem,
  SCSkillsListItemContainer,
  SCListContainer,
} from './styles'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export const Skills = () => {
  const { t } = useTranslation('skills')

  const SKILLS = [
    'figma',
    'procreate',
    'design_systems',
    'adobe',
    'code',
    'communication',
    'g_suite',
  ]

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  return (
    <SCSkillsContainer>
      <SCSkillsTitle>{t('skills:title')}</SCSkillsTitle>
      <SCListContainer>
        <SCSkillsList>
          {SKILLS.map((skill, index) => (
            <SCSkillsListItemContainer key={index}>
              <FontAwesomeIcon icon={faCircle} />
              <SCSkillsListItem>{t(`skills:${skill}`)}</SCSkillsListItem>
            </SCSkillsListItemContainer>
          ))}
        </SCSkillsList>
        <Lottie
          isClickToPauseDisabled
          options={defaultOptions}
          height={'auto'}
          width={'auto'}
          style={{ margin: '0 100px', maxWidth: '500px', minWidth: '200px' }}
        />
      </SCListContainer>
    </SCSkillsContainer>
  )
}
