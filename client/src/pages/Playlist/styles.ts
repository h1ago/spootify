import styled from 'styled-components'

export const Container = styled.div`
    grid-area: main;
    padding-left: 15px;

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
