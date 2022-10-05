import styled from 'styled-components'

export const SCSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 100px;
`

export const SCSkillsTitle = styled.h1`
  display: flex;
  font-size: 2rem;
  text-decoration: underline;
  font-weight: 400;
`

export const SCSkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
`

export const SCSkillsListItem = styled.p`
  margin: 0;
  padding: 0;
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
`
