// <!-- -----------------------------------------------------------------------------------
// *  
// *  File: App.js
// *  Desc: 
// * 
// *  Date     Eng          Change Description
// *  -------------------------------------------------------------------------------------
// *  8/26/24  MIntriago    Initial version.
// * 
// ------------------------------------------------------------------------------------ -->

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Global from "./components/Global";
import ConditionalHeader from './components/ConditionalHeader';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import Notes from "./pages/Notes";
import Sp from "./pages/Sp";

function App() {
  return (
    <div className="App">
      <Global />
      <Router basename={process.env.PUBLIC_URL}>
        <ConditionalHeader  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/notes" element={<Notes />} /> */}
          <Route path="/sp" element={<Sp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;