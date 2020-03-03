import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';
import { ImgCard } from './ImgCard.js';

export class healthAndSafety extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Equipo de seguridad - <i>Health and Safety</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <PlainCard english='I need ____________ .' phonetic='[ai nid]' spanish='Yo necesito __________.' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='I can’t work without __________.' phonetic='I can’t work without .' spanish='No puedo trabajar sin __________.'
                                    audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/earplugs.png' alt='ear plugs' english='Ear Plugs' phonetic='[ir plogs]' spanish='tapones para los oídos'
                                    audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/ear_protection.png' alt='ear protection' english='Ear Protection' phonetic='[íer protekchon]'
                                    spanish='protección para los oídos' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/boots.png' alt='boots' english='Boots' phonetic='[buts]' spanish='botas' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/dust_mask.png' alt='dust mask' english='Dust Mask' phonetic='[dost mask]'
                                    spanish='máscara para proteger contra el polvo' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/respirator.png' alt='respirator' english='Respirator' phonetic='[respereiter]' spanish='respirador'
                                    audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/gloves.png' alt='gloves' english='Gloves' phonetic='[glovs]' spanish='guantes' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/goggles.png' alt='goggles' english='Goggles' phonetic='[gágelz]' spanish='gafas protectoras' audio='./audio/mp3/.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/safety_glasses.png' alt='safety glasses' english='Safety Glasses' phonetic='[sefti glásez]'
                                    spanish='lentes protectores' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <PlainCard english='I need ____________ .' phonetic='[ai nid]' spanish='Yo necesito __________.' audio='./audio/mp3/.mp3' />
                        <PlainCard english='I can’t work without __________.' phonetic='I can’t work without .' spanish='No puedo trabajar sin __________.'
                            audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/earplugs.png' alt='ear plugs' english='Ear Plugs' phonetic='[ir plogs]' spanish='tapones para los oídos'
                            audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/ear_protection.png' alt='ear protection' english='Ear Protection' phonetic='[íer protekchon]'
                            spanish='protección para los oídos' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/boots.png' alt='boots' english='Boots' phonetic='[buts]' spanish='botas' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/dust_mask.png' alt='dust mask' english='Dust Mask' phonetic='[dost mask]'
                            spanish='máscara para proteger contra el polvo' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/respirator.png' alt='respirator' english='Respirator' phonetic='[respereiter]' spanish='respirador'
                            audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/gloves.png' alt='gloves' english='Gloves' phonetic='[glovs]' spanish='guantes' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/goggles.png' alt='goggles' english='Goggles' phonetic='[gágelz]' spanish='gafas protectoras' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/safety_glasses.png' alt='safety glasses' english='Safety Glasses' phonetic='[sefti glásez]'
                            spanish='lentes protectores' audio='./audio/mp3/.mp3' />
                    </div>
                }

            </div>
        )
    }
}