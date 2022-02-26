import * as S from'./styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface PropsBlockHeader extends React.HTMLAttributes<HTMLDivElement>{
    id: string,
    title: string,
}

export default function BlockHeader({id, title}: PropsBlockHeader){

    function scrollWrapper(id:string, isLeft: Boolean){
        const scrollableContainer: HTMLElement | null = document.getElementById(id)
        if(scrollableContainer == null) return

        const amount = isLeft ? -100 : 100
        scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount
    }

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Row/>
            <S.ArrowLeft onClick={ () =>  scrollWrapper(id, true)} > <FontAwesomeIcon icon={faChevronLeft}/> </S.ArrowLeft>
            <S.ArrowRight onClick={ () =>  scrollWrapper(id, false)} > <FontAwesomeIcon icon={faChevronRight}/> </S.ArrowRight>
        </S.Container>
    )
}