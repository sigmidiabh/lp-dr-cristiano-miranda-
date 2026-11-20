import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { EmagrecimentoPage } from './pages/EmagrecimentoPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/emagrecimento" element={<EmagrecimentoPage />} />
        {/* Rotas futuras: /saude-mental e /cardiologia-integrativa */}
        <Route path="*" element={<Navigate to="/emagrecimento" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
