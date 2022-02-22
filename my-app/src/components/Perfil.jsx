import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Axios from 'axios';

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailMessage: '',
            passwordMessage: '',
            repPasswordMessage: '',
            name: '',
            surname: '',
            id: '',
            datosUsuario: '',
            avatar:'',
            done:''
        }
        this.url="https://6214b07389fad53b1f1b76cf.mockapi.io/users/";
        this.claseEmail="";
        this.clasePassword="";
        this.claseRepPassword="";
        this.claseNameU="";
        this.claseSurname="";
        this.claseAvatar=""
    }
    async componentDidMount() {
        this.setState({ id: localStorage.getItem('id') });
        this.cargarUsuario();
    }
    async cargarUsuario(){
        const response = await fetch(this.url+localStorage.getItem('id'));
        const responseData = await response.json();
        this.setState({ datosUsuario: responseData })
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
    onClickCerrarSesion() {
        localStorage.removeItem("id"); 
    }
    actualizarUsuario() {
        let valido=true;
        if(this.validar_email(this.state.emailMessage)){
            this.claseEmail="";
        }else{
            this.claseEmail="is-invalid";
            valido=false;
        }
        if(this.state.passwordMessage===''||this.state.passwordMessage===null||this.state.passwordMessage===undefined||this.state.passwordMessage!==this.state.repPasswordMessage){
            this.clasePassword="is-invalid";
            this.claseRepPassword="is-invalid";
            valido=false;
        }else{
            this.clasePassword="";
            this.claseRepPassword="";
        }
        if(this.state.name===''||this.state.name===null||this.state.name===undefined){
            this.claseNameU="is-invalid";
            valido=false;
        }else{
            this.claseNameU="";
        }
        if(this.state.avatar===''||this.state.avatar===null||this.state.avatar===undefined){
            this.claseAvatar="is-invalid";
            valido=false;
        }else{
            this.claseAvatar="";
        }

        if(this.state.surname===''||this.state.surname===null||this.state.surname===undefined){
            this.claseSurname="is-invalid";
            valido=false;
        }else{
            this.claseSurname="";
        }
        if(valido){
            Axios.put(this.url+this.state.id, {
                nombre: this.state.name,
                apellidos: this.state.surname,
                email: this.state.emailMessage,
                password: this.state.passwordMessage,
                avatar: this.state.avatar,
            });
            this.cargarUsuario();
        }else{
            this.setState({done:false});
        }

    }
    render() {
        return (
            <Container id="perfil">
                <Row>
                    <Col lg={8} md={6}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" className="rounded-circle" src={this.state.datosUsuario.avatar} />
                            <Card.Body>
                                <Card.Title>{this.state.datosUsuario.nombre}</Card.Title>
                                <Card.Subtitle className="mb-3 text-muted">{this.state.datosUsuario.email}</Card.Subtitle>
                                <Button variant="primary" onClick={this.onClickCerrarSesion.bind(this)}>Cerrar sesión</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={16}>
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
                            <Form.Group className="mb-3" controlId="avatar">
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control type="text" placeholder="Enter your avatar" onChange={(e) => this.cambio(e)} className={this.claseAvatar} />
                                <Form.Control.Feedback type="invalid">
                                    Introduce un avatar
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.actualizarUsuario.bind(this)}> Guardar cambios</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default Perfil;