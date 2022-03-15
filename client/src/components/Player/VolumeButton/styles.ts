import styled from "styled-components";

export const Container = styled.div`
    display: inline-block;
    width: 16px;
    svg{
        margin-right: 0px;
    }
`
export const Wrapper = styled.div`
    display: none;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    margin-left: -7px;
    margin-top: -20px;
    width: 30px;
    height: 60px;
    transition: all 0.5s;
    box-shadow: rgb(204 204 204) 1px 1px 10px;
    background-color: #fff;
`
export const ProgressBar = styled.input`
    width: 50px;
    transform: rotate(-90deg);
    background-color: rgb(204, 204, 204);
`