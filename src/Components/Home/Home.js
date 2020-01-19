import React from "react";
import './Home.css';
import crestImg from '../../assets/Crest.png';

export default function Home(){
    return (
        <div className='home'>School of Magic
            <img className='Hogwarts-crest' src={crestImg} alt="Hogarts crest" />
        </div>
    )
}