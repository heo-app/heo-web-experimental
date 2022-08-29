import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../components/login';

export const customRoutes = (
  <Routes>
    <Route path="/" element={<div>this is root!</div>} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);
