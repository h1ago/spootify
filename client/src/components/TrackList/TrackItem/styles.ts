import styled from 'styled-components'

export const Container = styled.div`
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
    flex-basis: 0;
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
export const AlbumName = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 10px;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ced4da;
` 
export const AddedAt = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 20px;
    font-size: 14px;
    color: #ced4da;

    @media only screen and (max-width: 650px){
        display: none;
    }
` 
export const TimeItem = styled.div`
    text-align: center;
    width: 30px;
` 