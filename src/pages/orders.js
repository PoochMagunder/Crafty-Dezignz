import React from "react";
import "../assets/css/orders.css";

import { motion } from "framer-motion";

const orders = () => {
  return (
    <motion.div
      className="orders-wrapper"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: .2} }}
    >
      <div className="card-container">
        <header className="coming-soon">Custom Orders Page Coming Soon!</header>
        <p className="coming-p">
          In the meantime, feel free to reach out through my instagram or
          facebook!
        </p>
      </div>
    </motion.div>
  );
};

export default orders;
