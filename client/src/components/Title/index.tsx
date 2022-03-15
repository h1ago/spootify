import * as S from'./styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

interface PropsTitle{
    withButton: boolean,
    children: string
}

export default function Title({children, withButton}: PropsTitle){

    return (
        <S.Container>
            <S.Title>{children}</S.Title>
            <S.Row/>
            {
                withButton && <S.Button> <FontAwesomeIcon icon={faPlusCircle}/> </S.Button>
            }
        </S.Container>
    )
}