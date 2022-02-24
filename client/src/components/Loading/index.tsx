import React from "react"
import { Container } from "./styles"
import MoonLoader from "react-spinners/MoonLoader";

export default function Loading(){
    return (
        <Container>
            <MoonLoader color="#ff7b00" loading={true} size={100}/>
        </Container>
    )
}