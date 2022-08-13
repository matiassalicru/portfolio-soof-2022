import styled from 'styled-components'

export const SCContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 100px;
`

export const SCContactTitle = styled.h1`
  display: flex;
  font-size: 2rem;
  text-decoration: underline;
  font-weight: 400;
`

export const SCContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  padding: 0;
`

export const SCContactItem = styled.a`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  margin: 0;
  padding: 0;
  transition: filter 0.2s, transform 0.2s;

  &:hover {
    filter: drop-shadow(1px 1px 2px ${({ theme }) => theme.color});
    transform: scale(1.05);
  }
`

export const SCContactItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
`
