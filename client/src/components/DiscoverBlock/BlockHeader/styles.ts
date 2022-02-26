import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
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
export const ArrowLeft = styled.a`
    margin-right: 20px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
            transform: scale(1.15);
        }
`
export const ArrowRight = styled.a`
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
            transform: scale(1.15);
        }
`