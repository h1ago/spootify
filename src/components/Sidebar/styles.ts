import styled from 'styled-components'

export const Container = styled.div`
    grid-area: sidebar;
    /* min-width: 225px;
    width: 225px; */
    background: #087F8C;
    /* height: 100%; */
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    /* padding-top: 30px;
    padding-bottom: 30px; */
    transition: all 0.2s ease-in-out;
    will-change: width, min-width;
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
    border-radius: 100%;
`

export const Name = styled.p`
    margin-top: 10px;
    font-size: 1.3em;
    color: #fff;
    font-weight: 500;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75px;
    font-size: 1.3em;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    svg{
        margin-right: 10px;
    }

    :hover{
        background: linear-gradient(to right, #fff, transparent 95%);
        opacity: 0.7;
        
    }

`
