"use client";

import { useState, useRef, useEffect } from "react";

const ImageBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div className="banner-images">
      <img
        className="low-res-img"
        src="low_res/banner.jpeg"
        alt="banner-res-low"
      />
      <img
        ref={imgRef}
        className="high-res-img"
        src="med_res/banner.png"
        alt="med-res"
        style={{ opacity: imageLoaded ? 1 : 0 }}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>The Web Store</h1>
          </div>
          <div>
            <button>Shop stickers</button>
            <button>Shop banners</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
