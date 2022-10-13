import styled from 'styled-components'

export const SCExpItemContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 80px 0;
`

export const SCExpItemText = styled.p`
  font-size: 18px;
  font-weight: 200;
`

export const SCExpItemScreenshot = styled.div`
  background-image: url(${({ imageURL }) => imageURL});
  border-radius: 5px;
  min-width: 350px;
  width: fit-content;
  height: fit-content;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 1px ${({ theme }) => theme.color};
`
