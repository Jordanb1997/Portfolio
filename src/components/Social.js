import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import '../style/Socialmedia.css';
function Social() {

    return (
        <div className="socials">
            <a href="https://github.com/Jordanb1997" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="bioicon" fontSize='large' />
            </a>
            <a href="https://www.linkedin.com/in/jordanb1997/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="bioicon" fontSize="large" />
            </a>
            <a href="/Jordan-Bannister-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <PictureAsPdfIcon className="bioicon" fontSize="large" />
            </a>
        </div>
    );
}

export default Social;