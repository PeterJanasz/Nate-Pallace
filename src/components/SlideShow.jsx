// components/SlideShow.jsx
import React, { useState, useRef, useEffect } from 'react';
import "../App.css";  // Import the CSS file

const SlideShow = ({ images, descriptions }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = useRef(images.map(() => React.createRef()));

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) { // Left arrow key
      prevImage();
    } else if (e.keyCode === 39) { // Right arrow key
      nextImage();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Add or remove event listener on component mount/unmount

  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? prevImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto relative">
        <div className="carousel w-full rounded-xl overflow-hidden relative">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div
              className={`h-120 sm:h-80 md:h-80 lg:h-96 w-full flex-shrink-0 ${currentImage === i ? '' : 'hidden'}`}
              key={img}
              ref={refs.current[i]}
            >
              <img src={img} className="object-cover h-full w-full rounded-md" alt={`Slide ${i + 1}`} />
              <div className="description">{descriptions && descriptions[i]}</div>
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
