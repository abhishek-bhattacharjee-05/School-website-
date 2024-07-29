import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="py-20">
      <Slider {...settings}>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slide 1" 
            className="w-full h-80 object-cover"
            style={{ height: '550px' }} 
          />
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1588075592405-d3d4f0846961?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slide 2" 
            className="w-full h-80 object-cover"
            style={{ height: '550px' }} 
          />
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slide 3" 
            className="w-full h-80 object-cover"
            style={{ height: '550px' }} 
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
