import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import "./styles.css";
import AppGH from "./app.gh.tsx";
import { tgReady } from "./telegram";

// Init Telegram Mini App
tgReady();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router base="/rassrochka-auto">
      <AppGH />
    </Router>
  </StrictMode>
);
