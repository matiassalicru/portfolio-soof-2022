import styled from 'styled-components'
import { device } from '../../../../constants'

export const SCCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 0 36px;
  margin-top: 70px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundGray};
  color: ${({theme}) => theme.color};
  height: auto;
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.neon};
  cursor: pointer;
  transition: box-shadow 0.2s;
  gap: 20px;
  max-width: auto;

  @media ${device.laptop} {
    margin: 0 50px;
  }

  &:hover {
    box-shadow: 0px 0px 20px 1px ${({ theme }) => theme.neon};
  }
`

export const SCExpItemText = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  min-height: 100px;
  height: 100%;
`

export const SCCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  text-align: center;

  @media ${device.tablet} {
    white-space: nowrap;
  }
`

export const SCCardImg = styled.img`
  max-width: 200px;
  max-height: 100%;
  border-radius: 10px;

  @media ${device.laptop}{
    max-width: 400px;
  }
`

export const SCCardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
