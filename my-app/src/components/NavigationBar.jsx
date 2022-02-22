import React from "react";
import uuid from 'react-uuid';
import { Navbar, Container, Nav } from "react-bootstrap";
import { MenuElements } from "../data/MenuElements";
import { Link } from "react-router-dom";
import icon from '../resources/images/linuxIcon.png';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                    <img className="icon-img" id="nav_icon" src={icon} alt="icon" />
                        <Nav className="me-auto">
                            {MenuElements.map((item) => {
                                return (
                                    <Nav.Link key={uuid()} as={Link} to={item.path}>{item.title}</Nav.Link>
                                )
                            })}
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavigationBar;