import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css';

import Img1 from './image/img1.png'
import Img2 from './image/img2.jpg'
import Img3 from './image/img3.jpg'
import Image4 from './image/image4.jpeg'
import Image5 from './image/image5.png'
import Image6 from './image/image6.jpg'
import Image7 from './image/image7.jpg'
import Image8 from './image/image8.png'
import Image9 from './image/image9.png'
import Image10 from './image/image10.jpg'
import Image11 from './image/image11.png'
import Img12 from './image/img12.jpg'
import Image13 from './image/image13.png'
import Image14 from './image/image14.png'
import Image15 from './image/image15.png'
import Image16 from './image/image16.jpg'
import Image17 from './image/image17.png'
import Image19 from './image/image19.jpg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000,
      rtl: false
    };
    return (
      <div className="slide">
        <h2 className="client">Наши клиенты</h2>
        <Slider {...settings}>
          <div>
          <img className="image" src={Img1}></img>
          </div>
          <div>
          <img className="image" src={Img2}></img>
          </div>
          <div>
          <img className="image" src={Img3}></img>
          </div>
          <div>
          <img className="image" src={Image4}></img>
          </div>
          <div>
          <img className="image" src={Image5}></img>
          </div>
          <div>
          <img className="image" src={Image6}></img>
          </div>
          <div>
          <img className="image" src={Image7}></img>
          </div>
          <div>
          <img className="image" src={Image8}></img>
          </div>
          <div>
          <img className="image" src={Image9}></img>
          </div>
          <div>
          <img className="image" src={Image10}></img>
          </div>
          <div>
          <img className="image" src={Image11}></img>
          </div>
          <div>
          <img className="image" src={Img12}></img>
          </div>
          <div>
          <img className="image" src={Image13}></img>
          </div>
          <div>
          <img className="image" src={Image14}></img>
          </div>
          <div>
          <img className="image" src={Image15}></img>
          </div>
          <div>
          <img className="image" src={Image16}></img>
          </div>
          <div>
          <img className="image" src={Image17}></img>
          </div>
          <div>
          <img className="image" src={Image19}></img>
          </div>
        </Slider>
      </div>
    );
  }
}