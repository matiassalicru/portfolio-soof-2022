import React from 'react'

// Styles
import { SCFooterContainer, SCLink } from './styles'

// Utils
import { Trans } from 'react-i18next'

export const Footer = () => {
  return (
    <SCFooterContainer>
      <Trans i18nKey='footer:main_text'>
        <SCLink href='https://matiassalicru.vercel.app' rel='noopener noreferrer' target="_blank"/>
      </Trans>
    </SCFooterContainer>
  )
}
