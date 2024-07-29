import React from 'react';

function Academics() {
  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Academics</h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Information about the curriculum offered.
        </p>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Curriculum</h4>

          <div className="mb-8">
            <h6 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Primary (Grades 1-5)</h6>
            <p className="text-lg md:text-xl text-gray-600">
              Our primary curriculum is designed to build a strong foundation in essential subjects while fostering creativity and physical development. The subjects offered include:
            </p>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-600 mt-2 ml-4">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>

          <div className="mb-8">
            <h6 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Secondary (Grades 6-10)</h6>
            <p className="text-lg md:text-xl text-gray-600">
              At the secondary level, students are introduced to more specialized subjects to prepare them for higher education. The subjects offered include:
            </p>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-600 mt-2 ml-4">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>

          <div className="mb-8">
            <h6 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Senior Secondary (Grades 11-12)</h6>
            <p className="text-lg md:text-xl text-gray-600">
              We offer two streams at the senior secondary level to cater to the diverse interests and career aspirations of our students.
            </p>
            <h6 className="text-lg md:text-xl font-semibold text-gray-700 mt-4">Science Stream:</h6>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-600 mt-2 ml-4">
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>English</li>
            </ul>
            <h6 className="text-lg md:text-xl font-semibold text-gray-700 mt-4">Commerce Stream:</h6>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-600 mt-2 ml-4">
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Mathematics</li>
              <li>English</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Teaching Methodologies</h4>
          <p className="text-lg md:text-xl text-gray-600">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our educators are dedicated to creating an engaging and inclusive classroom environment that encourages active participation and critical thinking.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Educational Resources</h4>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            To enhance the learning experience, we provide a range of educational resources:
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl text-gray-600 mt-2 ml-4">
            <li>Digital Classrooms: Equipped with the latest technology to facilitate interactive learning.</li>
            <li>Interactive Learning Modules: Designed to make complex concepts easier to understand through visual and hands-on activities.</li>
            <li>Access to Online Educational Platforms: Offering a wealth of resources and learning opportunities beyond the classroom.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Academics;
