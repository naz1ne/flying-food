import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background: ${({ theme }) => theme.colors['background']};
    font-family: "Helvetica", sans-serif;
    height: 100vh;
  }

  .App{
    padding: 2rem 1rem;
  }
`
