import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import icon from '../resources/images/linuxIcon.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailMessage: '',
            passwordMessage: ''
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" id="login-form">
                            <img className="icon-img" id="login_icon" src={icon} alt="icon" />
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        {this.state.emailMessage}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    <Form.Text className="text-muted">
                                        {this.state.passwordMessage}
                                    </Form.Text>
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg">
                                        Login
                                    </Button>
                                    <Button variant="info" size="lg">
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Desarrollo Interfaces AGL. All Rights Reserved.</h6>
                </Container>
            </>
        );
    }
}

export default Login;