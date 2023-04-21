import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './components/Router';
import * as deviceActions from './features/device';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    dispatch(
      deviceActions.set(
        width >= 1024 ? 'large' : width >= 768 ? 'medium' : 'small'
        /* width > 320 && width < 768
          ? 'small'
          : width >= 768 && width < 1024
          ? 'medium'
          : 'large' */
      )
    );
  }, [width, dispatch]);

  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
