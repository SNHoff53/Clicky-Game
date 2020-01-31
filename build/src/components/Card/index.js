import React from "react";
import "./card.css";

function card(props) {
    <div className="click-card" onClick = {() => { props.increment(props.id); props.shuffle(props.id); }}>
        <img className="starwarscard-image" src={props.image} alt={props.name}/>
    </div>
};

export default card;