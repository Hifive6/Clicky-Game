//seting up Component for Character Card
import React from 'react'
import "./Character.css"


const CharacterCard = props => (
    <div className = "card" onClick={props.imageClick}>
        <div className = "img-containger">
            <img alt = {props.image} src = {props.image}/> 
        </div>
    </div>
);

export default CharacterCard;