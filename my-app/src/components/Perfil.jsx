import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        
        this.nombreIntroducido;
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col lg={8} md={6}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" class="rounded-circle" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                            <Card.Body>
                                <Card.Title>Nombre</Card.Title>
                                <Card.Subtitle className="mb-3 text-muted">email</Card.Subtitle>
                                <Button variant="primary">Cerrar sesión</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={16}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" ref={this.nombreIntroducido} className={this.claseLista} />
                                <Form.Control.Feedback type="invalid">
                                    Introduce un nombre valido
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicApellidos">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Apellidos" ref={this.apellidoIntroducido} className={this.claseLista} />
                                <Form.Control.Feedback type="invalid">
                                    Introduce un apellido valido
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUrlImagen">
                                <Form.Label>Url imagen</Form.Label>
                                <Form.Control type="text" placeholder="url imagen" ref={this.urlImagenIntroducido} className={this.claseLista} />
                                <Form.Control.Feedback type="invalid">
                                    Introduce una url valida
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" ref={this.emailIntroducido} className={this.claseLista} />
                                <Form.Control.Feedback type="invalid">
                                    Introduce un email valido
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
                            <Form.Group className="mb-3" controlId="formBasicPassword2">
                                <Form.Label>Repetir contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    ref={this.contraseñaIntroducida}
                                    className={this.claseLista}
                                />
                                <Form.Control.Feedback type="invalid">
                                    La contraseña no coincide
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