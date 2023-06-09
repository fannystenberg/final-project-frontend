import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { user } from 'reducer/user';
import { WelcomePage } from 'Components/WelcomePage/WelcomePage';
import { LocationPage } from 'Components/Locations/LocationPage';

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/locations" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
