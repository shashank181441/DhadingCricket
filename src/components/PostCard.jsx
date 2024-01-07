import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const loadImageSrc = async () => {
      try {
        const imageUrl = await appwriteService.getFilePreview(featuredImage);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImageSrc();
  }, [featuredImage]);

  return (
    
<Link to={`/post/${$id}`} className="block w-full mb-6">
  <div className="bg-white border border-gray-300 rounded-md overflow-hidden p-4 transition-all duration-300 hover:shadow-lg">
    <div className="w-full mb-4">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="rounded-md object-cover w-full h-40"
        />
      )}
    </div>
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
  </div>
</Link>


    
  );
}

export default PostCard;
