import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import { createGlobalStyle } from 'styled-components'
import resetCss from 'styled-reset'

import Default from './layouts/Default'
import Routes from './routes'

const GlobalStyle = createGlobalStyle`
    ${resetCss}
  `

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    
    <BrowserRouter>
    
      <Default>
        <Routes/>
      </Default>

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
