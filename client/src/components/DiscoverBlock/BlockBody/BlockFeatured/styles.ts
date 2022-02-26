import styled from 'styled-components'

export const PlayButton = styled.div`
    position: absolute;
    display: none;
    top: 90px;
    right: 10px;
    transition: all 0.5s;

    svg{
        height: 40px;
        color: ${props => props.theme.primary}
    }

    :hover{
        transform: scale(1.2);
    }
`
export const Item = styled.div`
    display: inline-block;
    position: relative;
    width: 190px;
    height: 220px;
    margin-top: 20px;
    margin-right: 20px;
    transition: all 0.5s;
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