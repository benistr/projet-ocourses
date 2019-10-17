
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Janvier from '../Season/Janvier.jpg';
import Février from '../Season/Février.jpg';
import Mars from '../Season/Mars.jpg';
import Avril from '../Season/Avril.jpg';
import Mai from '../Season/Mai.jpg';
import Juin from '../Season/Juin.jpg';
import Juillet from '../Season/Juillet.jpg';
import Aout from '../Season/Aout.jpg';
import Septembre from '../Season/Septembre.jpg';
import Octobre from '../Season/Octobre.jpg';

import './carousel.scss'
 
const Carousel = () => {

  const handleOnDragStart = e => e.preventDefault()

  return (
    <AliceCarousel mouseDragEnabled >
      <img src={Janvier} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Février} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Mars} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Avril} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Mai} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Juin} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Juillet} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Aout} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Septembre} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={Octobre} onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
  )
}

export default Carousel;
