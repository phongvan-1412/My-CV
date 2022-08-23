import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Routes, Route,Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

class HomePage extends Component{
  state={
    info: []
  }
  render(){
    return(
      <div>Hello</div>
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

