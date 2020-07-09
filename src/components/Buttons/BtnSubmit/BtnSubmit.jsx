import React from 'react';

// Style
import './BtnSubmit';

export const BtnSubmit = ({ text, img }) => {
  return (
    <button className="btn waves-effect waves-light" type="submit" name="action">{text}
      <i className="material-icons right">{ img }</i>
    </button>
  )
};