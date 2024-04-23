import React from "react";
import logo from "./image.jpg";
import "./App.css";
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/Saleemfero1/DevPortfolioGallery/tree/dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          PORTFOLIO
        </a>
      </header>
      <Home></Home>
    </div>
  );
}

export default App;
