import React from 'react';
import '../style/Cards.css';
function Skill({ skillImage, skillName }) {
    return (
        <div className="skill">
            <img className="skillpic" src={skillImage} alt={skillName} />
            <div className="wrapper">
                <div className="seperator transparent"></div>
            </div>
            <p className="skillname">{skillName}</p>
        </div>
    );
}

export default Skill;