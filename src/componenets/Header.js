import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends Component {
    render() {
        const { onMenuSelect } = this.props
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => {
                                onMenuSelect('home')
                            }} href="#home">Home</Nav.Link>
                            <Nav.Link href="#pricing" onClick={() => {
                                onMenuSelect('usage')
                            }}>Usage</Nav.Link>
                            <Nav.Link onClick={() => {
                                onMenuSelect('settings')
                            }} href="#features">Settings</Nav.Link>
                            <Nav.Link href="#pricing" onClick={() => {
                                onMenuSelect('Logout')
                            }}>Logout</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}
