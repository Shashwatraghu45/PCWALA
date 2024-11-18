import React from 'react';
import HomeCarouselData from './HomeCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function HomeCarousel() {
  const items = HomeCarouselData.map((item) => (
    <img
      className="w-full h-96  cursor-pointer"
      role="presentation"
      src={item.image}
      alt="Offer Banner"
    />
  ));

  return (
    <div className="w-full h-full  ">
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
      />
    </div>
  );
}

export default HomeCarousel;
