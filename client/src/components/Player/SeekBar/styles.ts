import styled from "styled-components";

export const Slider = styled.div`
    width: 15px;
    height: 15px;
    margin-left: -15px;
    border-radius: 50%;
    background-color: #000;
    cursor: pointer;
`

export const Container = styled.div`
    flex: 1;
    display: flex;
    height: 14px;
    background: #39383D;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 2px;

    :hover ${Slider}{
        display: block;
    }
`
interface PropsProgressBar {
    width: number,
}
/* 
    Foi utilizado o método attrs porque estava sendo gerado muitas classes diferentes para
    o objeto ProgressBar, visto que ele estava sendo renderizado a cada 350ms, que é o tempo
    do disparo do evento de mouse onDrag. Passando o atributo style dessa forma, o component não
    é renderizado: apenas o style que muda.
*/
export const ProgressBar = styled.div.attrs<PropsProgressBar>( props => ({
    style: {
        width: `${props.width}%`,
    }
}))<PropsProgressBar>`
    height: 14px;
    background: red;
    border-radius: 2px;
`