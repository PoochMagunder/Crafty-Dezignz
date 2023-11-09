import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slideshow from "../components/carousel";
import '../assets/css/homepage.css';
import '../assets/css/carousel.css';
import firstslide from '../assets/img/firstslide.jpg';
import secondslide from '../assets/img/secondslide.jpg';
import thirdslide from '../assets/img/thirdslide.jpg';
import fourthslide from '../assets/img/fourthslide.jpg';

const homepage = () => {

    const images = [
        firstslide,
        secondslide,
        thirdslide,
        fourthslide
    ]

    return (
        <div className="homepage-wrapper">
            <div className="carousel-container">
                {/* <Slideshow className="slideshow" images={images}/> */}
            </div>
            <div className="card-container">
            <Card as={Link} to="" className="card" bg="dark" >
                <Card.Header>Paintings</Card.Header>
                <Card.Img className="cardimgs" variant="top" src={thirdslide} />
            </Card>
            <Card as={Link} to="" className="card" bg="dark">
                <Card.Header>Cross-Stitch</Card.Header>
                <Card.Img className="cardimgs" variant="top" src={fourthslide} />
            </Card>
            <Card as={Link} to="" className="card" bg="dark" >
                <Card.Header>Custom Coasters</Card.Header>
                <Card.Img className="cardimgs" variant="top" src={secondslide} />
            </Card>
            </div>
        </div>

    )
};

export default homepage;