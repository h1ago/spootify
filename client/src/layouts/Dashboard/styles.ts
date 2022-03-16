import styled from 'styled-components'

export const Container = styled.div`
    height: 97vh;
    margin: 10px;
    overflow: hidden;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 225px calc(100% - 225px);
    grid-template-rows: 130px auto 100px;
    grid-template-areas:    'sidebar header'
                            'sidebar main'
                            'sidebar player';
    
    @media only screen and (max-width: 650px) {
        grid-template-columns: 75px calc(100% - 75px);
    }
`