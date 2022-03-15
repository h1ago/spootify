import styled from "styled-components";

export const Container = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1;
    display: flex;
    height: 5px;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 2px;
    transition: all 0.6s;

    @media only screen and (max-width: 650px){
        position: absolute;
        width: 100%;
        top: 0;
        margin-left: 0px;
        margin-right: 0px;
    }

`
interface PropsProgressBar {
    progress: number
}


export const ProgressBar = styled.input.attrs<PropsProgressBar>( props => ({
    style: {
        background: `linear-gradient(to right,  
            #39383D 0%,  
            #39383D ${props.progress}%,
            #ccc ${props.progress}%, 
            #ccc 100%)`
    }
}))<PropsProgressBar>`
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity .2s;
    

    :hover {
        opacity: 1;
    }
    ::-webkit-slider-runnable-track{
        width: 100%;
    }

    ::-webkit-slider-thumb{
        -webkit-appearance: none;
        display: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${props => props.theme.primary};
    }

    :hover::-webkit-slider-thumb{
        display: block;
    }

`