import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.scss";
import "./styles/main.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ContextProvider from "./context/ContextProvider";
import Header from "./layout/Header";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import WhoAmI from "./pages/WhoAmI";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
