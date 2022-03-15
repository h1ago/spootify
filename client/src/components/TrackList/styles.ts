import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Container = styled.div`
    background-color: #343a40;
    display: flex;
    flex-direction: column;
`

export const ButtonPlay = styled(FontAwesomeIcon)`
    align-self: flex-start;
    font-size: 45px;
    margin-left: 20px;
    margin-top: 5px;
    color: #1DB954;
    cursor: pointer;

    :hover{
        opacity: 0.7;
    }
`

export const WrapperHeader = styled.div`
    display: flex;
    /* padding: 0 20px; */
    align-items: center;
    margin-top: 10px;
    padding: 10px 10px;
    height: 30px;
    text-transform: uppercase;
    color: #fff;
    border-bottom: 1px solid #fff;
` 
export const IndexItemHeader = styled.div`
    text-align: center;
    width: 30px;
` 
export const TitleItemHeader = styled.div`
    flex-grow: 1;
    font-size: 16px;
    padding: 0 20px;
` 
export const AlbumItemHeader = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    font-size: 16px;
    padding: 0 20px;
` 
export const AddedAtItemHeader = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    font-size: 16px;
    padding: 0 20px;

    @media only screen and (max-width: 650px){
        display: none;
    }
` 
export const TimeItemHeader = styled.div`
    text-align: center;
    width: 30px;
` 
export const ItemTracklist = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 10px;
    height: 40px;
    cursor: pointer;

    :hover{
        background-color: rgba(255,255,255,0.5);
        border-radius: 2px;
    }
` 
export const IndexItem = styled.div`
    text-align: center;
    width: 30px;
    font-size: 20px;
    font-weight: 600;
` 
export const TitleItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 20px;
` 
export const TrackName = styled.div`
    font-size: 16px;
    font-weight: 600;
` 
export const ArtistName = styled.div`
    font-size: 14px;
    color: #ced4da;
` 
export const TimeItem = styled.div`
    text-align: center;
    width: 30px;
` 