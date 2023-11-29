import React from "react";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from "../pages/homepage";
import Paintings from "../pages/paintings";
import Stitch from "../pages/cross-stitch";
import Coasters from "../pages/coasters";
import Orders from "../pages/orders";

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/paintings" element={<Paintings />} />
      <Route path="/cross-stitch" element={<Stitch />} />
      <Route path="/coasters" element={<Coasters />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
