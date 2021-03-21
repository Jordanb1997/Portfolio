import React from 'react';
import Social from './Social.js';

import '../style/Bio.css';
function Bio() {

    return (
        <div className="aboutme">
            <div className="aboutcontainer">
                <h1 className="heading">About Me</h1>
                <div className="blurb">
                    <p className="biop">
                        I am Jordan Bannister, I graduated in August 2020 with
                        a Bachelor of ICT majoring in software development.
                        My focus is on front end web development.
                     </p>
                </div>
                <div className="contacts">
                    <h1 className="heading">Find Me Here</h1>
                    <Social />
                </div>
            </div>
        </div>
    );
}

export default Bio;