import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    h1{
        color: ${props => props.theme.primary};
        font-size: 1.87rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    p{
        text-align: center;
        font-weight: 600;
    }
`;