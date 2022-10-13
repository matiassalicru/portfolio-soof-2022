import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import { SCCardContainer, SCExpItemText, SCCardTitle, SCCardImg, SCCardImgContainer } from './styles'
export const Card = ({ exp }) => {
  const { t } = useTranslation()
  const { id, image_URL, title } = exp

  return (
    <SCCardContainer>
      <SCCardTitle>
        {title}
      </SCCardTitle>
      <SCCardImgContainer>
        <SCCardImg src={image_URL} alt="project image"/>
      </SCCardImgContainer>
      <SCExpItemText>
        <Trans 
          defaults={`exp:text_${id}`}
          components={{ bold: <strong /> }}  
        />
      </SCExpItemText>
    </SCCardContainer>
  )
}
