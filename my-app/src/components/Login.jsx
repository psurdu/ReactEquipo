import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import icon from '../resources/images/linuxIcon.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableUsuarios: [],
            emailMessage: '',
            passwordMessage: '',
            id:'',
        }
        this.claseEmail="";
        this.clasePassword="";
    }
    async componentDidMount() {
        const response = await fetch('https://6214b07389fad53b1f1b76cf.mockapi.io/users');
        const responseData = await response.json();
        this.setState({ tableUsuarios: responseData })
    }
    cambio(e) {
        const newdata = { ...this.state };
        newdata[e.target.id] = e.target.value;
        this.setState(newdata);
    }
    loginUsuario(){
        let loginCorrecto=false;
        this.state.tableUsuarios.map((item) => {
            if(item.email===this.state.emailMessage&&item.password===this.state.passwordMessage){
                loginCorrecto=true;
                this.setState({id:item.id});
                this.claseEmail="";
                this.clasePassword="";
                
            }
        });
        if(!loginCorrecto){
            this.setState({id:0});
            this.claseEmail="is-invalid";
            this.clasePassword="is-invalid";
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
                                <Form.Group className="mb-3" controlId="emailMessage">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.cambio(e)} className={this.claseEmail} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="passwordMessage">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => this.cambio(e)} className={this.clasePassword} />
                                    <Form.Control.Feedback type="invalid">
                                        Usuario o Contraseña incorrectos
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg" onClick={this.loginUsuario.bind(this)}>
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