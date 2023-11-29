import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/cross-stitch.css";
import img1 from "../assets/img/cross-stitch imgs/crashbandicoot.jpg";
import img2 from "../assets/img/cross-stitch imgs/keychain.jpg";
import img3 from "../assets/img/cross-stitch imgs/ninjaturtles.jpg";
import img4 from "../assets/img/cross-stitch imgs/snorlax.jpg";
import img5 from "../assets/img/cross-stitch imgs/totodile.jpg";
import img6 from "../assets/img/cross-stitch imgs/walleandeva.jpg";
import img7 from "../assets/img/cross-stitch imgs/snoopyandwoodstock.jpg";

import { motion } from "framer-motion";

const stitch = () => {
  return (
    <motion.div
      className="stitch-wrapper"
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
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img5}></Card.Img>
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img6}></Card.Img>
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img7}></Card.Img>
        </Card>
      </div>
    </motion.div>
  );
};

export default stitch;
