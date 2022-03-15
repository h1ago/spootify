import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    margin-bottom: 10px;
`
export const Title = styled.h2`
    color: #A5A5B1;
    text-transform: uppercase;
    font-weight: 600;
`
export const Row = styled.span`
    height: 2px;
    border-radius: 50px;
    flex-grow: 1;
    background-color: #eee;
    margin-left: 20px;
    margin-right: 20px;
`
export const Button = styled.a`
    margin-right: 20px;
    font-size: 24px;
    color: ${props => props.theme.primary};
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
            transform: scale(1.15);
        }
`