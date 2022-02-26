import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import resetCss from 'styled-reset'
import App from './app'



const GlobalStyle = createGlobalStyle`
    ${resetCss}
  `

const theme = {
  primary: '#ff7b00',
  secondary: '#39383D',
  aux: '#171A21',
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
    
          
  </React.StrictMode>,
  document.getElementById('root')
);
