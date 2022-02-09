import React from 'react';
import { Container,Row,Col,Card, Button,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Perfil extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col lg={8} md={6} className="border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                                <span class="font-weight-bold">Edogaru</span>
                                <span class="text-black-50">edogaru@mail.com.my</span>
                                <span> </span>
                        </div>

                    </Col>
                    <Col lg={4} md={16}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de usuario o email</Form.Label>
                                <Form.Control type="email" placeholder="Usuario" ref={this.usuarioIntroducido} className={this.claseLista} />
                                <Form.Control.Feedback type="invalid">
                                    Introduce un usuario o email valido
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    ref={this.contraseñaIntroducida}
                                    className={this.claseLista}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Introduce una contraseña valida
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="button"> Guardar cambios</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default Perfil;