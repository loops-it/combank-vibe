import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://it-marketing.website/vibe-backend/api/get-completed-images');
        setImages(response.data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <h1>{image.name}</h1>
      ))}
    </div>
  );
};

export default MyComponent;