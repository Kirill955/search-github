import React, { useState } from 'react';

// Style
import './App.scss';

// Components
import Header from './components/Header';
import Form from './components/Form';
import CardWrapper from './components/CardsWrapper';
import Footer from './components/Footer';

// Redux
import { fonLoadingRepos } from './redux/actions';
import { connect } from 'react-redux';

function App({ fonLoadingRepos }) {

  // Фоновая загрузка реппозиториев
  useState(() => fonLoadingRepos(), []);

  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <CardWrapper />
      </main>
      <Footer />
      <button onClick={() => fonLoadingRepos()}>CLick me</button>
    </div>
  );
}

const mapDispatchToProps = {
  fonLoadingRepos
};

export default connect(null, mapDispatchToProps)(App);
