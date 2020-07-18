import React from 'react';

import './sidenav.css';

export const SideNav = ({handleSectionClick}) => {
    return (
        <div className="sidenav">
            <img 
            src="https://avatars2.githubusercontent.com/u/52125841?s=400&u=89e80181907874bac5dc5d57e85ead2d229b3d51&v=4" className="avatar" alt="Avatar"/>
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

