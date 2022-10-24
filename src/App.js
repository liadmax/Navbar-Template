import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Hero from "./Components/Hero";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </Router>
  );
}

export default App;
