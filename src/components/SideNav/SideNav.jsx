import React from 'react';

import './sidenav.css';

export const SideNav = ({handleSectionClick}) => {
    return (
        <div className="sidenav">
            <img 
            src="https://media-exp1.licdn.com/dms/image/C5603AQFjDeadWzzELw/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=ox7DHR7_NPhy-1iRvoZglOImo9BFjmZSFfjQ9Nnpvdo" className="avatar" alt="Avatar"/>
            <h2 className="main-name">Shubham Kumar</h2>
            <p className="subtitle">"A Cadet who Codes"</p>
            <div className="section-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                {/* <p className="section-list-element" onclick={() => handleSectionClick("experience")}>Experience</p> */}
                {/* <p className="section-list-element" onclick={() => handleSectionClick("contact")}>Contact</p> */}
            </div>
        
        </div>
    );
};

