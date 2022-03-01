import styled from "styled-components";

export const Container = styled.div.attrs((props: {size: number}) => props)`
    display: flex;
    height: ${props => props.size == 100 ? '100vh' : '100%'};
    align-items: center;
    justify-content: center;
`;