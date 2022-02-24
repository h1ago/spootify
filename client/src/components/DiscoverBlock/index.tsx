import React from "react"
import * as S from'./styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface PropsDiscoverBlock {
    id: string,
    title: String,
    albums?: any,
    playlists?: any,
    categories?: any
}

export default function DiscoverBlock({id, title, albums, playlists, categories}: PropsDiscoverBlock){

    function scrollWrapper(id:string, isLeft: Boolean){
        const scrollableContainer: HTMLElement | null = document.getElementById(id)
        if(scrollableContainer == null) return

        const amount = isLeft ? -100 : 100
        scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount
    }

    return (
        <S.Container>
            <S.Header>
                <S.Title>{title}</S.Title>
                <S.Row/>
                <S.ArrowLeft onClick={ () =>  scrollWrapper(id, true)} > <FontAwesomeIcon icon={faChevronLeft}/> </S.ArrowLeft>
                <S.ArrowRight onClick={ () =>  scrollWrapper(id, false)} > <FontAwesomeIcon icon={faChevronRight}/> </S.ArrowRight>
            </S.Header>

            <S.Wrapper id={id}>
                {
                    albums?.map( (album: any, index: number) => (

                        <S.Item key={index}>
                            <S.Album src={album.images[2].url} />
                            <S.TitleAlbum>{album.name}</S.TitleAlbum>
                        </S.Item>
                    ) )
                }

                {
                    playlists?.map( (playlist: any, index: number) => (

                        <S.Item key={index}>
                            <S.Album src={playlist.images[0].url} />
                            <S.TitleAlbum>{playlist.name}</S.TitleAlbum>
                        </S.Item>
                    ) )
                }

{
                    categories?.map( (category: any, index: number) => (

                        <S.Item key={index}>
                            <S.Album src={category.icons[0].url} />
                            <S.TitleAlbum>{category.name}</S.TitleAlbum>
                        </S.Item>
                    ) )
                }
                
                
            </S.Wrapper>
        </S.Container>
    )
}