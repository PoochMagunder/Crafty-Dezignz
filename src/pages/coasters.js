import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/coasters.css";
import img1 from "../assets/img/coaster imgs/coaster1.jpg";
import img2 from "../assets/img/coaster imgs/coaster2.jpg";
import img3 from "../assets/img/coaster imgs/coaster3.jpg";
import img4 from "../assets/img/coaster imgs/coaster4.jpg";

import { motion } from 'framer-motion';

const coasters = () => {
  return (
    <motion.div
      className="coasters-wrapper"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: .2} }}
    >
      <div className="card-container">
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img1}></Card.Img>
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img2}></Card.Img>
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img3}></Card.Img>
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img4}></Card.Img>
        </Card>
      </div>
    </motion.div>
  );
};

export default coasters;
