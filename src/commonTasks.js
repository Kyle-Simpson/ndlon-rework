import React, { Component } from 'react';
import { ImgCard } from './ImgCard.js';

export class commonTasks extends Component {
    render() {

        return (
            <div>
                <h3>Common Gardening Tasks - <i>Tareas comunes de jardinería</i></h3>

                <ImgCard image='./images/dig.pdf' alt='dig' english='Dig' phonetic='[deg]' spanish='escarbar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/till.pdf' alt='till' english='Till' phonetic='[til]' spanish='labrar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/rake.pdf' alt='rake' english='Rake' phonetic='[reik]' spanish='rastrillar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/mow.pdf' alt='mowing' english='Mow the lawn' phonetic='[mo da lan]'
                    spanish='recortar el césped/pasto' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/spread.pdf' alt='spread' english='Spread' phonetic='[spred]' spanish='esparcir' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/prune.pdf' alt='prune' english='Prune' phonetic='[prun]' spanish='podar/cortar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/hedge.pdf' alt='trim hedge' english='Trim the hedge' phonetic='[trim tha hedch]'
                    spanish='recortar el arbusto' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/deadhead.pdf' alt='dead head' english='Dead head' phonetic='[ded jed]'
                    spanish='podar las flores marchitas' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/plant.pdf' alt='plant' english='Plant' phonetic='[plant]' spanish='plantar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/watering.pdf' alt='water' english='Water' phonetic='[uáder]' spanish='regar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/transplant.pdf' alt='transplant' english='Transplant' phonetic='[transplant]'
                    spanish='trasplantar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/moving.pdf' alt='move' english='Move' phonetic='[muv]'
                    spanish='mover' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/remove.pdf' alt='remove' english='Remove' phonetic='[rimuv]'
                    spanish='quitar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/takeout.pdf' alt='take out' english='Take out' phonetic='[tek aut]'
                    spanish='sacar' audio='./audio/mp3/.mp3' />
                <ImgCard image='./images/weeding.pdf' alt='weeding' english='Weeding' phonetic='[uidin]' spanish='deshierbar' audio='./audio/mp3/.mp3' />
            </div>
        )
    }
}