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
export const WrapperBar = styled.div`
    display: flex;
    color: gray;
    padding: 10px;
    min-width: 70px;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 20px;
    border: 1px solid ${props => props.theme.primary};

    svg{
        margin-left: 10px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-left: 10px;
    border: none;
    outline-width: 0;
`

