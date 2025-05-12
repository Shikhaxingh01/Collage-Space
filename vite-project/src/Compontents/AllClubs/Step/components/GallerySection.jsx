import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Annual Speaking Competition',
    description: 'Our members showcasing their speaking skills at the annual competition.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Workshop Session',
    description: 'Interactive workshop on vocal techniques and delivery.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Guest Speaker Event',
    description: 'Learning from industry professionals and experienced speakers.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80',
    title: 'Group Practice Session',
    description: 'Members practicing together and providing feedback to each other.',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
    title: 'Debate Tournament',
    description: 'Club members participating in the inter-college debate tournament.',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    title: 'Awards Ceremony',
    description: 'Celebrating achievements at our annual awards night.',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (id) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const currentImage = galleryImages.find((img) => img.id === selectedImage);

  return (
    <section id="gallery" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#FACC15]">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Glimpses from our events, workshops, and competitions showcasing the journey of our members.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-left">
                  <h3 className="text-white font-bold">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Lightbox */}
        {selectedImage !== null && currentImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <XIcon size={24} />
              </button>
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="bg-[#121212] p-4 mt-2 rounded-lg">
                <h3 className="text-white font-bold text-xl">{currentImage.title}</h3>
                <p className="text-gray-400">{currentImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
