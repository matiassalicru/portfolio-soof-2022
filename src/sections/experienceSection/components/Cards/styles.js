import styled from 'styled-components'
import { device } from '../../../../constants'

export const SCCardContainer = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundGray};
  color: ${({ theme }) => theme.color};
  height: auto;
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.neon};
  cursor: pointer;
  transition: box-shadow 0.2s;
  gap: 20px;
  margin-top: 36px;

  @media ${device.tablet} {
    margin: 0 36px;
  }

  &:hover {
    box-shadow: 0px 0px 20px 1px ${({ theme }) => theme.neon};
  }
`

export const SCCardContent = styled.div`
  width: 200px;
  
  @media ${device.mobileM} {
    width: 300px;
  }

  @media ${device.tablet} {
    width: 250px;
    height: 500px;
  }

  @media ${device.laptop} {
    height: auto;
    width: 400px;
  }
`

export const SCExpItemText = styled.p`
  font-size: 18px;
  font-weight: 200;
  min-height: 100px;
  height: 200px;

  @media ${device.laptop} {
    height: auto;
    margin: 50px 0;
  }
`

export const SCCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  text-align: center;
  margin-bottom: 20px;

  @media ${device.tablet} {
    white-space: nowrap;
  }
`

export const SCCardImg = styled.img`
  max-width: 200px;
  max-height: 100%;
  border-radius: 10px;

  @media ${device.laptop} {
    max-width: 400px;
  }
`

export const SCCardImgContainer = styled.div`
  .swiper-slide-active {
    display: flex;
    justify-content: center;
  }
`

export const SCButton = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.neon};
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
  width: fit-content;
  align-self: center;
  justify-self: center;
  margin: auto;
  color: ${({ theme }) => theme.color};
  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.neon};
  }
`
