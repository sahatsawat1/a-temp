import React from 'react'
import { Nav, NavLogo, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    {/* <h1>LOGO</h1> */}
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/MAP" activeStyle>
                        <a>MAP</a>
                    </NavLink>
                    <NavLink to="/REALTIME" activeStyle>
                        <a>REAL TIME</a>
                        </NavLink>
                    <NavLink to="/GRAPH" activeStyle>
                        <a>GRAPH</a>
                    </NavLink>
                    <NavLink to="/RANKING" activeStyle>
                        <a>RANKING</a>
                    </NavLink>
                </NavMenu>
                {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar
