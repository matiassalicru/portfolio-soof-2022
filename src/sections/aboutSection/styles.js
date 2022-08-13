import styled from 'styled-components'

export const SCAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 0 100px;
`

export const SCAboutContent = styled.div`
  display: flex;
  place-content: center;
  gap: 20px;
`

export const SCAboutText = styled.div`
  display: flex;
  place-content: center;
  font-size: 18px;
  margin-top: 30px;
`

export const SCAboutProfile = styled.div`
  border-radius: 5px;
  min-width: 300px;
  min-height: 300px;
  background-image: url('https://i.ibb.co/2hcTbs7/IMG-4180.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 1px ${({ theme }) => theme.color};
`

export const SCAboutTitle = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  text-decoration: underline;
`
