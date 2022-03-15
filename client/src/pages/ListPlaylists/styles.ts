import styled from 'styled-components'

export const Container = styled.div`
    grid-area: main;
    padding: 30px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    }
    ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
    }
    ::-webkit-scrollbar-corner {
    background: transparent;
    }
`

export const TitlePage = styled.h1`
    margin-top: -20px;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: #A5A5B1;
` 