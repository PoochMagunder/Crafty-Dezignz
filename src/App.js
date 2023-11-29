import React from "react";
import {
  BrowserRouter as Router } from "react-router-dom";
import "./assets/css/transition.css";
import Nav from "./components/navigation";
import Footer from "./components/footer";
import BruceBanner from "./components/BruceBanner";
import AnimatedRoutes from "./components/AnimatedRoutes";

const Banner = ({ children }) => (
  <div>
    <BruceBanner />
    {children}
  </div>
);

function App() {

  return (
    <Router>
      <Nav />
      <Banner />
          <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
