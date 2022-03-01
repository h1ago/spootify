import React from "react"
import { Container } from "./styles"
import MoonLoader from "react-spinners/MoonLoader";

interface PropsLoading{
    size: number
}

export default function Loading({size}: PropsLoading){
    return (
        <Container size={size} >
            <MoonLoader color="#ff7b00" loading={true} size={size}/>
        </Container>
    )
}