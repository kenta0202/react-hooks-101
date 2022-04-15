import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./pages/Event";
import { NotFound } from "./pages/NotFound";

const RoutesConfig: React.VFC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={() => <Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
export default RoutesConfig;
