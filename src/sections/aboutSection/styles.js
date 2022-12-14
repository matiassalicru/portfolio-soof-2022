import styled from 'styled-components'
import { device } from '../../constants'

export const SCAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 0 48px;

  @media ${device.laptop} {
    margin: 0 100px;
  }
`

export const SCAboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    gap: 128px;
    flex-direction: row;
    align-items: center;
  }
`

export const SCAboutText = styled.p`
  display: flex;
  place-content: center;
  font-size: 18px;
  margin-top: 30px;
  max-width: 100%;

  @media ${device.laptop} {
    max-width: 50%;
  }
`

export const SCAboutProfile = styled.div`
  border-radius: 5px;
  min-width: 300px;
  min-height: 300px;
  /* background-image: url('https://i.ibb.co/2hcTbs7/IMG-4180.jpg'); */
  background-image: url('https://i.ibb.co/b2sDrG3/IMG-1761.jpg');

  /* background-image: url('https://i.ibb.co/zGH5pZT/Whats-App-Image-2022-10-24-at-14-59-58.jpg'); */
  /* background-image: url('https://i.ibb.co/Pjz6Gnd/Whats-App-Image-2022-10-24-at-14-59-58-1.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* transform: scaleX(-1); */
  filter: FlipH;

  box-shadow: 0px 0px 1px ${({ theme }) => theme.color};
  max-width: 500px;

  @media ${device.laptop} {
    max-width: auto;
  }
`

export const SCAboutTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  text-decoration: underline;
`
