import React from "react";
import { Card } from "react-bootstrap";
import '../assets/css/coasters.css';
import '../assets/css/banners.css';
import img1 from '../assets/img/coaster imgs/coaster1.jpg';
import img2 from '../assets/img/coaster imgs/coaster2.jpg';
import img3 from '../assets/img/coaster imgs/coaster3.jpg';

const coasters = () => {

    return (
        <div className="coasters-wrapper">
            <div className="banner"></div>
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
            </div>
       </div>

    )
};

export default coasters;