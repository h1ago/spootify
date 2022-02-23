import styled from 'styled-components'

export const Container = styled.div`
    height: 98vh;
    margin: 10px;
    overflow: hidden;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 225px calc(100% - 225px);
    grid-template-rows: 200px auto 100px;
    grid-template-areas:    'sidebar header'
                            'sidebar main'
                            'sidebar player'
    
`