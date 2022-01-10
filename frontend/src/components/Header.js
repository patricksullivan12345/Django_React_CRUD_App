import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {

    return ( 
    
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">ToDo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {<Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#create">Create</Nav.Link>
                    </Nav>}
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Header