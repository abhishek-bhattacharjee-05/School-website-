import React from 'react';

function Faculty() {
  const facultyMembers = [
    {
      name: "John Doe",
      title: "Principal",
      qualifications: "M.Ed",
      experience: "20 years in educational administration",
      profile: "As the principal, John Doe brings two decades of expertise in educational leadership. His vision and dedication ensure that Springdale Public School maintains its high standards of academic excellence and holistic development.",
      img: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Jane Smith",
      title: "Vice Principal",
      qualifications: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
      profile: "Jane Smith is a passionate educator with a strong background in physics. Her role as vice principal allows her to support the academic and administrative functions of the school, ensuring a well-rounded education for all students.",
      img: "https://images.unsplash.com/photo-1664574652984-5b5f769bef07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Emily Johnson",
      title: "English Teacher",
      qualifications: "M.A. in English",
      experience: "10 years of teaching experience",
      profile: "Emily Johnson's expertise in English literature and language, combined with her decade of teaching experience, inspires students to develop a love for reading and effective communication skills.",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVuZ2xpc2glMjB0ZWFjaGVyfGVufDB8fDB8fHww"
    },
    {
      name: "Isabella Martinez",
      title: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
      profile: "Isabella Martinez's enthusiasm for mathematics makes learning the subject engaging and accessible. Her innovative teaching methods help students grasp complex mathematical concepts with ease.",
      img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Sophia Davis",
      title: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
      profile: "With a strong background in chemistry, Sophia Davis brings a wealth of knowledge and experience to the classroom. Her dynamic teaching style encourages students to explore the wonders of science.",
      img: "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "David Wilson",
      title: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
      profile: "David Wilson's proficiency in computer science and modern technologies equips students with the skills needed in today's digital world. His hands-on approach to teaching makes learning interactive and fun.",
      img: "https://images.pexels.com/photos/24394819/pexels-photo-24394819/free-photo-of-man-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Faculty</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">Our dedicated and experienced faculty members are committed to providing high-quality education and fostering a nurturing learning environment. Meet some of our esteemed educators:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={member.img} alt={member.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
              <p className="text-xl font-semibold text-blue-500 mb-2">{member.title}</p>
              <p className="text-gray-700 mb-2"><span className="font-bold">Qualifications:</span> {member.qualifications}</p>
              <p className="text-gray-700 mb-2"><span className="font-bold">Experience:</span> {member.experience}</p>
              <p className="text-gray-700">{member.profile}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
