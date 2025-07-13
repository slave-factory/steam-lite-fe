import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Client from "./components/Client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Client />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
