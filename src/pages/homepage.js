import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/css/homepage.css';
import secondslide from '../assets/img/secondslide.jpg';
import thirdslide from '../assets/img/thirdslide.jpg';
import fourthslide from '../assets/img/fourthslide.jpg';

const homepage = () => {

    return (
        <div className="homepage-wrapper">
            <div className="banner-container">
            </div>
            <div className="card-container">
            <Card as={Link} to="" className="card" >
                <Card.Header>Paintings</Card.Header>
                <Card.Img className="cardimgs" variant="top" src={thirdslide} />
            </Card>
            <Card as={Link} to="" className="card" >
                <Card.Header>Cross-Stitch</Card.Header>
                <Card.Img className="cardimgs" variant="top" src={fourthslide} />
            </Card>
            <Card as={Link} to="" className="card"  >
                <Card.Header>Custom Coasters</Card.Header>
                <Card.Img className="cardimgs" variant="top" src={secondslide} />
            </Card>
            </div>
        </div>

    )
};

export default homepage;