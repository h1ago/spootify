import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg{
        width: 48px;
        height: 48px;
        color: ${props => props.theme.primary}
    }

`
export const Title = styled.h1`
    margin-left: 5px;
    margin-right: 80px;
    font-size: 3em;
    color: ${props => props.theme.primary};
    font-weight: 600;
`
