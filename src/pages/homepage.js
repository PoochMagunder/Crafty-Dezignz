import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import coasters from "../assets/img/coaster imgs/coaster1.jpg";
import paintings from "../assets/img/painting imgs/pumpkins.jpg";
import stitches from "../assets/img//cross-stitch imgs/ninjaturtles.jpg";
import "../assets/css/homepage.css";
import { motion } from "framer-motion";

const homepage = () => {
  return (
    <motion.div
      className="homepage-wrapper"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: .2} }}
    >
      <div className="card-container">
        <Card as={Link} to="/paintings" className="card">
          <Card.Header>Paintings</Card.Header>
          <Card.Img className="cardimgs" variant="top" src={paintings} />
        </Card>
        <Card as={Link} to="/cross-stitch" className="card">
          <Card.Header>Cross-Stitch</Card.Header>
          <Card.Img className="cardimgs" variant="top" src={stitches} />
        </Card>
        <Card as={Link} to="/coasters" className="card">
          <Card.Header>Custom Coasters</Card.Header>
          <Card.Img className="cardimgs" variant="top" src={coasters} />
        </Card>
      </div>
    </motion.div>
  );
};

export default homepage;
