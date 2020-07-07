import React from 'react';

// Style
import './App.scss';

// Components
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
