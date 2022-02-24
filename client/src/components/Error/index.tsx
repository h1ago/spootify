import React from "react"
import { Container } from "./styles"

export default function Error(){
    return (
        <Container>
            <h1>OPS!</h1>  
            <p> Ocorreu um erro inesperado. Tente novamente.</p> 
        </Container>
    )
}