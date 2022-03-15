import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
    grid-area: sidebar;
    background: ${props => props.theme.primary};
    transition: all 0.2s ease-in-out;
`

export const BoxProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20vh;
    align-items: center;
    justify-content: center;
`

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 100%;

    @media only screen and (max-width: 650px) {
        width: 60px;
        height: 60px;
    }
`

export const Name = styled.p`
    margin-top: 10px;
    font-size: 1.3em;
    color: #fff;
    font-weight: 500;

    @media only screen and (max-width: 650px) {
        display: none;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
`
export const Item = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75px;
    font-size: 1.3em;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    svg{
        margin-right: 10px;
    }

    :hover{
        background: linear-gradient(to right, #fff, transparent 95%);
        opacity: 0.7;
        
    }

    &[class*="active"]{
        background: linear-gradient(to right, #fff, transparent 95%);
        opacity: 0.9;
    }

    span{
        @media only screen and (max-width: 650px) {
            display: none;
        }
    }


`
