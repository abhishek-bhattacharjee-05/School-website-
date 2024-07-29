import React, { useState } from 'react';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
    address: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.age || isNaN(formData.age)) tempErrors.age = "Valid age is required";
    if (!formData.grade) tempErrors.grade = "Grade is required";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone || isNaN(formData.phone)) tempErrors.phone = "Valid phone number is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
      // Add the logic to download the form or send it to the server here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-lg font-medium text-gray-700">Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700">Age</label>
        <input 
          type="text" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          className={`w-full p-3 border rounded-md ${errors.age ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700">Grade</label>
        <input 
          type="text" 
          name="grade" 
          value={formData.grade} 
          onChange={handleChange} 
          className={`w-full p-3 border rounded-md ${errors.grade ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.grade && <p className="text-red-500 text-sm">{errors.grade}</p>}
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700">Address</label>
        <input 
          type="text" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          className={`w-full p-3 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700">Phone</label>
        <input 
          type="text" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          className={`w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
    </form>
  );
}

export default AdmissionForm;
