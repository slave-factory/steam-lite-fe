import { BrowserRouter, Route, Routes } from "react-router-dom";

import Client from "./components/Client";
import Footer from "./components/Footer";
import GameUpload from "./components/GameUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Client />
              <GameUpload />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
