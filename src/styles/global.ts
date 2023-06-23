import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-image: linear-gradient(132deg, #ED1D24 0%, #A51116 31.25%, #73090D 63.54%, #3E0103 100%);
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  body, input, button, textarea {
    font-family: 'Poppins', serif;
    font-size: 16px;
    outline: none;
  }
`
