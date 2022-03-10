import styled from "styled-components";

interface PropsProgressBar {
    width: number,
    isHover: boolean
}

export const Container = styled.div.attrs<PropsProgressBar>( props => ({
    style: {
        width: `${props.width}%`,
        background: `${props.isHover ? `${props.theme.primary}` : '#39383D'}`,
        marginTop: `${props.isHover ? '-1px' : '0px'}`,
        height: `${props.isHover ? '6px': '4px'}`
    }
}))<PropsProgressBar>`
    width: 0%;
    border-radius: 100px;
    
    transition: all 0.1s;
`