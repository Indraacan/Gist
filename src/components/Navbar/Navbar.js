import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbarr = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/" className="ml-3">THE<span className="text-primary">SMART</span>LOCAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Link to="/" className="mr-4"><i className="fa fa-home fa-1x" aria-hidden="true"><span className="ml-2">Home</span></i></Link>
                    <Link to="/favourite"><i className="fa fa-heart fa-1x" aria-hidden="true"><span className="ml-2">Favourite</span></i></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbarr