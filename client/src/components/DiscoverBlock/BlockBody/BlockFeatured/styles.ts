import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PlayButton = styled.div`
    position: absolute;
    display: none;
    top: 90px;
    right: 10px;
    border-radius: 100%;
    background: radial-gradient(circle, rgba(255,255,255,1) 31%, rgba(255,123,0,1) 51%);
    transition: all 0.5s;

    svg{
        height: 40px;
        transition: all 0.5s;
        color: ${props => props.theme.primary}
    }

    :hover{
        transform: scale(1.2);
    }
`
export const Item = styled(Link)`
    display: inline-block;
    position: relative;
    width: 190px;
    height: 220px;
    margin-top: 20px;
    margin-right: 20px;
    transition: all 0.5s;
    text-decoration: none;
    cursor: pointer;

    :hover{
        opacity:0.9;
        transform: scale(1.02);
    }

    :hover ${PlayButton}{
        display: block;
    }
`
export const Image = styled.img`
    width: 190px;
    height: 150px;
    border-radius: 5px;
`
export const Title = styled.p`
    max-height: 30px;
    text-align: center;
    margin-top: 10px;
    font-size: 0.9em;
    font-weight: 600;
    overflow: hidden;
    color: ${props => props.theme.primary};
`