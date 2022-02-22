import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import { createGlobalStyle } from 'styled-components'
import resetCss from 'styled-reset'
import App from './app'



const GlobalStyle = createGlobalStyle`
    ${resetCss}
  `

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    
    <BrowserRouter>
    
      <App/>

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
