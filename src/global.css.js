import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
  }
`
