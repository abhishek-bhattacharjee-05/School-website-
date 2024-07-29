import React from 'react';

function Students() {
  const clubsAndActivities = [
    {
      name: "Music",
      description: "Explore various musical genres and instruments, participate in school concerts and performances.",
      img: "https://images.pexels.com/photos/8520502/pexels-photo-8520502.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Dance",
      description: "Engage in different dance forms, take part in choreographed routines and dance events.",
      img: "https://plus.unsplash.com/premium_photo-1685202713512-5442057c5e77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Drama",
      description: "Participate in theatrical performances, drama workshops, and develop acting skills.",
      img: "https://plus.unsplash.com/premium_photo-1683219368443-cb52cb4bf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
    },
    {
      name: "Art",
      description: "Express creativity through various art forms including painting, drawing, and sculpture.",
      img: "https://plus.unsplash.com/premium_photo-1705844346814-4fa21166900b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8"
    },
    {
      name: "Sports",
      description: "Join sports teams, participate in competitions and enjoy physical activities.",
      img: "https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudHMlMjBkb2luZyUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Robotics",
      description: "Learn about robotics and automation through hands-on projects and competitions.",
      img: "https://plus.unsplash.com/premium_photo-1683134129583-dcdc447d36a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Debate Club",
      description: "Enhance public speaking and argumentation skills through debates and discussions.",
      img: "https://images.pexels.com/photos/17558082/pexels-photo-17558082/free-photo-of-young-woman-sitting-at-a-table-and-speaking-on-a-microphone.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Science Club",
      description: "Explore scientific concepts through experiments, projects, and discussions.",
      img: "https://plus.unsplash.com/premium_photo-1663089905440-78880eab98c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NpZW5jZSUyMGNsdWJ8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Students</h2>
        
        <section className="mb-12">
          <h4 className="text-2xl font-bold mb-4">Life at Springdale</h4>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Life at Springdale Public School is vibrant and dynamic, offering students a variety of opportunities to explore their interests, develop new skills, and build lasting friendships. Our aim is to provide a balanced education that goes beyond academics to include a wide range of extracurricular activities and clubs.
          </p>
        </section>

        <section className="mb-12">
          <h4 className="text-2xl font-bold mb-4">Extracurricular Activities</h4>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Our extracurricular programs are designed to nurture creativity, teamwork, and leadership among students. We offer a diverse array of activities to suit every interest:
          </p>
          <ul className="list-disc list-inside mb-8 text-gray-700">
            {clubsAndActivities.map((activity, index) => (
              <li key={index} className="mb-2">{activity.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="text-2xl font-bold mb-4">Clubs and Societies</h4>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Springdale is home to various clubs and societies that encourage students to pursue their passions and contribute to the school community:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubsAndActivities.map((club, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img src={club.img} alt={club.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h5 className="text-xl font-bold mb-2">{club.name}</h5>
                <p className="text-gray-700">{club.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Students;
