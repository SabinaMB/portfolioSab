import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import { ScanServeDetails } from './components/Projects/ProjectsDetails/ScanServeDetails';

import './index.css'

import '@fontsource/outfit'
import '@fontsource/roboto'
import '@fontsource/open-sans'
import '@fontsource/alegreya'
import '@fontsource/montserrat'
import '@fontsource/barlow-condensed'
import '@fontsource/oswald'


/* import MyPortfolioDetails from './components/Projects/ProjectDetails/MyPortfolioDetails';
import PetMedRecordsDetails from './components/Projects/ProjectDetails/PetMedRecordsDetails'; */

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/scan-serve-details" element={<ScanServeDetails/>} />
        {/* <Route path="/projects/my-portfolio-details" component={MyPortfolioDetails} />
        <Route path="/projects/pet-med-records-details" component={PetMedRecordsDetails} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
);