import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import APropos from '../pages/APropos';
import FicheLogement from '../pages/FicheLogement';
import Error from '../pages/Error404';

export default function Router() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
  )
}
