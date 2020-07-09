import React, { useState } from 'react';

// Style
import './Form.scss';

// Components
import WindowWarning from '../auxiliary-things//WindowWarning';
import { Buttons } from '../Buttons/Buttons';

// Actions
import { fetchRepos } from '../../redux/actions';
import { connect } from 'react-redux';

export const Form = ({ fetchRepos }) => {
  const [ reposName, setReposName ] = useState('');
  const [ blankForm, setBlankForm ] = useState(false);

  const handelForm = (event) => {
    event.preventDefault();
    if ( !reposName.trim() ) {
      setBlankForm(true);
      setTimeout(() => setBlankForm(false), 3000);
      setReposName('');
    } else {
      fetchRepos(reposName);
      setReposName('');
    }
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
            <Buttons.Submit text="search" img="search" />
        </div>
        </div>
      </form>
      { blankForm && <WindowWarning text="Вeдите корректное значение" /> }
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchRepos
}

export const connector = connect(mapStateToProps, mapDispatchToProps);