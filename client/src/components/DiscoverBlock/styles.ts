import styled from 'styled-components'

export const Container = styled.div`
    height: 200px;
    width: 100%;
    margin-bottom: 70px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
`
export const Title = styled.h2`
    color: #A5A5B1;
    text-transform: uppercase;
    font-weight: 600;
`
export const Row = styled.span`
    height: 2px;
    border-radius: 50px;
    flex-grow: 1;
    background-color: #eee;
    margin-left: 20px;
    margin-right: 20px;
`
export const ArrowLeft = styled.a`
    margin-right: 20px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
            transform: scale(1.15);
        }
`
export const ArrowRight = styled.a`
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
            transform: scale(1.15);
        }
`
export const Wrapper = styled.div`
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }
`
export const Item = styled.div`
    display: inline-block;
    width: 110px;
    height: 150px;
    margin-top: 20px;
    margin-right: 20px;
`
export const Album = styled.img`
    width: 110px;
    height: 100px;
    border-radius: 5px;
`
export const TitleAlbum = styled.p`
    height: 43px;
    text-align: center;
    font-size: 0.9em;
    font-weight: 600;
    /* white-space: nowrap */;
    overflow: hidden;
    text-overflow: ellipsis; 
    color: #333333;
    
    
`