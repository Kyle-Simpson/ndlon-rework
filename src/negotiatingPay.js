import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';

export class negotiatingPay extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Negotiating Pay - <i>Negociación de pago</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <PlainCard english='I charge $20 an hour.' phonetic='[Ai charch twenti an auer.]' spanish='Cobro $20 la hora.'
                                    audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='I charge $19 an hour for weeding.' phonetic='[ai charch nain-tin an auer for widin]'
                                    spanish='Cobro $19 la hora por deshierbar.' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='I charge $21 an hour for digging.' phonetic='[ai charch twenti juon an auer for deguing]'
                                    spanish='Cobro $20 la hora por escarbar.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='I charge $22 an hour for landscaping.' phonetic='[ai charch twenti tu an auer for land skeiping.]'
                                    spanish='Cobro $22 la hora por jardineria avanzada.' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='I prefer cash.' phonetic='[ai prefer cash]' spanish='Prefiero efectivo.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='I require a minimum of five hours of work.' phonetic='[ai ricuayer a minimam af faiv auers af wurk]'
                                    spanish='Yo requiero un mínimo de cinco horas de trabajo.' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <PlainCard english='I charge $20 an hour.' phonetic='[Ai charch twenti an auer.]' spanish='Cobro $20 la hora.'
                            audio='./audio/mp3/.mp3' />
                        <PlainCard english='I charge $19 an hour for weeding.' phonetic='[ai charch nain-tin an auer for widin]'
                            spanish='Cobro $19 la hora por deshierbar.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='I charge $21 an hour for digging.' phonetic='[ai charch twenti juon an auer for deguing]'
                            spanish='Cobro $20 la hora por escarbar.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='I charge $22 an hour for landscaping.' phonetic='[ai charch twenti tu an auer for land skeiping.]'
                            spanish='Cobro $22 la hora por jardineria avanzada.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='I prefer cash.' phonetic='[ai prefer cash]' spanish='Prefiero efectivo.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='I require a minimum of five hours of work.' phonetic='[ai ricuayer a minimam af faiv auers af wurk]'
                            spanish='Yo requiero un mínimo de cinco horas de trabajo.' audio='./audio/mp3/.mp3' />
                    </div>
                }


            </div>
        )
    }
}