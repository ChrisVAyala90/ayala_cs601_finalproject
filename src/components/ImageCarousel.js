import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const images = [
    {
      src: `${process.env.PUBLIC_URL}/images/hero1.jpg`,
      alt: 'Photo of a law library'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/hero2.jpg`,
      alt: 'Photo of Lady Justice statue'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/hero3.jpg`,
      alt: 'Photo of a law statue'
    }
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} aria-label="Image Carousel">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
