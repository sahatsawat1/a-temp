import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
`

const Home = () => {
    return (
        <>
        <Box>
            <h1>Home</h1>
        </Box>
        </>
    )
}

export default Home