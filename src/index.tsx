import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import resetCss from 'styled-reset'

import Default from './layouts/Default'

const GlobalStyle = createGlobalStyle`
    ${resetCss}
  `

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    
    <Default/>

  </React.StrictMode>,
  document.getElementById('root')
);
