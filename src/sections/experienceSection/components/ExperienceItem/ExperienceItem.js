import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  SCExpItemContainer,
  SCExpItemText,
  SCExpItemScreenshot,
} from './styles'

export const ExperienceItem = ({ exp }) => {
  const { t } = useTranslation('exp')
  const { id, image_URL } = exp

  return (
    <SCExpItemContainer>
      <SCExpItemScreenshot imageURL={image_URL ? image_URL : ''} />
      <SCExpItemText>
        {t(id ? `exp:text_${id}` : 'exp:not_found')}
      </SCExpItemText>
    </SCExpItemContainer>
  )
}
