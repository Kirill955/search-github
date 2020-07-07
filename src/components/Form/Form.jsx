import React from 'react';

// Style
import './Form.scss';


export const Form = () => {

  const handelForm = event => {
    event.preventDefault();
    console.log(event.target.value)
  };
  return (
    <div className="row">
      <form className="col s12" onChange={handelForm} >
        <div className="row">
          <div className="input-field col s12">
            <input id="repos" type="text" className="validate" placeholder="Repositories" />
            <span className="helper-text" data-error="wrong" data-success="right">Введите название реппозитория</span>
          </div>
          <div className="input-field col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">search
              <i className="material-icons right">search</i>
            </button>
        </div>
        </div>
      </form>
    </div>
  );
};