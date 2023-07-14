import React from 'react';
import Slider from './components/Slider';

function App() {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image paths here
  ];

  return (
    <div className="App">
      <h1>Image Slider</h1>
      <Slider images={images} />
    </div>
  );
}

export default App;
