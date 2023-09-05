import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselItem = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1566207462754-97c86c31db3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Why Are Product Titles Essential in Ecommerce?</h3>
            <p>
            A product title is something where you list your product in an eCommerce store with a title providing all the required information regarding your product, <br /> thus helping users to perceive your product better. 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Industry Based Product Titles – B2B vs B2C</h3>
            <p>
            Product titles differ based on the area your business relies on. B2B and B2C titles vary in nature. Creating the right B2B/B2C titles is a form of art. <br /> B2C titles come under all the categories mentioned above.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The right way will help you in uplifting your business.</h3>
            <p>
            Words have the power to make or break anything, so using it the right way will help you in uplifting your business. <br /> Here’s how you can write and optimize your product titles:
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselItem;
