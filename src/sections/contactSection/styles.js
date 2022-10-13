import styled from 'styled-components'
import { device } from '../../constants'

export const SCContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 100px 36px;
`

export const SCContactTitle = styled.h1`
  display: flex;
  font-size: 24px;
  text-decoration: underline;
  font-weight: 400;
`

export const SCContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 56px;

  @media ${device.laptop} {
    gap: 128px;
    font-size: 24px;
  }
`

export const SCContactItem = styled.a`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  margin: 0;
  padding: 0;
  transition: filter 0.2s, transform 0.2s;
  font-size: 24px;
  letter-spacing: 4px;
  
  &:hover {
    filter: drop-shadow(1px 1px 2px ${({ theme }) => theme.neon});
    transform: scale(1.05);
  }

  @media ${device.laptop} {
    letter-spacing: 12px;
  }
`

export const SCContactItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    width: 0.3em;
  }
`
