import styled from 'styled-components'
import { device } from '../../constants'

export const SCExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 0 20px;
  margin-top: 36px;
  
  @media ${device.laptop} {
    margin: 0 100px;
  }
`

export const SCExpTitle = styled.div`
  font-weight: 400;
  font-size: 2rem;
  text-decoration: underline;
`

export const SCExpContent = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  
  @media ${device.tablet} { 
    flex-direction: row;
    margin-top: 70px;
  }
`

export const SCExpProfile = styled.div``

export const SCExpText = styled.div``
