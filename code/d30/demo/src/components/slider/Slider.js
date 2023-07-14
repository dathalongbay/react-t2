import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // tạo 2 arrow function 

  return (
    <div className="slider">
      <button onClick={handlePrevious}>Previous</button>
      <img src={images[currentImageIndex]} alt="Slider" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slider;
