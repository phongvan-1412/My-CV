import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Routes, Route,Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Header 
import Header from './Components/Header';
//Home
import Home from './Components/Home';
//Footer
import Footer from './Components/Footer';

class HomePage extends Component{
  state={
    info: []
  }
  render(){
    return(
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Footer />
      </div>
    )
  }
}
export default HomePage;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <HomePage style={{ padding: "0px", margin: "0px" }} />
  </BrowserRouter>
);

