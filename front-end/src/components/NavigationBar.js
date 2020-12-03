import React from 'react'
import history from '../history'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';


const NavigationBar = () => {

    const handleLogout = () => {
        localStorage.clear()
        history.push('/')
    }
   
    return(
    <div>
        <Navbar bg="light" expand="lg">
        {/* <img alt="" src="/logo.svg" width="30"height="30" className="d-inline-block align-top"/>{' '} */}
            <Navbar.Brand href="/">techealth</Navbar.Brand>
            <Navbar.Text>your electronic health records, engineered by computer science</Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            <Navbar.Text>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/medical_provider/profile">Medical Provider Profile</Nav.Link>
                <Nav.Link href="/patient/index">Patient Index</Nav.Link>
                <NavDropdown title="Create Record" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/encounter/new">Encounter</NavDropdown.Item>
                    <NavDropdown.Item href="#">Diagnostic Test</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Patient</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Text>
        </Navbar>
    </div>
    )
}

export default NavigationBar;