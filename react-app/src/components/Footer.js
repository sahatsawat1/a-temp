import React from 'react';
import styled from 'styled-components'

const MainFooter = styled.footer`
  padding-top: 1.5rem;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: whitesmoke;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    padding: 5px;
    background-color: gray;
  }
`

const Footer = () => {
    return (
    <MainFooter>
        <h1>LOGO</h1>
        <p>2020 Artisan Digital Asia</p>
    </MainFooter>
    )
  }
  
  export default Footer