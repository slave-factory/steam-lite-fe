import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Client from "./components/Client";
import Footer from "./components/Footer";
import ReviewModal from "./components/Review";

function App() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Client>
                <DemoButton onClick={() => setIsReviewModalOpen(true)}>
                  리뷰 작성하기
                </DemoButton>
              </Client>
              <Footer />
              <ReviewModal
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                gameName="Elden Ring"
              />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const DemoButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 32px;
  background: var(--Background-Highlight, #1e2329);
  border: 1px solid rgba(102, 192, 244, 0.4);
  color: var(--Text-Main, #f3f3f3);
  font-family:
    Roboto,
    -apple-system,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--border-radius, 3px);
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: rgba(30, 35, 41, 0.9);
    border-color: rgba(102, 192, 244, 0.6);
    transform: translate(-50%, -50%) translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translate(-50%, -50%) translateY(0);
  }
`;

export default App;
