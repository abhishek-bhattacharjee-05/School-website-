import React from 'react';

const Gallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-black p-6 text-center">
        <h1 className="text-4xl font-bold">Springdale Public School Gallery</h1>
      </header>

      <main className="container mx-auto py-8 px-4">
       
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery Photo 4"
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg">Science Fair - Innovative student projects.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/3425993/pexels-photo-3425993.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Photo 2"
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg">Sports Day - Fun and competitive events.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/2559741/pexels-photo-2559741.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Photo 3"
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg">Art Exhibition - Showcasing student creativity.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/12499181/pexels-photo-12499181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery Photo 4"
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg">Science Fair - Innovative student projects.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1553599275-5a599fb1cadc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
                alt="Gallery Photo 5"
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg">Cultural Fest - Celebrating diverse cultures.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1683841528606-c51a3d7002ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmllbGQlMjB0cmlwfGVufDB8fDB8fHww"
                alt="Gallery Photo 6"
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg">Field Trip - Exploring new places and experiences.</p>
              </div>
            </div>
          </div>
        </section>

    
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-64 object-cover rounded-lg"
                src="https://www.youtube.com/embed/example1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Gallery Video 1"
              ></iframe>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-64 object-cover rounded-lg"
                src="https://www.youtube.com/embed/example2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Gallery Video 2"
              ></iframe>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-64 object-cover rounded-lg"
                src="https://www.youtube.com/embed/example3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Gallery Video 3"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
