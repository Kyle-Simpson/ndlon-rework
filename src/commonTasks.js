import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ImgCard } from './ImgCard.js';

export class commonTasks extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Tareas comunes de jardinería - <i>Common Gardening Tasks</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <ImgCard image='./images/dig.png' alt='dig' english='Dig' phonetic='[deg]' spanish='escarbar' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/till.png' alt='till' english='Till' phonetic='[til]' spanish='labrar' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/rake.png' alt='rake' english='Rake' phonetic='[reik]' spanish='rastrillar' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/mow.png' alt='mowing' english='Mow the lawn' phonetic='[mo da lan]'
                                    spanish='recortar el césped/pasto' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/prune.png' alt='prune' english='Prune' phonetic='[prun]' spanish='podar/cortar' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/hedge.png' alt='trim hedge' english='Trim the hedge' phonetic='[trim tha hedch]'
                                    spanish='recortar el arbusto' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/deadhead.png' alt='dead head' english='Dead head' phonetic='[ded jed]'
                                    spanish='podar las flores marchitas' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/plant.png' alt='plant' english='Plant' phonetic='[plant]' spanish='plantar' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/watering.png' alt='water' english='Water' phonetic='[uáder]' spanish='regar' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/transplant.png' alt='transplant' english='Transplant' phonetic='[transplant]'
                                    spanish='trasplantar' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/moving.png' alt='move' english='Move' phonetic='[muv]'
                                    spanish='mover' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/remove.png' alt='remove' english='Remove' phonetic='[rimuv]'
                                    spanish='quitar' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/takeout.png' alt='take out' english='Take out' phonetic='[tek aut]'
                                    spanish='sacar' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/weeding.png' alt='weeding' english='Weeding' phonetic='[uidin]' spanish='deshierbar' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/spread.png' alt='spread' english='Spread' phonetic='[spred]' spanish='esparcir' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <ImgCard image='./images/dig.png' alt='dig' english='Dig' phonetic='[deg]' spanish='escarbar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/till.png' alt='till' english='Till' phonetic='[til]' spanish='labrar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/rake.png' alt='rake' english='Rake' phonetic='[reik]' spanish='rastrillar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/mow.png' alt='mowing' english='Mow the lawn' phonetic='[mo da lan]'
                            spanish='recortar el césped/pasto' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/spread.png' alt='spread' english='Spread' phonetic='[spred]' spanish='esparcir' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/prune.png' alt='prune' english='Prune' phonetic='[prun]' spanish='podar/cortar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/hedge.png' alt='trim hedge' english='Trim the hedge' phonetic='[trim tha hedch]'
                            spanish='recortar el arbusto' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/deadhead.png' alt='dead head' english='Dead head' phonetic='[ded jed]'
                            spanish='podar las flores marchitas' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/plant.png' alt='plant' english='Plant' phonetic='[plant]' spanish='plantar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/watering.png' alt='water' english='Water' phonetic='[uáder]' spanish='regar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/transplant.png' alt='transplant' english='Transplant' phonetic='[transplant]'
                            spanish='trasplantar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/moving.png' alt='move' english='Move' phonetic='[muv]'
                            spanish='mover' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/remove.png' alt='remove' english='Remove' phonetic='[rimuv]'
                            spanish='quitar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/takeout.png' alt='take out' english='Take out' phonetic='[tek aut]'
                            spanish='sacar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/weeding.png' alt='weeding' english='Weeding' phonetic='[uidin]' spanish='deshierbar' audio='./audio/mp3/.mp3' />
                    </div>
                }

            </div>
        )
    }
}