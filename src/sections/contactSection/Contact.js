// Translations
import { useTranslation } from 'react-i18next'

// Styled-components
import {
  SCContactContainer,
  SCContactTitle,
  SCContactList,
  SCContactItem,
  SCContactItemContainer,
} from './styles'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  const { t } = useTranslation('contact')

  const CONTACT_CHANNELS = [
    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/sofia-dolcemascolo/',
    },
    {
      title: 'email',
      link: 'mailto:sofiadolche@gmail.com',
    },
    {
      title: 'twitter',
      link: 'https://twitter.com/blueberry_glr',
    },
    {
      title: 'behance',
      link: 'https://www.behance.net/sofiadolcemascolo',
    },
  ]

  return (
    <SCContactContainer>
      <SCContactTitle>{t('contact:title')}</SCContactTitle>
      <SCContactList>
        {CONTACT_CHANNELS.map((contact, index) => (
          <SCContactItemContainer key={index}>
            <FontAwesomeIcon icon={faCircle} />
            <SCContactItem
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'>
              {t(`contact:${contact.title}`)}
            </SCContactItem>
          </SCContactItemContainer>
        ))}
      </SCContactList>
    </SCContactContainer>
  )
}
