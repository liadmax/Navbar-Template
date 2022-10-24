import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "./Pages/HomePage/Home";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
      <Route path="Home" exact component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
