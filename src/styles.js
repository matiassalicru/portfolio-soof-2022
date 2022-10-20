import styled from 'styled-components'

export const SCThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  min-width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  transition: all 0.5s;

  &:active {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.color};
  }
`

export const SCLang = styled.p`
  margin: 0 5px;
  text-transform: uppercase;
`

export const SCFixedButtons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  top: 10px;
  right: 20px;
  width: fit-content;
  gap: 15px;
  z-index: 10;
`

export const SCIcon = styled.img`
  width: 30px;
`