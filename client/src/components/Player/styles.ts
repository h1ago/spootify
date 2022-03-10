import styled from 'styled-components'

export const Container = styled.div`
    grid-area: player;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    /* background: #FBFBFB;   */
    background-color: #F5F5F5;
    box-shadow: 1px 1px 15px 0px rgb(0 0 0 / 10%);
    backdrop-filter: blur(5px);
    transition: height 0.2s ease-in-out;
`

export const AlbumWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Album = styled.img`
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background: #333;
    border-radius: 6px;
    display: block;
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
export const Seekbar = styled.div`
    flex: 1;
    height: 4px;
    background: #39383D;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 2px;
`

export const Progress = styled.div.attrs((props: {size: number, duration: number}) => props)`
    width: ${props => {
        console.log('Size: '+ props.size);
        console.log('Duration: '+ props.duration);
        console.log('Size * 100= '+ props.size*100);
        console.log('Size * 100 / Duration= '+ (props.size*100)/props.duration); 
        return (props.size*100)/props.duration
        }}%;
    min-width: 0px;
    max-width: 337px;
    height: 4px;
    background: red;
    border-radius: 2px;
`
export const ActionsControl = styled.div`
    width: 142px;
    color: #39383D;
    cursor: pointer;
    svg{
        margin-right: 15px;
    }
`
