import React from "react";
import { Col, Card, Image, Row, Container } from "react-bootstrap";

class Bienvenida extends React.Component {
    constructor(props) {
        super(props);
        this.url = "https://6214b07389fad53b1f1b76cf.mockapi.io/users/";
        this.state = {
            datosUsuario: '',
            id:props.id,
        }
    }

    componentDidMount() {
        let idLS=localStorage.getItem('id');
        if(idLS!==''||idLS!==null||idLS!==undefined){
            this.setState({ id: idLS });
        }
        this.cargarUsuario();
    }

    async cargarUsuario() {
        const response = await fetch(this.url + this.state.id);
        const responseData = await response.json();
        this.setState({ datosUsuario: responseData })
    }

    render() {
        return (
            <div>
                <Container id="bienvenida">
                    <Row id="bienvenida-row1">
                        <Col>
                            <Image id="bienvenida-img" src={this.state.datosUsuario.avatar}></Image>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>!Bienvenido, {this.state.datosUsuario.nombre}!</Card.Title>
                                    <Card.Subtitle className="mb-3 text-muted">Estamos encantados de tenerte con nosotros,
                                        esperamos que disfrutes del contenido que podemos ofrecerte.</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted">Para comenzar, pulsa en "Vídeos" en la barra de navegación.</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted">La aventura va a comenzar.</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Bienvenida;