import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>LOGO</h1>
                    </NavLink>
                    <Bars />
                    <NavMenu>
                        <NavLink to="/MAP" activeStyle>
                            MAP
                        </NavLink>
                        <NavLink to="/REALTIME" activeStyle>
                            REAL TIME
                        </NavLink>
                        <NavLink to="/GRAPH" activeStyle>
                            GRAPH
                        </NavLink>
                        <NavLink to="/RANKING" activeStyle>
                            RANKING
                        </NavLink>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
            </Nav>
        </div>
    )
}

export default Navbar
