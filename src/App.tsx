import { BrowserRouter, Route, Routes } from "react-router-dom";

import Client from "./components/Client";
import Footer from "./components/Footer";
import GameDeletionModal from "./components/GameDelete.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Client />
              <GameDeletionModal />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
