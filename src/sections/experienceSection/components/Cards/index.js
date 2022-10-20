import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'

import {
  SCCardContainer,
  SCExpItemText,
  SCCardTitle,
  SCCardImg,
  SCCardImgContainer,
  SCButton,
  SCCardContent
} from './styles'

export const Card = ({ exp }) => {
  const { id, images_URL, title, link } = exp
  const { t } = useTranslation('exp')

  return (
    <SCCardContainer>
      <SCCardContent>
        <SCCardTitle>{title}</SCCardTitle>
        <SCCardImgContainer>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            initialSlide={0}
            style={{
              '--swiper-navigation-color': '#000',
              '--swiper-navigation-size': '25px',
            }}
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            {images_URL.map((image_URL) => (
              <SwiperSlide>
                <SCCardImg src={image_URL} alt='project image' />
              </SwiperSlide>
            ))}
          </Swiper>
        </SCCardImgContainer>
        <SCExpItemText>
          <Trans
            defaults={`exp:text_${id}`}
            components={{ bold: <strong /> }}
          />
        </SCExpItemText>
        <SCButton target='_blank' href={link}>
          {t('exp:visit_button')}
        </SCButton>
      </SCCardContent>
    </SCCardContainer>
  )
}
