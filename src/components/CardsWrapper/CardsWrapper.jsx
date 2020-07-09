import React from 'react';

// Style
import './CardsWrapper.scss';

// Components
import CardItem from '../CardItem';

export const CardsWrapper = ({ repositories }) => {
  return (
    <div>
      { repositories.map(repos => <CardItem repos={repos} key={repos} />) } 
    </div>
  )
};