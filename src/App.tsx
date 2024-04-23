import React from "react";
import logo from "./blob.svg";
import "./App.css";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>BATMAN</p>
        <a
          className="App-link"
          href="https://github.com/Saleemfero1/DevPortfolioGallery/tree/dev"
          target="_blank"
          rel="noopener noreferrer">
          PORTFOLIO
        </a>
      </header>
    </div>
  );
}

export default App;
