import React from 'react';

function AboutUs() {
  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">About Us</h2>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">History</h4>
          <p className="text-lg md:text-xl text-gray-600">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Over the years, we have established ourselves as a beacon of academic excellence and a nurturing environment for young minds.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Vision</h4>
          <p className="text-lg md:text-xl text-gray-600">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values. We strive to prepare our students to become responsible, thoughtful, and engaged members of society.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Mission</h4>
          <p className="text-lg md:text-xl text-gray-600">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. We are committed to delivering a well-rounded education that supports the intellectual, emotional, and social growth of every student.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Principal's Message</h4>
          <p className="text-lg md:text-xl text-gray-600">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated faculty and staff are committed to creating a supportive and challenging learning environment where each student can achieve their best.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Infrastructure and Facilities</h4>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            <strong>State-of-the-art Science and Computer Labs:</strong> Our advanced laboratories provide students with hands-on learning experiences in the fields of science and technology.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            <strong>Spacious and Well-Equipped Classrooms:</strong> Designed to enhance learning, our classrooms are equipped with modern teaching aids and comfortable seating arrangements.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            <strong>Library with a Vast Collection of Books and Digital Resources:</strong> Our library is a hub of knowledge, offering a wide range of books, journals, and digital resources to support student learning and research.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            <strong>Sports Facilities including a Playground, Gymnasium, and Swimming Pool:</strong> We believe in the importance of physical education and offer a variety of sports facilities to promote a healthy and active lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
