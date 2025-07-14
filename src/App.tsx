import { BrowserRouter, Route, Routes } from "react-router-dom";

import Client from "./components/Client";
import Footer from "./components/Footer";
import GameSelector from "./components/GameSelector";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Client />
              <GameSelector />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
