import React, { Component } from 'react';
import { PlainCard } from './PlainCard.js';
import { ImgCard } from './ImgCard.js';

export class toolsAndMaterials extends Component {
    render() {

        return (
            <div>
                <h3>Gardening Tools & Materials - <i>Herramientas y materiales para jardinería</i></h3>
                <PlainCard english='Do you have ____________ ?' phonetic='[Du yu jav] ____________' spanish='¿Usted tiene ____________ ?'
                    audio='./audio/mp3/2.a.mp3' />
                <PlainCard english='Can I have a ______________ ?' phonetic='[Can ai jav] ______________ ?' spanish='¿Puedo tener _____________?'
                    audio='./audio/mp3/2.b.mp3' />
                <ImgCard image='./images/garden_rake.pdf' alt='garden rake' english='Garden rake' phonetic='[garden reik]'
                    spanish='rastrillo de jardin' audio='./audio/mp3/2.j.mp3' />
                <ImgCard image='./images/broom.pdf' alt='garden rake' english='Broom' phonetic='[brum]' spanish='escoba'
                    audio='./audio/mp3/2.q.mp3' />
                <ImgCard image='./images/leaf_rake.pdf' alt='leaf rake' english='Leaf rake' phonetic='[lif reik]'
                    spanish='rastrillo para hojas' audio='./audio/mp3/2.k.mp3' />
                <ImgCard image='./images/pitch_fork.pdf' alt='pitch fork' english='Pitch Fork' phonetic='[pich fork]'
                    spanish='trinche, tenedor grande' audio='./audio/mp3/2.i.mp3' />
                <ImgCard image='./images/blower.pdf' alt='blower' english='Blower' phonetic='[bloer]' spanish='sopladora'
                    audio='./audio/mp3/2.p.mp3' />
                <ImgCard image='./images/wheel_barrow.pdf' alt='wheel barrow' english='Wheel barrow' phonetic='[uil bero]'
                    spanish='Carretilla' audio='./audio/mp3/2.w.mp3' />
                <ImgCard image='./images/trowel.pdf' alt='trowel' english='Trowel' phonetic='[trauwel]'
                    spanish='palita de jardinería' audio='./audio/mp3/2.f.mp3' />
                <ImgCard image='./images/pick.pdf' alt='pick' english='Pick' phonetic='[pic]' spanish='pico' audio='./audio/mp3/2.g.mp3' />
                <ImgCard image='./images/hoe.pdf' alt='hoe' english='Hoe' phonetic='[jo]' spanish='azadon' audio='./audio/mp3/2.h.mp3' />
                <ImgCard image='./images/weeder.pdf' alt='weeder' english='Weeder' phonetic='[uider]'
                    spanish='escarbador' audio='./audio/mp3/2.m.mp3' />
                <ImgCard image='./images/shovel.pdf' alt='shovel' english='Shovel' phonetic='[shavel]' spanish='pala' audio='./audio/mp3/2.c.mp3' />
                <ImgCard image='./images/lawn_mower.pdf' alt='lawn mower' english='Lawn mower' phonetic='[lan móer]'
                    spanish='Podadora de pasto' audio='./audio/mp3/2.o.mp3' />
                <ImgCard image='./images/aerator.pdf' alt='aerator' english='Aerator' phonetic='[ereiter]' spanish='aireador' audio='./audio/mp3/' />
                <ImgCard image='./images/electric_hedger.pdf' alt='electric hedger' english='Electric hedger' phonetic='[electric jedcher]'
                    spanish='cortadora' audio='./audio/mp3/2.n.mp3' />
                <ImgCard image='./images/weed_eater.pdf' alt='weed eater' english='Weed eater' phonetic='[wid iter] '
                    spanish='deshierbadora' audio='./audio/mp3/2.l.mp3' />
                <ImgCard image='./images/clippers.pdf' alt='clippers' english='Clippers' phonetic='[clíperz]'
                    spanish='tijeras' audio='./audio/mp3/2.d.mp3' />
                <ImgCard image='./images/pruning_shears.pdf' alt='pruning shears' english='Pruning Shears' phonetic='[prúning shirz]'
                    spanish='tijeras de podar' audio='./audio/mp3/2.e.mp3' />
                <ImgCard image='./images/flower_pot.pdf' alt='flower pot' english='Flower pot' phonetic='[flauer  pat]'
                    spanish='maceta' audio='./audio/mp3/2.x.mp3' />
                <ImgCard image='./images/nozzle.pdf' alt='nozzle' english='Nozzle' phonetic='[nahsel]' spanish='boquilla'
                    audio='./audio/mp3/2.s.mp3' />
                <ImgCard image='./images/watering_can.pdf' alt='watering can' english='Watering can' phonetic='[uádering can]'
                    spanish='bote para regar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/hose.pdf' alt='hose' english='Hose' phonetic='[joz]' spanish='manguera' audio='./audio/mp3/2.r.mp3' />
                <ImgCard image='./images/plastic_bag.pdf' alt='plastic bag' english='Plastic bag' phonetic='[plástic bag]'
                    spanish='bolsa de plástico' audio='./audio/mp3/2.u.mp3' />
                <ImgCard image='./images/garbage_can.pdf' alt='garbage can' english='Garbage can' phonetic='[garbech can]'
                    spanish='basurero' audio='./audio/mp3/2.t.mp3' />
                <ImgCard image='./images/yard_waste_bags.pdf' alt='yard waste bags' english='Yard waste bags' phonetic='[iard uest bags]'
                    spanish='bolsas para la basura del jardín' audio='./audio/mp3/2.v.mp3' />
            </div>
        )
    }
}