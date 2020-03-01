import React, { Component } from 'react';
import { PlainCard } from './PlainCard.js';

export class instructionsForGardener extends Component {
    render() {

        return (
            <div>
                <h3>Instructions for the Gardener - <i>Instrucciones para el/la jardinero/a</i></h3>

                <PlainCard english='Spread the wood chips.' phonetic='[Spred tha uod chips]' spanish='Esparza las astillas de madera.'
                    audio='./audio/mp3/.mp3' />
                <PlainCard english='Take out these weeds.' phonetic='[Tek aut diz uidz]' spanish='Quite estas hierbas.' audio='./audio/mp3/.mp3' />
                <PlainCard english='Leave these plants.' phonetic='[Liv diz plants]' spanish='Deje estas plantas.' audio='./audio/mp3/.mp3' />
                <PlainCard english='Leave the waste here.' phonetic='[Liv tha uest gíer]' spanish='Ponga la basura aquí.' audio='./audio/mp3/.mp3' />
                <PlainCard english='Move the dirt here.' phonetic='[Muv tha durt gíer]' spanish='Mueva la tierra aquí.' audio='./audio/mp3/.mp3' />
                <PlainCard english='Dig a trench.' phonetic='[Dig a trench.]' spanish='Escarbe una zanja.' audio='./audio/mp3/.mp3' />
                <PlainCard english='Rake the soil.' phonetic='[Rek tha soil]' spanish='Rastrille la tierra.' audio='./audio/mp3/.mp3' />
                <PlainCard english='Water the plants.' phonetic='[juader tha plants]' spanish='Riegue las plantas.' audio='./audio/mp3/.mp3' />
                <PlainCard english='Till the soil first.' phonetic='[Til tha soil furst]' spanish='Revuelve la tierra primero.' audio='./audio/mp3/.mp3' />
            </div>
        )
    }
}