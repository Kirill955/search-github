import React from 'react';

// Style
import './CardsWrapper.scss';

// Redux
import { connect } from 'react-redux'; 

// Components
import CardItem from '../CardItem';

export const CardsWrapper = ({ repositories }) => {
  return (
    <div>
      { repositories.map(repos => <CardItem repos={repos} key={repos.id} />) } 
    </div>
  )
};


const mapStateToProps = state => ({
  repositories: state.repositories
})

export const connector = connect(mapStateToProps, null);