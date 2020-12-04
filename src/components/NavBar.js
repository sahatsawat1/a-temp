import React from 'react';
import styled from 'styled-components'

const Navbar = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0 0 0 30px;
    }
`

const Button = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button {
      background-color: unset;
      border: unset;
      text-decoration: none;
      :hover {
        cursor: pointer;
      }
    }
`

function NavBar() {
  return (
      <Navbar>
        <h1>LOGO</h1>
        <Button>
          <button>MAP</button>
          <button>REAL TIME</button>
          <button>GRAPH</button>
          <button>RANKING</button>
        </Button>
      </Navbar>
  )
}

export default NavBar