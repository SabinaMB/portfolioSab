import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { TranslatorDetails } from "./components/Projects/ProjectsDetails/TranslatorDetails";
import { GuessNrDetails } from "./components/Projects/ProjectsDetails/GuessNrDetails";
import { ChatBotDetails } from "./components/Projects/ProjectsDetails/ChatBotDetails";
import { ScanServeDetails } from "./components/Projects/ProjectsDetails/ScanServeDetails";
import { MyPortfolioDetails } from "./components/Projects/ProjectsDetails/MyPortfolioDetails";
import { PetRecordsDetails } from "./components/Projects/ProjectsDetails/PetRecordsDetails";

import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@fontsource/alegreya";
import "@fontsource/montserrat";
import "@fontsource/barlow-condensed";
import "@fontsource/oswald";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/number-guessing-details" element={<GuessNrDetails />} />
        <Route path="/translator-details" element={<TranslatorDetails />} />
        <Route path="/chat-bot-details" element={<ChatBotDetails />} />
        <Route path="/scan-serve-details" element={<ScanServeDetails />} />
        <Route path="/my-portfolio-details" element={<MyPortfolioDetails />} />
        <Route path="pet-records-details" element={<PetRecordsDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
