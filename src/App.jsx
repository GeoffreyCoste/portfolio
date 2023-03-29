import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './components/Router';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
