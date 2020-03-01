import React, { Component } from 'react';
import { Card, CardBody, Container, Row, Button } from 'reactstrap';

export class PlainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            english: this.props.english,
            phonetic: this.props.phonetic,
            spanish: this.props.spanish,
            audio: this.props.audio
        }
    }

    render() {
        var audio = new Audio(this.state.audio)
        return (
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <b>{this.state.english}</b>
                        </Row>
                        <Row>
                            {this.state.phonetic}
                        </Row>
                        <Row>
                            <i>{this.state.spanish}</i>
                        </Row>
                        <Button color='primary' onClick={() => audio.play()}>Play</Button>
                    </Container>
                </CardBody>
            </Card>
        )
    }
}

