import { Route, Routes } from "react-router-dom";

import Client from "./components/Client";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Client />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
