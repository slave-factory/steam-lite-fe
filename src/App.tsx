import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GamePage from "./components/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
