<<<<<<< HEAD
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GamePage from "./components/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes>
    </Router>
=======
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
>>>>>>> d4464114aaef94cc1479042a359fe3cc4f86945f
  );
}

export default App;
