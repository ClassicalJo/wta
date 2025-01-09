import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

import App from './App';
import Characters from './pages/characters/Characters';
import CreateCharacter from './pages/characters/CreateCharacter';
import ReadCharacter from './pages/characters/ReadCharacter';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/characters'>
          <Route index element={<Characters />} />
          <Route path='create' element={<CreateCharacter />} />
          <Route path=':characterId' element={<ReadCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
);
