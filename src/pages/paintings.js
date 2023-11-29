import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/paintings.css";
import img1 from "../assets/img/painting imgs/pumpkins.jpg";
import img2 from "../assets/img/painting imgs/beehome.jpg";
import img3 from "../assets/img/painting imgs/bookstack.jpg";
import img4 from "../assets/img/painting imgs/bulbasaur.jpg";
import img5 from "../assets/img/painting imgs/cloudpokeball.jpg";
import img6 from "../assets/img/painting imgs/cubone.jpg";
import img7 from "../assets/img/painting imgs/grinchandjack.jpg";
import img8 from "../assets/img/painting imgs/harrypottermascots.jpg";
import img9 from "../assets/img/painting imgs/narutopokemon.jpg";
import img10 from "../assets/img/painting imgs/succulents.jpg";
import img11 from "../assets/img/painting imgs/sunflowerhome.jpg";
import img12 from "../assets/img/painting imgs/weedgnome.jpg";
import img13 from "../assets/img/painting imgs/babyyoda.jpg";
import img14 from "../assets/img/painting imgs/ladybugwelcome.jpg";
import img15 from "../assets/img/painting imgs/redneckridge.jpg";

import { motion } from "framer-motion";

const paintings = () => {
  return (
    <motion.div
      className="paintings-wrapper"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: .2} }}
    >
      <div className="card-container">
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img1} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img2} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img3} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img4} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img5} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img6} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img7} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img8} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img9} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img10} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img11} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img12} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img13} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img14} />
        </Card>
        <Card className="card">
          <Card.Img className="cardimgs" variant="top" src={img15} />
        </Card>
      </div>
    </motion.div>
  );
};

export default paintings;
