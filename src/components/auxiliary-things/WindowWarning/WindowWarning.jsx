import React from 'react';

// Style
import './WindowWarning.scss';

export const WindowWarning = ({ text }) => {
  return (
    <span className="window-warning lime lighten-1 text-white red-text lighten-1-text">{text}</span>
  )
};