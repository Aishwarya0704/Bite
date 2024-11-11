import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Details from "./pages/details.tsx";
import Header from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <div className="mt-16 mb-8 px-6 lg:px-10">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
