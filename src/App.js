import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrinkDetail from "./components/DrinkDetail/DrinkDetail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="drink/:drinkID" element={<DrinkDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
