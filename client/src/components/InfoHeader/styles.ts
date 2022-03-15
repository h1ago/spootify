import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 270px;
    padding: 20px;
    align-items: flex-end;
    background-color: #495057;
`
export const Image = styled.img`
    width: 250px;
    height: 200px;
    @media only screen and (max-width: 650px){
        display: none;
    }
` 
export const Wrapper = styled.div`
    display: flex;
    color: #fff;
    padding-left: 20px;
    width: 100%;
    flex-direction: column;
` 
export const Type = styled.h3`
    font-size: 16px;
    font-weight: bold;
    display: block;
    text-transform: uppercase;
` 
export const Title = styled.p`
    display: flex;
    font-size: 48px;
    text-shadow: 0 0 3px #FFFFFF;
    font-weight: bold;
    height: 130px;
    align-items: center;
    overflow: hidden;
` 
export const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #bfc0c0;
` 
export const SubTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
`
export const Name = styled.span`
    
` 
export const NumberGeneric = styled.span`
    
` 
export const NumberSongs = styled.span`
    
` 
export const TotalTime = styled.span`
    
`