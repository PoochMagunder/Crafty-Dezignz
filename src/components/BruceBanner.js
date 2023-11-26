import React from 'react';
import '../assets/css/brucebanner.css';
import video from '../assets/img/banners/CraftyDezignz - DAY - NIGHT_01.mp4';

const BruceBanner = () => {

  return (

  <div className="banner">
  <video autoPlay loop muted className="banner-video" controls>
      <source src={video} type="video/mp4" />
  </video>
</div>

  )
};
  
  export default BruceBanner;