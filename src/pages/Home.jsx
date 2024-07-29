import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="bg-gray-100 ">
    {/* Hero Section */}
    <section className="relative bg-blue-200 text-black text-center py-20">
      {/* School Photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1671917057310-88d5fd951ece?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Springdale Public School"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-40"
        />
      </div>
        <h1 className="text-5xl font-bold">Welcome to Springdale Public School</h1>
        <p className="mt-4 text-lg">Nurturing young minds for a bright future</p>
      </section>


      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
          <p className="text-lg text-center">
            Springdale Public School is dedicated to providing a comprehensive educational experience that fosters intellectual growth, creativity, and character development in a supportive and inclusive environment.
          </p>
        </div>
      </section>
    
      <Carousel />

     
      <section className="bg-gray-200 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sports</h3>
              <p className="text-lg">We offer a variety of sports programs that promote teamwork, discipline, and healthy living.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Arts & Crafts</h3>
              <p className="text-lg">Our arts and crafts activities encourage creativity and self-expression in students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Science Club</h3>
              <p className="text-lg">The science club provides hands-on learning experiences and fosters a love for scientific discovery.</p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNcHAR2PfwNbXQR55VqnGCnLk45tRA0CwSQ&s"
                alt="Gallery Photo 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>


            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>


            <div className="relative">
              <img
                src="https://images.pexels.com/photos/10646410/pexels-photo-10646410.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Gallery Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2968077/pexels-photo-2968077.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery Photo 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc2NpZW5jZSUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Facility 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">State-of-the-Art Science Lab</h3>
              <p className="text-gray-700">
                Our science lab is equipped with the latest technology to enhance hands-on learning and experiments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Facility 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Modern Library</h3>
              <p className="text-gray-700">
                Our library offers a vast collection of books and resources in a comfortable, well-lit environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1709932754899-5c36599fface?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwdGVubmlzJTIwY291cnR8ZW58MHx8MHx8fDA%3D"
                alt="Facility 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sports Complex</h3>
              <p className="text-gray-700">
                The sports complex includes various facilities for indoor and outdoor sports to promote physical fitness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/4442040/pexels-photo-4442040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Facility 4"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Creative Arts Studio</h3>
              <p className="text-gray-700">
                Our arts studio provides a space for students to explore their creativity through various art forms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
                alt="Facility 5"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Technology Hub</h3>
              <p className="text-gray-700">
                The technology hub is equipped with modern computers and tech resources to support digital learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/3952080/pexels-photo-3952080.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Facility 6"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Cafeteria</h3>
              <p className="text-gray-700">
                Our cafeteria offers a variety of nutritious meals in a welcoming and social atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-gray-200 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">"Springdale Public School has been a wonderful place for my child's growth and development."</p>
              <p className="mt-4 text-right">- Parent</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">"The teachers are very supportive and the activities are well-rounded."</p>
              <p className="mt-4 text-right">- Student</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">"A fantastic school with a great community spirit."</p>
              <p className="mt-4 text-right">- Alumni</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
