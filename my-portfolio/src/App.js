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
import "./App.css";
import Header from "./components/Header";
import Global from "./components/Global";
import Home from "./pages/Home";
import About from "./pages/Projects";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <Global />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<About />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;