import { Container } from "./styles"

export default function Error({children}: any){
    return (
        <Container>
            <h1>OPS!</h1>  
            <p>{children}</p> 
        </Container>
    )
}