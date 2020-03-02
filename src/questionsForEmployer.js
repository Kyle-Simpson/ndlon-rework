import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';

export class questionsForEmployer extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return(
            <div>
                <h3>Questions for the Employer - <i>Preguntas para el/la empleador/a</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <PlainCard english='Where do you want me to work first?' phonetic='[Uer du yu juant mi tu uork furst?]' spanish='¿Dónde quiere que empiece a trabajar?'
                                audio='./audio/mp3/4.a.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Can you show me which ones are weeds, and which ones are plants?' 
                                phonetic='[Can yu sho mi uich uans ar widz, and uich uans ar plantz?]' spanish='¿Puede mostrarme cuáles son hierbas,
                                y cuáles son plantas?' audio='./audio/mp3/4.b.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Do you want me to save these plants?' phonetic='[du yu juant mi tu seiv dis plants]' 
                                spanish='¿Quieres que guarde estas plantas?' audio='./audio/mp3/4.c.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Where should I put them?' phonetic='[juer shud ai put dem]' spanish='¿Dónde las pongo?'
                                audio='./audio/mp3/4.d.mp3' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <PlainCard english='Can I take out these weeds?' phonetic='[Can ai teik aut diz widz?]' spanish='¿Puedo sacar estas hierbas?'
                                audio='./audio/mp3/4.e.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Where should I leave the yard waste?' phonetic='[Uer shud ai liv tha yard uest?]' 
                                spanish='¿Dónde puedo dejar la basura del jardín?' audio='./audio/mp3/4.f.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Which trash bin can I use?' phonetic='[Uich trash bin can ai iuz?]' spanish='¿Cuál basurero debo usar?'
                                audio='./audio/mp3/4.g.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Do you have a compost pile?' phonetic='[du yu hav a campost pail]' spanish='¿Tiene un bote para la basura orgánica?'
                                audio='./audio/mp3/4.h.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='How short do you want the grass?' phonetic='[Jao short du yu uant tha gras?]' spanish='¿Qué tan corto quiere el pasto?'
                                audio='./audio/mp3/4.i.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='The lawnmower is broken.' phonetic='[da lan moer es broken]' spanish='El cortacésped/podadora no funciona.'
                                audio='./audio/mp3/4.n.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='The weed eater needs gas.' phonetic='[da wid iter nids gas]' spanish='La deshierbadora necesita gasolina.'
                                audio='./audio/mp3/4.o.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='How far apart should I set the plants?' phonetic='[jao far apart shud ay set da plants]' 
                                spanish='¿A qué distancia una del otra pongo las plantas?' audio='./audio/mp3/4.j.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Can you mark where to put the plants?' phonetic='[can yu mark juer tu put da plants]' 
                                spanish='¿Puede marcar dónde debo poner las plan- tas?' audio='./audio/mp3/4.k.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Do you have any extra pots?' phonetic='[du yu hav eni extra pats]' spanish='¿Tiene usted macetas extras?'
                                audio='./audio/mp3/4.l.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <PlainCard english='Do you want me to use fertilizer?' phonetic='[du yu juant mi tu yus fertilaiser]' 
                                spanish='¿Quiere que use fertilizante?' audio='./audio/mp3/4.m.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Where should I put the tools when I am finished?' phonetic='[juer shud ai put da tuls juen ai am finished]' 
                                spanish='¿En donde puedo poner las herramientas cuando termine?' audio='./audio/mp3/4.p.mp3' />
                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <PlainCard english='Where do you want me to work first?' phonetic='[Uer du yu juant mi tu uork furst?]' spanish='¿Dónde quiere que empiece a trabajar?'
                            audio='./audio/mp3/4.a.mp3' />
                        <PlainCard english='Can you show me which ones are weeds, and which ones are plants?' 
                            phonetic='[Can yu sho mi uich uans ar widz, and uich uans ar plantz?]' spanish='¿Puede mostrarme cuáles son hierbas,
                            y cuáles son plantas?' audio='./audio/mp3/4.b.mp3' />
                        <PlainCard english='Do you want me to save these plants?' phonetic='[du yu juant mi tu seiv dis plants]' 
                            spanish='¿Quieres que guarde estas plantas?' audio='./audio/mp3/4.c.mp3' />
                        <PlainCard english='Where should I put them?' phonetic='[juer shud ai put dem]' spanish='¿Dónde las pongo?'
                            audio='./audio/mp3/4.d.mp3' />
                        <PlainCard english='Can I take out these weeds?' phonetic='[Can ai teik aut diz widz?]' spanish='¿Puedo sacar estas hierbas?'
                            audio='./audio/mp3/4.e.mp3' />
                        <PlainCard english='Where should I leave the yard waste?' phonetic='[Uer shud ai liv tha yard uest?]' 
                            spanish='¿Dónde puedo dejar la basura del jardín?' audio='./audio/mp3/4.f.mp3' />
                        <PlainCard english='Which trash bin can I use?' phonetic='[Uich trash bin can ai iuz?]' spanish='¿Cuál basurero debo usar?'
                            audio='./audio/mp3/4.g.mp3' />
                        <PlainCard english='Do you have a compost pile?' phonetic='[du yu hav a campost pail]' spanish='¿Tiene un bote para la basura orgánica?'
                            audio='./audio/mp3/4.h.mp3' />
                        <PlainCard english='How short do you want the grass?' phonetic='[Jao short du yu uant tha gras?]' spanish='¿Qué tan corto quiere el pasto?'
                            audio='./audio/mp3/4.i.mp3' />
                        <PlainCard english='The lawnmower is broken.' phonetic='[da lan moer es broken]' spanish='El cortacésped/podadora no funciona.'
                            audio='./audio/mp3/4.n.mp3' />
                        <PlainCard english='The weed eater needs gas.' phonetic='[da wid iter nids gas]' spanish='La deshierbadora necesita gasolina.'
                            audio='./audio/mp3/4.o.mp3' />
                        <PlainCard english='How far apart should I set the plants?' phonetic='[jao far apart shud ay set da plants]' 
                            spanish='¿A qué distancia una del otra pongo las plantas?' audio='./audio/mp3/4.j.mp3' />
                        <PlainCard english='Can you mark where to put the plants?' phonetic='[can yu mark juer tu put da plants]' 
                            spanish='¿Puede marcar dónde debo poner las plan- tas?' audio='./audio/mp3/4.k.mp3' />
                        <PlainCard english='Do you have any extra pots?' phonetic='[du yu hav eni extra pats]' spanish='¿Tiene usted macetas extras?'
                            audio='./audio/mp3/4.l.mp3' />
                        <PlainCard english='Do you want me to use fertilizer?' phonetic='[du yu juant mi tu yus fertilaiser]' 
                            spanish='¿Quiere que use fertilizante?' audio='./audio/mp3/4.m.mp3' />
                        <PlainCard english='Where should I put the tools when I am finished?' phonetic='[juer shud ai put da tuls juen ai am finished]' 
                            spanish='¿En donde puedo poner las herramientas cuando termine?' audio='./audio/mp3/4.p.mp3' />
                    </div>
                }
            </div>
        )
    }
}