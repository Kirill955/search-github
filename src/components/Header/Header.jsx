import React from 'react';

// Style
import './Header.scss';


export const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="https://github.com/" 
          className="brand-logo center" 
          target="_blank"
          rel = "noopener noreferrer">Github</a>
      </div>
    </nav>
  );
};