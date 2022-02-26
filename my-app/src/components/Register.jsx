import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import icon from '../resources/images/linuxIcon.png';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Bienvenida from './Bienvenida';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailMessage: '',
            passwordMessage: '',
            repPasswordMessage: '',
            name: '',
            surname: '',
            id: '',
            done: '',
        }
        this.url = "https://6214b07389fad53b1f1b76cf.mockapi.io/users";
        this.claseEmail = "";
        this.clasePassword = "";
        this.claseRepPassword = "";
        this.claseNameU = "";
        this.claseSurname = "";

    }
    cambio(e) {
        const newdata = { ...this.state };
        newdata[e.target.id] = e.target.value;
        this.setState(newdata);
    }
    validar_email(email) {
        var regex = new RegExp('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$');
        return regex.test(email) ? true : false;
    }
    registrarUsuario() {
        let valido = true;
        if (this.validar_email(this.state.emailMessage)) {
            this.claseEmail = "";
        } else {
            this.claseEmail = "is-invalid";
            valido = false;
        }
        if (this.state.passwordMessage === '' || this.state.passwordMessage === null || this.state.passwordMessage === undefined || this.state.passwordMessage !== this.state.repPasswordMessage) {
            this.clasePassword = "is-invalid";
            this.claseRepPassword = "is-invalid";
            valido = false;
        } else {
            this.clasePassword = "";
            this.claseRepPassword = "";
        }
        if (this.state.name === '' || this.state.name === null || this.state.name === undefined) {
            this.claseNameU = "is-invalid";
            valido = false;
        } else {
            this.claseNameU = "";
        }
        if (this.state.surname === '' || this.state.surname === null || this.state.surname === undefined) {
            this.claseSurname = "is-invalid";
            valido = false;
        } else {
            this.claseSurname = "";
        }
        if (valido) {
            Axios.post(this.url, {
                nombre: this.state.name,
                apellidos: this.state.surname,
                email: this.state.emailMessage,
                password: this.state.passwordMessage
            })
                .then(res => this.setState({ id: res.data.id }));
        } else {
            this.setState({ done: false });
        }

    }

    render() {
        if (this.state.id === 0 || this.state.id === '' || this.state.id === null || this.state.id === undefined||this.state.id==='null') {
            return (
                <Container>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" id="login-form">
                            <img className="icon-img" id="login_icon" src={icon} alt="icon" />
                            <Form>
                                <Form.Group className="mb-3" controlId="emailMessage">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.cambio(e)} className={this.claseEmail} />
                                    <Form.Control.Feedback type="invalid">
                                        Email invalido
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="passwordMessage">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => this.cambio(e)} className={this.clasePassword} />
                                    <Form.Control.Feedback type="invalid">
                                        Introduce una contraseña
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="repPasswordMessage" >
                                    <Form.Label>Repeat password</Form.Label>
                                    <Form.Control type="password" placeholder="Repeat password" onChange={(e) => this.cambio(e)} className={this.claseRepPassword} />
                                    <Form.Control.Feedback type="invalid">
                                        Introduce una contraseña
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => this.cambio(e)} className={this.claseNameU} />
                                    <Form.Control.Feedback type="invalid">
                                        Introduce un nombre
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your surname" onChange={(e) => this.cambio(e)} className={this.claseSurname} />
                                    <Form.Control.Feedback type="invalid">
                                        Introduce un apellido
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="info" size="lg" onClick={this.registrarUsuario.bind(this)}>
                                        Register
                                    </Button>
                                    <Button variant="primary" size="lg" as={Link} to='/'>
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Desarrollo Interfaces AGL. All Rights Reserved.</h6>
                </Container>
            );
        } else {
            return (
                <Bienvenida id={this.state.id}/>
            );
        }
    }
    componentWillUnmount() {
        localStorage.setItem('id', this.state.id);
    }
}

export default Register;