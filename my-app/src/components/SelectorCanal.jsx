import React from "react";
import { Button, Container, Form, Row,Col } from "react-bootstrap";

export default class SelectorCanal extends React.Component {
    constructor(props) {
        super(props);
        this.channelname=props.channelname;
        this.onSeach=props.seach;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formChannel">
                                <Form.Label>Canal</Form.Label>
                                <Form.Control type="text" placeholder="Escibe el nombre del canal" ref={this.channelname}/>
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.onSeach}>Buscar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}