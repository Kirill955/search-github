import React from 'react';

// Style
import './App.scss';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="h1">Hello react !</div>
      <Footer />
    </div>
  );
}

export default App;
