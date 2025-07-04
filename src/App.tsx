import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Client from "./components/Client";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
