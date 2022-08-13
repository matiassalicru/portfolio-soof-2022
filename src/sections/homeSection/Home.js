import React from 'react'

// Styled-components
import {
  SCHomeContainer,
  SCProfilePic,
  SCTitleContainer,
  SCHomeTitle,
  SCHomeSubtitle,
  SCArrowContainer,
  SCTopLeftRect,
  SCTopLeftTitle,
  SCTopLeftTitleContainer,
  SCTopLeftContent,
} from './styles'

// Font awesome icons
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation('home')
  const actualYear = new Date().getFullYear()

  const scrollDown = () => {
    const pageHeight = window.innerHeight
    window.scrollTo({ top: pageHeight - 60, behavior: 'smooth' })
  }

  return (
    <SCHomeContainer>
      <SCTopLeftContent>
        <SCTopLeftRect />
        <SCTopLeftTitleContainer>
          <SCTopLeftTitle>{t('home:portfolio')}</SCTopLeftTitle>
          <SCTopLeftTitle>{actualYear}</SCTopLeftTitle>
        </SCTopLeftTitleContainer>
      </SCTopLeftContent>
      <SCArrowContainer onClick={scrollDown}>
        <FontAwesomeIcon icon={faAngleDown} />
      </SCArrowContainer>
      <SCProfilePic />
      <SCTitleContainer>
        <SCHomeTitle>Sofía Dolcemascolo</SCHomeTitle>
        <SCHomeSubtitle>{t('home:subtitle1')}</SCHomeSubtitle>
        <SCHomeSubtitle>{t('home:subtitle2')}</SCHomeSubtitle>
      </SCTitleContainer>
    </SCHomeContainer>
  )
}
