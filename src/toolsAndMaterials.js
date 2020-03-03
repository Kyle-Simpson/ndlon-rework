import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';
import { ImgCard } from './ImgCard.js';

export class toolsAndMaterials extends Component {
    render() {
        var size = window.matchMedia("(min-width: 600px)")

        return (
            <div>
                <h3>Herramientas y materiales para jardinería - <i>Gardening Tools & Materials</i></h3>

                {/* If the screen size is > 600px */}
                {size.matches &&
                    <div>
                        <Row>
                            <Col>
                                <PlainCard english='Do you have ____________ ?' phonetic='[Du yu jav] ____________' spanish='¿Usted tiene ____________ ?'
                                    audio='./audio/mp3/2.a.mp3' />
                            </Col>
                            <Col>
                                <PlainCard english='Can I have a ______________ ?' phonetic='[Can ai jav] ______________ ?' spanish='¿Puedo tener _____________?'
                                    audio='./audio/mp3/2.b.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/garden_rake.png' alt='garden rake' english='Garden rake' phonetic='[garden reik]'
                                    spanish='rastrillo de jardin' audio='./audio/mp3/2.j.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/broom.png' alt='garden rake' english='Broom' phonetic='[brum]' spanish='escoba'
                                    audio='./audio/mp3/2.q.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/leaf_rake.png' alt='leaf rake' english='Leaf rake' phonetic='[lif reik]'
                                    spanish='rastrillo para hojas' audio='./audio/mp3/2.k.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/pitch_fork.png' alt='pitch fork' english='Pitch Fork' phonetic='[pich fork]'
                                    spanish='trinche, tenedor grande' audio='./audio/mp3/2.i.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/blower.png' alt='blower' english='Blower' phonetic='[bloer]' spanish='sopladora'
                                    audio='./audio/mp3/2.p.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/wheel_barrow.png' alt='wheel barrow' english='Wheel barrow' phonetic='[uil bero]'
                                    spanish='Carretilla' audio='./audio/mp3/2.w.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/trowel.png' alt='trowel' english='Trowel' phonetic='[trauwel]'
                                    spanish='palita de jardinería' audio='./audio/mp3/2.f.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/pick.png' alt='pick' english='Pick' phonetic='[pic]' spanish='pico' audio='./audio/mp3/2.g.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/hoe.png' alt='hoe' english='Hoe' phonetic='[jo]' spanish='azadon' audio='./audio/mp3/2.h.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/weeder.png' alt='weeder' english='Weeder' phonetic='[uider]'
                                    spanish='escarbador' audio='./audio/mp3/2.m.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/shovel.png' alt='shovel' english='Shovel' phonetic='[shavel]' spanish='pala' audio='./audio/mp3/2.c.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/lawn_mower.png' alt='lawn mower' english='Lawn mower' phonetic='[lan móer]'
                                    spanish='Podadora de pasto' audio='./audio/mp3/2.o.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/aerator.png' alt='aerator' english='Aerator' phonetic='[ereiter]' spanish='aireador' audio='./audio/mp3/' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/electric_hedger.png' alt='electric hedger' english='Electric hedger' phonetic='[electric jedcher]'
                                    spanish='cortadora' audio='./audio/mp3/2.n.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/weed_eater.png' alt='weed eater' english='Weed eater' phonetic='[wid iter] '
                                    spanish='deshierbadora' audio='./audio/mp3/2.l.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/clippers.png' alt='clippers' english='Clippers' phonetic='[clíperz]'
                                    spanish='tijeras' audio='./audio/mp3/2.d.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/pruning_shears.png' alt='pruning shears' english='Pruning Shears' phonetic='[prúning shirz]'
                                    spanish='tijeras de podar' audio='./audio/mp3/2.e.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/flower_pot.png' alt='flower pot' english='Flower pot' phonetic='[flauer  pat]'
                                    spanish='maceta' audio='./audio/mp3/2.x.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/nozzle.png' alt='nozzle' english='Nozzle' phonetic='[nahsel]' spanish='boquilla'
                                    audio='./audio/mp3/2.s.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/watering_can.png' alt='watering can' english='Watering can' phonetic='[uádering can]'
                                    spanish='bote para regar' audio='./audio/mp3/.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/hose.png' alt='hose' english='Hose' phonetic='[joz]' spanish='manguera' audio='./audio/mp3/2.r.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/plastic_bag.png' alt='plastic bag' english='Plastic bag' phonetic='[plástic bag]'
                                    spanish='bolsa de plástico' audio='./audio/mp3/2.u.mp3' />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <ImgCard image='./images/garbage_can.png' alt='garbage can' english='Garbage can' phonetic='[garbech can]'
                                    spanish='basurero' audio='./audio/mp3/2.t.mp3' />
                            </Col>
                            <Col>
                                <ImgCard image='./images/yard_waste_bags.png' alt='yard waste bags' english='Yard waste bags' phonetic='[iard uest bags]'
                                    spanish='bolsas para la basura del jardín' audio='./audio/mp3/2.v.mp3' />
                            </Col>
                        </Row>
                    </div>
                }

                {/* If the screen size is < 600px */}
                {!size.matches &&
                    <div>
                        <PlainCard english='Do you have ____________ ?' phonetic='[Du yu jav] ____________' spanish='¿Usted tiene ____________ ?'
                            audio='./audio/mp3/2.a.mp3' />
                        <PlainCard english='Can I have a ______________ ?' phonetic='[Can ai jav] ______________ ?' spanish='¿Puedo tener _____________?'
                            audio='./audio/mp3/2.b.mp3' />
                        <ImgCard image='./images/garden_rake.png' alt='garden rake' english='Garden rake' phonetic='[garden reik]'
                            spanish='rastrillo de jardin' audio='./audio/mp3/2.j.mp3' />
                        <ImgCard image='./images/broom.png' alt='garden rake' english='Broom' phonetic='[brum]' spanish='escoba'
                            audio='./audio/mp3/2.q.mp3' />
                        <ImgCard image='./images/leaf_rake.png' alt='leaf rake' english='Leaf rake' phonetic='[lif reik]'
                            spanish='rastrillo para hojas' audio='./audio/mp3/2.k.mp3' />
                        <ImgCard image='./images/pitch_fork.png' alt='pitch fork' english='Pitch Fork' phonetic='[pich fork]'
                            spanish='trinche, tenedor grande' audio='./audio/mp3/2.i.mp3' />
                        <ImgCard image='./images/blower.png' alt='blower' english='Blower' phonetic='[bloer]' spanish='sopladora'
                            audio='./audio/mp3/2.p.mp3' />
                        <ImgCard image='./images/wheel_barrow.png' alt='wheel barrow' english='Wheel barrow' phonetic='[uil bero]'
                            spanish='Carretilla' audio='./audio/mp3/2.w.mp3' />
                        <ImgCard image='./images/trowel.png' alt='trowel' english='Trowel' phonetic='[trauwel]'
                            spanish='palita de jardinería' audio='./audio/mp3/2.f.mp3' />
                        <ImgCard image='./images/pick.png' alt='pick' english='Pick' phonetic='[pic]' spanish='pico' audio='./audio/mp3/2.g.mp3' />
                        <ImgCard image='./images/hoe.png' alt='hoe' english='Hoe' phonetic='[jo]' spanish='azadon' audio='./audio/mp3/2.h.mp3' />
                        <ImgCard image='./images/weeder.png' alt='weeder' english='Weeder' phonetic='[uider]'
                            spanish='escarbador' audio='./audio/mp3/2.m.mp3' />
                        <ImgCard image='./images/shovel.png' alt='shovel' english='Shovel' phonetic='[shavel]' spanish='pala' audio='./audio/mp3/2.c.mp3' />
                        <ImgCard image='./images/lawn_mower.png' alt='lawn mower' english='Lawn mower' phonetic='[lan móer]'
                            spanish='Podadora de pasto' audio='./audio/mp3/2.o.mp3' />
                        <ImgCard image='./images/aerator.png' alt='aerator' english='Aerator' phonetic='[ereiter]' spanish='aireador' audio='./audio/mp3/' />
                        <ImgCard image='./images/electric_hedger.png' alt='electric hedger' english='Electric hedger' phonetic='[electric jedcher]'
                            spanish='cortadora' audio='./audio/mp3/2.n.mp3' />
                        <ImgCard image='./images/weed_eater.png' alt='weed eater' english='Weed eater' phonetic='[wid iter] '
                            spanish='deshierbadora' audio='./audio/mp3/2.l.mp3' />
                        <ImgCard image='./images/clippers.png' alt='clippers' english='Clippers' phonetic='[clíperz]'
                            spanish='tijeras' audio='./audio/mp3/2.d.mp3' />
                        <ImgCard image='./images/pruning_shears.png' alt='pruning shears' english='Pruning Shears' phonetic='[prúning shirz]'
                            spanish='tijeras de podar' audio='./audio/mp3/2.e.mp3' />
                        <ImgCard image='./images/flower_pot.png' alt='flower pot' english='Flower pot' phonetic='[flauer  pat]'
                            spanish='maceta' audio='./audio/mp3/2.x.mp3' />
                        <ImgCard image='./images/nozzle.png' alt='nozzle' english='Nozzle' phonetic='[nahsel]' spanish='boquilla'
                            audio='./audio/mp3/2.s.mp3' />
                        <ImgCard image='./images/watering_can.png' alt='watering can' english='Watering can' phonetic='[uádering can]'
                            spanish='bote para regar' audio='./audio/mp3/.mp3' />
                        <ImgCard image='./images/hose.png' alt='hose' english='Hose' phonetic='[joz]' spanish='manguera' audio='./audio/mp3/2.r.mp3' />
                        <ImgCard image='./images/plastic_bag.png' alt='plastic bag' english='Plastic bag' phonetic='[plástic bag]'
                            spanish='bolsa de plástico' audio='./audio/mp3/2.u.mp3' />
                        <ImgCard image='./images/garbage_can.png' alt='garbage can' english='Garbage can' phonetic='[garbech can]'
                            spanish='basurero' audio='./audio/mp3/2.t.mp3' />
                        <ImgCard image='./images/yard_waste_bags.png' alt='yard waste bags' english='Yard waste bags' phonetic='[iard uest bags]'
                            spanish='bolsas para la basura del jardín' audio='./audio/mp3/2.v.mp3' />
                    </div>
                }


            </div>
        )
    }
}