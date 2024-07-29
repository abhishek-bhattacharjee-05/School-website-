import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(null);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid.';
    if (!formData.message) errors.message = 'Message is required.';
    return errors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormSuccess('Your message has been sent successfully!');
      setFormErrors({});
   
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormErrors(errors);
      setFormSuccess(null);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className=" text-black p-6 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      <main className="container mx-auto py-8 px-4">
       
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
          <p className="mb-6">We would love to hear from you! Whether you have a question about our programs, need assistance with the admissions process, or just want to know more about Springdale Public School, our team is here to help.</p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-4">
              <strong>School Address:</strong><br />
              Springdale Public School<br />
              123 Education Lane<br />
              Cityville, State, ZIP Code
            </p>
            <p className="mb-4">
              <strong>Phone:</strong><br />
              +1 (123) 456-7890
            </p>
            <p className="mb-4">
              <strong>Email:</strong><br />
              <a href="mailto:info@springdale.edu" className="text-blue-600 hover:underline">info@springdale.edu</a>
            </p>
            <p className="mb-4">
              <strong>Office Hours:</strong><br />
              Monday to Friday: 8:00 AM - 5:00 PM<br />
              Saturday and Sunday: Closed
            </p>
          </div>
        </section>

       
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Form</h2>
          {formSuccess && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
              {formSuccess}
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
              {formErrors.name && <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
              {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Your Message"
              />
              {formErrors.message && <p className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
