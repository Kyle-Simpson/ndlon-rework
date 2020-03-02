import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';

export class clarificationQuestions extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Questions for Clarification - <i>Preguntas para aclarar</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <PlainCard english='Excuse me?' phonetic='[Ecskiuz mi?]' spanish='¿Discúlpeme? ¿Perdón?' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Could you repeat that?' phonetic='[Cud yu ripit that?]' spanish='¿Puede repetir eso?' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='I am confused.' phonetic='[ai em canfyust]' spanish='Estoy confundido/a' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Can you show me?' phonetic='[can yu sho mi]' spanish='¿Puede mostrarme?' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Please show me exactly what you want, because I don’t understand.'
                                    phonetic='[Plis sho mi eczactli uat yu juant, bicoz ai dont ondorstand.]'
                                    spanish='Por favor muéstreme exactamente lo que quiere, porque no entiendo.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <PlainCard english='Excuse me?' phonetic='[Ecskiuz mi?]' spanish='¿Discúlpeme? ¿Perdón?' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Could you repeat that?' phonetic='[Cud yu ripit that?]' spanish='¿Puede repetir eso?' audio='./audio/mp3/.mp3' />
                        <PlainCard english='I am confused.' phonetic='[ai em canfyust]' spanish='Estoy confundido/a' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Can you show me?' phonetic='[can yu sho mi]' spanish='¿Puede mostrarme?' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Please show me exactly what you want, because I don’t understand.'
                            phonetic='[Plis sho mi eczactli uat yu juant, bicoz ai dont ondorstand.]'
                            spanish='Por favor muéstreme exactamente lo que quiere, porque no entiendo.' audio='./audio/mp3/.mp3' />
                    </div>
                }


            </div>
        )
    }
}