import React, { useContext } from "react"
import * as S from'./styles'
import { TrackContext } from "../../../../context/TrackContext";

interface PropsCategories {
    categories: any
}

export default function BlockCategories({categories}: PropsCategories){

    return (
        <>
            {
                categories.map( (category: any, index: number) => (

                    <S.Item 
                        key={index}
                        to={`/playlists`}
                        state={{genreId: category.id}}
                    >
                        <S.Image src={category.icons[0].url} />
                        <S.Title>{category.name}</S.Title>
                    </S.Item>
                ) )
            }
        </>
    )
}