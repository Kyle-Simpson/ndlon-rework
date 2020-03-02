import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ImgCard } from './ImgCard.js';

export class elementsOfGarden extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Elements of the Garden - <i>Elementos en un jardín</i></h3>

                {size.matches &&
                <div>
                    <Row>
                        <Col>
                            <ImgCard image='./images/flower.pdf' alt='flower' english='Flower' phonetic='[flauer]' spanish='flor' audio='./audio/mp3/3.c.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/stem.pdf' alt='stem' english='Stem' phonetic='[stem]' spanish='tallo' audio='./audio/mp3/3.e.mp3' />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <ImgCard image='./images/shrub.pdf' alt='bush/shrub' english='Bush / Shrub' phonetic='[bush] / [shrab]' spanish='arbusto'
                                audio='./audio/mp3/3.b.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/tree.pdf' alt='tree' english='Tree' phonetic='[tri]' spanish='árbol' audio='./audio/mp3/3.a.mp3' />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <ImgCard image='./images/leaf.pdf' alt='leaf' english='Leaf' phonetic='[lif]' spanish='hoja' audio='./audio/mp3/3.g.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/branch.pdf' alt='branch' english='Branch' phonetic='[branch]' spanish='rama' audio='./audio/mp3/3.f.mp3' />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <ImgCard image='./images/trunk.pdf' alt='trunk' english='Trunk' phonetic='[trank]' spanish='tronco' audio='./audio/mp3/.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/roots.pdf' alt='roots' english='Roots' phonetic='[ruts]' spanish='raíces' audio='./audio/mp3/3.i.mp3' />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <ImgCard image='./images/wood_chips.pdf' alt='wood chips' english='Wood Chips' phonetic='[uod chips]' spanish='astillas de madera'
                                audio='./audio/mp3/.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/gravel.pdf' alt='gravel' english='Gravel' phonetic='[gravel]' spanish='grava' audio='./audio/mp3/3.l.mp3' />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <ImgCard image='./images/weed.pdf' alt='weed' english='Weed' phonetic='[wid]' spanish='hierba' audio='./audio/mp3/3.d.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/grass.pdf' alt='grass' english='Grass' phonetic='[gras]' spanish='césped /grama hierba'
                                audio='./audio/mp3/3.j.mp3' />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <ImgCard image='./images/topsoil.pdf' alt='topsoil' english='Top Soil' phonetic='[tap soyel]' spanish='capa superior del suelo'
                                audio='./audio/mp3/.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/compost.pdf' alt='compost' english='Compost' phonetic='[campost]' spanish='abono' audio='./audio/mp3/3.o.mp3' />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <ImgCard image='./images/subsoil.pdf' alt='subsoil' english='Sub Soil' phonetic='[sab soyel]' spanish='subsuelo' audio='./audio/mp3/.mp3' />
                        </Col>
                        <Col>
                            <ImgCard image='./images/bedrock.pdf' alt='bedrock' english='Bedrock' phonetic='[bed rak]' spanish='roca de fondo' audio='./audio/mp3/.mp3' />
                        </Col>
                    </Row>
                    </div>
                }

                {!size.matches &&
                    <div>
                        <ImgCard image='./images/flower.pdf' alt='flower' english='Flower' phonetic='[flauer]' spanish='flor' audio='./audio/mp3/3.c.mp3' />
                        <ImgCard image='./images/stem.pdf' alt='stem' english='Stem' phonetic='[stem]' spanish='tallo' audio='./audio/mp3/3.e.mp3' />
                        <ImgCard image='./images/shrub.pdf' alt='bush/shrub' english='Bush / Shrub' phonetic='[bush] / [shrab]' spanish='arbusto'
                            audio='./audio/mp3/3.b.mp3' />
                        <ImgCard image='./images/tree.pdf' alt='tree' english='Tree' phonetic='[tri]' spanish='árbol' audio='./audio/mp3/3.a.mp3' />
                        <ImgCard image='./images/leaf.pdf' alt='leaf' english='Leaf' phonetic='[lif]' spanish='hoja' audio='./audio/mp3/3.g.mp3' />
                        <ImgCard image='./images/branch.pdf' alt='branch' english='Branch' phonetic='[branch]' spanish='rama' audio='./audio/mp3/3.f.mp3' />
                        <ImgCard image='./images/trunk.pdf' alt='trunk' english='Trunk' phonetic='[trank]' spanish='tronco' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/roots.pdf' alt='roots' english='Roots' phonetic='[ruts]' spanish='raíces' audio='./audio/mp3/3.i.mp3' />
                        <ImgCard image='./images/wood_chips.pdf' alt='wood chips' english='Wood Chips' phonetic='[uod chips]' spanish='astillas de madera'
                            audio='./audio/mp3/3.k.mp3' />
                        <ImgCard image='./images/gravel.pdf' alt='gravel' english='Gravel' phonetic='[gravel]' spanish='grava' audio='./audio/mp3/3.l.mp3' />
                        <ImgCard image='./images/weed.pdf' alt='weed' english='Weed' phonetic='[wid]' spanish='hierba' audio='./audio/mp3/3.d.mp3' />
                        <ImgCard image='./images/grass.pdf' alt='grass' english='Grass' phonetic='[gras]' spanish='césped /grama hierba'
                            audio='./audio/mp3/3.j.mp3' />
                        <ImgCard image='./images/topsoil.pdf' alt='topsoil' english='Top Soil' phonetic='[tap soyel]' spanish='capa superior del suelo'
                            audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/compost.pdf' alt='compost' english='Compost' phonetic='[campost]' spanish='abono' audio='./audio/mp3/3.o.mp3' />
                        <ImgCard image='./images/subsoil.pdf' alt='subsoil' english='Sub Soil' phonetic='[sab soyel]' spanish='subsuelo' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/bedrock.pdf' alt='bedrock' english='Bedrock' phonetic='[bed rak]' spanish='roca de fondo' audio='./audio/mp3/.mp3' />
                    </div>
                }

            </div>
        )
    }
}