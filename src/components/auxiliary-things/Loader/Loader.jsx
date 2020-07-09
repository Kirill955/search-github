import React from 'react';

// Style
import './Loader.scss';

export const Loader = () => {
  return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  )
};