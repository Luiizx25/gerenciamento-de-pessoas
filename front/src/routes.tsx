import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CreatePeople from './pages/CreatePeople';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route element={<CreatePeople />} path="/create-people" />
    </BrowserRouter>
  )
}

export default Routes;