import React from 'react';

// Style
import './Header.scss';


export const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="https://github.com/" 
          className="brand-logo right" 
          target="_blank"
          rel = "noopener noreferrer">Github</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  );
};