import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
/* import Error from '../Error'; */

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<Error />}></Route> */}
    </Routes>
  );
};

export default Router;
