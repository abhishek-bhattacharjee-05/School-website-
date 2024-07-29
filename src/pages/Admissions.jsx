// Admissions.jsx
import React from 'react';
import AdmissionForm from '../components/AdmissionForm';  // Adjust the path as necessary

function Admissions() {
  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Admissions</h2>
        
        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Admissions</h4>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            To apply for admission at Springdale Public School, please fill out the form below and submit it. Alternatively, you can download and print the admission form:
          </p>
          <a href="/path-to-admission-form.pdf" download className="text-blue-600 hover:underline mb-4 block">Download Admission Form</a>
        </div>

        <div className="mb-8">
          <AdmissionForm />
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Criteria</h4>
          <p className="text-lg md:text-xl text-gray-600">
            Admission is based on merit and the availability of seats. Please note that entrance tests may be conducted for certain grades to assess the suitability of applicants.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Important Dates</h4>
          <p className="text-lg md:text-xl text-gray-600">
            <strong>Admission Form Availability:</strong> March 1st
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            <strong>Last Date for Submission:</strong> March 31st
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            <strong>Entrance Test:</strong> April 15th
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            <strong>Announcement of Results:</strong> April 30th
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            We encourage all prospective students and parents to adhere to these important dates to ensure a smooth admission process. For any queries or further information, please contact our admissions office.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
