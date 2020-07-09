import React from 'react';

// Style
import './CardsWrapper.scss';

// Redux
import { connect } from 'react-redux'; 

// Components
import CardItem from '../CardItem';
import Loader from '../auxiliary-things/Loader';

export const CardsWrapper = ({ repositories, loading }) => {
  return (
    <div className='row' style={{minHeight: '45vh'}}> 
      { loading ? <Loader /> 
        :
        repositories.map(repos => <CardItem repos={repos} key={repos.id} />)
      } 
    </div>
  )
};


const mapStateToProps = state => ({
  repositories: state.repositories,
  loading: state.loading
})

export const connector = connect(mapStateToProps, null);