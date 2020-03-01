import React, { Component } from 'react';
import { PlainCard } from './PlainCard.js';
import { ImgCard } from './ImgCard.js';

export class healthAndSafety extends Component {
    render() {

        return (
            <div>
                <h3>Health and Safety - <i>Equipo de seguridad</i></h3>

                <PlainCard english='I need ____________ .' phonetic='[ai nid]' spanish='Yo necesito __________.' audio='./audio/mp3/.mp3' />
                <PlainCard english='I can’t work without __________.' phonetic='I can’t work without .' spanish='No puedo trabajar sin __________.'
                    audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/earplugs.pdf' alt='ear plugs' english='Ear Plugs' phonetic='[ir plogs]' spanish='tapones para los oídos'
                    audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/ear_protection.pdf' alt='ear protection' english='Ear Protection' phonetic='[íer protekchon]'
                    spanish='protección para los oídos' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/boots.pdf' alt='boots' english='Boots' phonetic='[buts]' spanish='botas' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/dust_mask.pdf' alt='dust mask' english='Dust Mask' phonetic='[dost mask]'
                    spanish='máscara para proteger contra el polvo' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/respirator.pdf' alt='respirator' english='Respirator' phonetic='[respereiter]' spanish='respirador'
                    audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/gloves.pdf' alt='gloves' english='Gloves' phonetic='[glovs]' spanish='guantes' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/goggles.pdf' alt='goggles' english='Goggles' phonetic='[gágelz]' spanish='gafas protectoras' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/safety_glasses.pdf' alt='safety glasses' english='Safety Glasses' phonetic='[sefti glásez]'
                    spanish='lentes protectores' audio='./audio/mp3/.mp3' />
            </div>
        )
    }
}