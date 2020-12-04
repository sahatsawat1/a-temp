import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const Body = styled.div`
    width: 100%;
`

function Home() {
    return (
        <Body>
            <NavBar />
            <h1>Test</h1>
        </Body>
    )
}

export default Home