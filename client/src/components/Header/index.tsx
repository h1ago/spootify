import * as S from'./styles'

import { FaSpotify } from 'react-icons/fa';

export default function Header(){
    return (
        <S.Container>
            <FaSpotify/>
            <S.Title>
                Spootify
            </S.Title>
        </S.Container>
    )
}