import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {Nav, Navbar} from 'react-bootstrap';


class Navigation extends Component{
    render(){
        return (
            <div className="container">
            <Navbar collapseOnSelect expand="lg" sticky="top" variant="tabs" defaultActiveKey="/home">
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
                <Navbar.Brand href="#home" className="fa fa-globe"><img width="60" height="60" className="d-inline-block align-top" href="#home" src={process.env.PUBLIC_URL+"CE_Logo.png"} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/teams">Team</Nav.Link>
                        <Nav.Link href="/Events">Events</Nav.Link>
                        <Nav.Link href="/Join Us">Join Us</Nav.Link>
                        <Nav.Link href="/Contact Us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

export default Navigation