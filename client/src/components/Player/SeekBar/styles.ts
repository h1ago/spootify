import styled from "styled-components";

export const Slider = styled.div`
    width: 14px;
    height: 14px;
    margin-left: -12px;
    margin-top: -5px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 100;
    display: none;
    transition: all 0.1s;
    cursor: pointer;
`

export const Container = styled.div`
    flex: 1;
    display: flex;
    height: 4px;
    background: #ccc;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 2px;
    transition: all 0.6s;

    :hover ${Slider}{
        display: block;
        transition: all 10.5s;
        z-index: 100;
        box-shadow: -2px 1px 6px 0px rgb(0 0 0 / 93%);
    }
`