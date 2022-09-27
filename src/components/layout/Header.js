import React from 'react';
import {Row, Col, Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Row as="header">
            <Col xs="12" className="p-0">
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#">Apartment</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="apartment-book">Apartment</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    );
}
