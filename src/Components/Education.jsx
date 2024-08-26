import React, { useState } from 'react';

const DropdownSection = ({ title, items, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full text-left p-4 flex items-center justify-between text-lg font-semibold text-gray-700 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="p-4 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start">
              <svg
                className={`w-5 h-5 ${icon === 'plus' ? 'text-blue-500' : 'text-green-500'} mr-2 mt-1 flex-shrink-0`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {icon === 'plus' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                )}
              </svg>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      years: "2024 - 2026",
      degree: "Master's in Software Engineering",
      institution: "Arizona State University",
      gpa: "3.44/4.0 GPA",
      relevantCourses: [
        "Data Mining",
        "Software Foundations",
        "Human Computer Interaction",
        "Software Project Process Quality Managemnet",
      ],
      achievements: [
        "Member of ASU Soda club",
        "Volunteer for Sky Meditation Workshop"
      ],
      extracurricular: [
        "Member of ASU Soda club",
        "Volunteer for Sky Meditation Workshop"
      ]
    },
    {
      years: "2019 - 2023",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indus University",
      gpa: "9.30/10.00 CGPA",
      relevantCourses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Web Development",
        "Machine Learning",
        "BlockChain"
      ],
      achievements: [
        "Core Member of Rotract Club (Social Service, Leadership and Character Building)",
        "Undergraduate Project Award - Top 5% Distinction"
      ],
     
    },
    {
      years: "2018 - 2019",
      degree: "High School Diploma",
      institution: "Kendriya Vidyalaya",
      gpa: "70 %",
      achievements: [
        "Winner of Inter-school Science Exhibition",
        "Captain of School Volleyball Team",
        "Swimming State Level Gold Medalist"
      ],
      extracurricular: [
        "Captain of School Volleyball Team",
        "Swimming State Level Gold Medalist"
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 ">
      <h2 className="text-4xl font-extrabold mb-12 text-emerald-700 text-center">EDUCATION</h2>
      <div className="relative pl-6 md:pl-10 before:content-[''] before:absolute before:left-2 md:before:left-4 before:top-2 before:h-full before:w-2 before:bg-emerald-300">
        {educationData.map((item, index) => (
          <div key={index} className="mb-16 relative">
            <div className="absolute -left-6 md:-left-8 top-1.5 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white"></div>
            <p className="text-emerald-600 font-semibold mb-2 text-sm uppercase tracking-wider">{item.years}</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.degree}</h3>
            <p className="text-gray-600 text-lg mb-3">{item.institution}</p>
            <p className="text-emerald-700 font-semibold mb-4 inline-block bg-emerald-100 px-3 py-1 rounded-full">GPA: {item.gpa}</p>
            
            {item.relevantCourses && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Relevant Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {item.relevantCourses.map((course, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{course}</span>
                  ))}
                </div>
              </div>
            )}
            
            {item.achievements && (
              <DropdownSection title="Achievements & extracurricular" items={item.achievements} icon="tick" />
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;










