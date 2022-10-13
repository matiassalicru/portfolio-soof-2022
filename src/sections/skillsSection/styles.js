import styled from 'styled-components'
import { device } from '../../constants'

export const SCSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 36px 36px 0 36px;


  @media ${device.laptop} {
    margin: 100px;
  }
`

export const SCSkillsTitle = styled.h1`
  display: flex;
  font-size: 24px;
  text-decoration: underline;
  font-weight: 400;
`

export const SCSkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  gap: 10px;

  @media ${device.laptop} {
    gap: 20px;
  }
`

export const SCSkillsListItem = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
`

export const SCSkillsListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    width: 0.3em;
  }
`

export const SCListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptop} {
    gap: 128px;
    flex-direction: row;
  }
`
