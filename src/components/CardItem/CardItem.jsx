import React from 'react';

// Style
import './CardItem.scss';


export const CardItem = ({ repos }) => {
  return (
    <div className="col xl3 l4 s12 hoverable card-item">
      <div className="card">
        <div className="card-image">
          <img src={repos.owner.avatar_url} alt={repos.owner.login} />
          <span className="card-title">{ repos.name }</span>
        </div>
        <div className="card-content">
          <p>{repos.description}</p>
          <p>Language: <strong>{repos.language}</strong></p>
        </div>
        <div className="card-action">
          <a href={repos.html_url} target="_blank" rel="noopener noreferrer">Открыть реппозиторий</a>
        </div>
        { repos.homepage 
          && 
          <div className="card-action">
            <a href={repos.homepage} target="_blank" rel="noopener noreferrer" >Открыть приложениe</a> 
          </div>
        }
      </div>
    </div>
  )
};