import styled from 'styled-components'

export const Container = styled.div`
    grid-area: player;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #F5F5F5;
    box-shadow: 1px 1px 15px 0px rgb(0 0 0 / 10%);
    backdrop-filter: blur(5px);
    transition: height 0.2s ease-in-out;

    @media only screen and (max-width: 650px){
        flex-direction: column;
    }
`

export const AlbumWrapper = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
    @media only screen and (max-width: 650px){
        margin-top: 10px;
        width: 100%;
    }
`

export const Album = styled.img`
    margin-right: 20px;
    min-width: 50px;
    min-height: 50px;
    background: #333;
    border-radius: 6px;
    display: block;

    @media only screen and (max-width: 650px){
        display: none;
    }
`

export const Title = styled.p`
    font-weight: 500;
    width: 250px;
    color: #39383D;
    font-size: 17px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span{
        font-weight: 600;
    }

    @media only screen and (max-width: 650px){
        width: 100%;
    }
`
export const Controls = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;

    svg:nth-of-type(1),
    svg:nth-of-type(3) {
        cursor: pointer;
        /* color: #39383D; */
        color: ${props => props.theme.secondary};
    }

    svg:nth-of-type(2) {
        color: ${props => props.theme.primary};
        font-size: 35px;
        margin-left: 15px;
        margin-right: 15px;
        z-index: 1;
        position: relative;
        cursor: pointer;
    }

    &:after {
        content: '';
        width: 25px;
        height: 25px;
        position: absolute;
        border-radius: 50%;
        z-index: 0;
        border: 10px solid ${props => props.theme.primary};;
        background: white;
        box-sizing: content-box !important;
    }
`
export const Progress = styled.div.attrs((props: {size: number, duration: number}) => props)`
    width: ${props => (props.size*100)/props.duration}%;
    min-width: 0px;
    max-width: 337px;
    height: 4px;
    background: red;
    border-radius: 2px;
`
export const ActionsControl = styled.div`
    width: 142px;
    cursor: pointer;
    svg{
        margin-right: 15px;
    }

    @media only screen and (max-width: 650px){
        display: none;
    }
`
