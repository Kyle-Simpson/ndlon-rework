import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';

export class instructionsForGardener extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Instructions for the Gardener - <i>Instrucciones para el/la jardinero/a</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <PlainCard english='Spread the wood chips.' phonetic='[Spred tha uod chips]' spanish='Esparza las astillas de madera.'
                                    audio='./audio/mp3/3.k.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Take out these weeds.' phonetic='[Tek aut diz uidz]' spanish='Quite estas hierbas.' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Leave these plants.' phonetic='[Liv diz plants]' spanish='Deje estas plantas.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Leave the waste here.' phonetic='[Liv tha uest gíer]' spanish='Ponga la basura aquí.' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Move the dirt here.' phonetic='[Muv tha durt gíer]' spanish='Mueva la tierra aquí.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Dig a trench.' phonetic='[Dig a trench.]' spanish='Escarbe una zanja.' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Rake the soil.' phonetic='[Rek tha soil]' spanish='Rastrille la tierra.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Water the plants.' phonetic='[juader tha plants]' spanish='Riegue las plantas.' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Till the soil first.' phonetic='[Til tha soil furst]' spanish='Revuelve la tierra primero.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <PlainCard english='Spread the wood chips.' phonetic='[Spred tha uod chips]' spanish='Esparza las astillas de madera.'
                            audio='./audio/mp3/3.k.mp3' />
                        <PlainCard english='Take out these weeds.' phonetic='[Tek aut diz uidz]' spanish='Quite estas hierbas.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Leave these plants.' phonetic='[Liv diz plants]' spanish='Deje estas plantas.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Leave the waste here.' phonetic='[Liv tha uest gíer]' spanish='Ponga la basura aquí.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Move the dirt here.' phonetic='[Muv tha durt gíer]' spanish='Mueva la tierra aquí.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Dig a trench.' phonetic='[Dig a trench.]' spanish='Escarbe una zanja.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Rake the soil.' phonetic='[Rek tha soil]' spanish='Rastrille la tierra.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Water the plants.' phonetic='[juader tha plants]' spanish='Riegue las plantas.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='Till the soil first.' phonetic='[Til tha soil furst]' spanish='Revuelve la tierra primero.' audio='./audio/mp3/.mp3' />
                    </div>
                }


            </div>
        )
    }
}