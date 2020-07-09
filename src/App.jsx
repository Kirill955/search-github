import React from 'react';

// Style
import './App.scss';

// Components
import Header from './components/Header';
import Form from './components/Form';
import CardWrapper from './components/CardsWrapper';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <CardWrapper repositories={[1,2,3,4,5,6]} />
      <Footer />
    </div>
  );
}

export default App;
