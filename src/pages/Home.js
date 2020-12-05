import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`

const Home = () => {
    return (
        <Box>
            <h1>Home</h1>
        </Box>
    )
}

export default Home