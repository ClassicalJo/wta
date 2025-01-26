import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

import App from './App';
import Layout from './components/common/layout/Layout';
import { BackgroundProvider } from './context/BackgroundPosition';
import Characters from './pages/characters/Characters';
import CreateCharacter from './pages/characters/CreateCharacter';
import ReadCharacter from './pages/characters/ReadCharacter';
import CreateGift from './pages/gifts/CreateGift';
import Gifts from './pages/gifts/Gifts';
import ReadGift from './pages/gifts/ReadGift';
import CreateRitual from './pages/rituals/CreateRitual';
import ReadRitual from './pages/rituals/ReadRitual';
import Rituals from './pages/rituals/Rituals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <BackgroundProvider>
      <ToastContainer limit={2} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route path='/character'>
              <Route index element={<Characters />} />
              <Route path='create' element={<CreateCharacter />} />
              <Route path=':characterId' element={<ReadCharacter />} />
            </Route>
            <Route path='/gift'>
              <Route index element={<Gifts />} />
              <Route path='create' element={<CreateGift />} />
              <Route path=':giftId' element={<ReadGift />} />
            </Route>
            <Route path='/ritual'>
              <Route index element={<Rituals />} />
              <Route path='create' element={<CreateRitual />} />
              <Route path=':ritualId' element={<ReadRitual />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </BackgroundProvider>
  </>,
);
