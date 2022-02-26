import React from "react";
import SelectorCanal from "./SelectorCanal";
import { API_KEY, API_URL_CHANNEL_DETAILS, API_URL_CHANNEL_VIDEOS, API_URL_SEARCH_CHANNEL } from "../data/Constants";
import { Container, Row, Col, Table, Card, CardGroup, Spinner } from "react-bootstrap";

export default class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.channelname = React.createRef();

        this.channelUploadedVideosId = React.createRef();
        this.state = {
            channelsTableData: [],
            selectedChannelData: [],
            selectedChannelVideosData: [],
        }

        this.getSelectedChannelDetails = this.getSelectedChannelDetails.bind(this);
        this.searchChannels = this.searchChannels.bind(this);
        this.selectedChannelVideos = this.selectedChannelVideos.bind(this);
    }

    searchChannels = async () => {
        console.log('b', this.channelname.current.value)
        const response = await fetch(API_URL_SEARCH_CHANNEL + this.channelname.current.value + API_KEY).then(console.log('asdasdas', "se ha compledato el fecht"));
        const responseData = await response.json();
        console.log('b2', responseData.items);
        this.setState({
            channelsTableData: responseData.items,
            selectedChannelData: [],
            selectedChannelVideosData: [],
        })
    }

    getSelectedChannelDetails = async (channelId) => {
        console.log('c', channelId)
        const response = await fetch(API_URL_CHANNEL_DETAILS + channelId + API_KEY)
        const responseData = await response.json();
        console.log('c2', responseData.items);
        this.setState({
            selectedChannelData: responseData.items,
        })
    }

    selectedChannelVideos = async () => {
        console.log('fasdfasd', "jsadfjisdfijdfsaijsidasfdji")
        const response = await fetch(API_URL_CHANNEL_VIDEOS + this.state.selectedChannelData[0].contentDetails.relatedPlaylists.uploads + API_KEY)
        const responseData = await response.json();
        console.log('d2', responseData.items);
        this.setState({
            selectedChannelVideosData: responseData.items,
        })
    }

    videoFrameGenerator(videoId) {
        return (<>
            <iframe width="auto" height="auto" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></>);
    }

    componentDidMount() {
        console.log("ME HE MONTADO")
    }

    render() {
        console.log('datos canal', this.state.selectedChannelData);
        console.log('datos canal if', this.state.selectedChannelData);
        console.log('datos videos', this.state.selectedChannelVideosData);

        if (this.state.channelsTableData.length === 0) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <SelectorCanal channelname={this.channelname} seach={this.searchChannels} />
                        </Col>
                    </Row>
                </Container>
            );
        } else {

            if (this.state.selectedChannelData.length === 0) {
                console.log('aaa', "asdasdassdaads");

                return (
                    <Container>
                        <Row>
                            <SelectorCanal channelname={this.channelname} seach={this.searchChannels} />
                        </Row>
                        <Row>
                            <Col>
                                <Table responsive striped hover>
                                    <tbody>
                                        <CardGroup>
                                            <Row xs={1} md={3}>
                                                {this.state.channelsTableData.map((item) => {
                                                    return (
                                                        <Col>
                                                            <Card onClick={() => this.getSelectedChannelDetails(item.snippet.channelId)}>
                                                                <Row>
                                                                    <Container>
                                                                        <Card.Img variant="top" src={item.snippet.thumbnails.high.url} />
                                                                    </Container>
                                                                    <Container>
                                                                        <Card.Body>
                                                                            <Card.Title>{item.snippet.channelTitle}</Card.Title>
                                                                        </Card.Body>
                                                                    </Container>
                                                                </Row>
                                                            </Card>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        </CardGroup>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                );

            } else {
                console.log('bbbb', "bvbsdfvsdfdsvf");
                if (this.state.selectedChannelVideosData.length === 0) {
                    this.selectedChannelVideos();
                    return (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    );
                } else {
                    return (
                        <Container>
                            <Row>
                                <SelectorCanal channelname={this.channelname} seach={this.searchChannels} />
                            </Row>
                            <Row>
                                <Col>
                                    <Table responsive striped hover>
                                        <tbody>
                                            <CardGroup>
                                                <Row xs={1} md={3}>
                                                    {this.state.selectedChannelVideosData.map((item) => {
                                                        return (
                                                            <Col>
                                                                <Card>
                                                                    <Row>
                                                                        <Container>
                                                                            <Row>
                                                                                {this.videoFrameGenerator(item.snippet.resourceId.videoId)}
                                                                            </Row>
                                                                            <Row>
                                                                                <Card.Body style={{ height: "9em" }}>
                                                                                    <Card.Title>{item.snippet.title}</Card.Title>
                                                                                </Card.Body>
                                                                            </Row>
                                                                        </Container>
                                                                    </Row>
                                                                </Card>
                                                            </Col>
                                                        );
                                                    })}
                                                </Row>
                                            </CardGroup>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    );
                }
            }
        }
    }
}