import React from "react";
import '../assets/css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const footer = () => {


    return (
        <div className="footer-wrapper" bg='dark' sticky='bottom'>
            <div className="links-container">
            <a href="https://www.instagram.com/craftydezignz/"
                className="instagram link">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61551713246096"
                className="facebook link">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            </div>
        </div>
    )
}

export default footer;