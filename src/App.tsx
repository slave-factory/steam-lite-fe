import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Cart from './components/Cart';
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
        <Route
          path="/cart"
          element={
            <>
              <Client>
                <Cart />
              </Client>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
