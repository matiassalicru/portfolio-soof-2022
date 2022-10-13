import styled from 'styled-components'
import { device } from '../../constants'

export const SCHomeContainer = styled.div`
  display: flex;
  place-content: center;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const SCTopLeftRect = styled.div`
  width: 4px;
  height: 220px;
  background-color: ${({ theme }) => theme.color};
`

export const SCTopLeftTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SCTopLeftTitle = styled.p`
  margin: 0;
  padding: 2px 5px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  width: fit-content;
  background-color: ${({ theme }) => theme.backgroundColor};
`

export const SCArrowContainer = styled.div`
  position: absolute;
  bottom: 30px;
  font-size: 60px;
  transition: font-size 0.2s;
  filter: drop-shadow(0px 0px 15px ${({ theme }) => theme.neon});

  &:hover {
    font-size: 65px;
  }
`

export const SCProfilePic = styled.div`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  background-image: url('https://i.ibb.co/s2rKbmJ/IMG-1737.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 1px 5px 5px ${({ theme }) => theme.neon};
`

export const SCHomeTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  margin: 10px 0;
`

export const SCHomeSubtitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  margin: 5px;
`

export const SCTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 24px;
  @media ${device.laptop} {
    text-align: start;
  }
`

export const SCTopLeftContent = styled.div`
  position: fixed;
  display: flex;
  gap: 10px;
  left: 25px;
  top: 30px;
`
