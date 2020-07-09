import React, { useState } from 'react';

// Style
import './Form.scss';

// Actions
import { fetchRepos } from '../../redux/actions';
import { connect } from 'react-redux';

export const Form = ({ fetchRepos }) => {
  const [ reposName, setReposName ] = useState('');

  const handelForm = (event) => {
    event.preventDefault();
    fetchRepos(reposName)
    setReposName('');
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handelForm} >
        <div className="row">
          <div className="input-field col s12">
            <input 
              id="reposName" 
              type="text" 
              className="validate" 
              placeholder="Repositories" 
              value={reposName} 
              onChange={event => setReposName(event.target.value)} 
            />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchRepos
}

export const connector = connect(mapStateToProps, mapDispatchToProps);