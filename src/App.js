import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components";
import { About, Goal, Landing, Resources } from "./pages";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Goal />} path="/goal" />
          <Route element={<Resources />} path="/resources" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
