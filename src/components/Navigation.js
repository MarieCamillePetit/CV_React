import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/competence">
                    <li>Compétences</li>
                </NavLink>
                <NavLink to="/portfolio">
                    <li>Portfolio</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;