import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';
import './App.css';

export class startOfWorkday extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Start of the Workday - <i>Inicio del día de trabajo</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <PlainCard english='Good Morning' phonetic='[gud mornin]' spanish='Buenos días' audio='./audio/mp3/1.a.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='I’m ___________. I am a worker from ____________. Nice to meet  you.'
                                    phonetic='[aim ___________. Aim a wurker fram __________. Nais tu mit yu]'
                                    spanish='Yo soy __________. Soy un trabajador de __________. Es un placer conocerlo/a.'
                                    audio='./audio/mp3/1.b.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='What will I be doing today?' phonetic='[Guat wil ai bi duin tudei]' spanish='¿Qué voy a hacer hoy?'
                                    audio='./audio/mp3/1.c.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='What type of gardening work do you need done?' phonetic='[Guat taip of gardenin work du yu nid dan]'
                                    spanish='¿Qué trabajo necesita hacer en el jardin?' audio='./audio/mp3/1.d.mp3' />
                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <PlainCard english='Good Morning' phonetic='[gud mornin]' spanish='Buenos días' audio='./audio/mp3/1.a.mp3' />
                        <PlainCard english='I’m ___________. I am a worker from ____________. Nice to meet  you.'
                            phonetic='[aim ___________. Aim a wurker fram __________. Nais tu mit yu]'
                            spanish='Yo soy __________. Soy un trabajador de __________. Es un placer conocerlo/a.'
                            audio='./audio/mp3/1.b.mp3' />
                        <PlainCard english='What will I be doing today?' phonetic='[Guat wil ai bi duin tudei]' spanish='¿Qué voy a hacer hoy?'
                            audio='./audio/mp3/1.c.mp3' />
                        <PlainCard english='What type of gardening work do you need done?' phonetic='[Guat taip of gardenin work du yu nid dan]'
                            spanish='¿Qué trabajo necesita hacer en el jardin?' audio='./audio/mp3/1.d.mp3' />
                    </div>
                }

            </div>
        )
    }
}