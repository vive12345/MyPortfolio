// import React from 'react';

// const Certifications = () => {
//   const Certifications = [
//     {
//       title: "Interpol8r",
//       description: "Experimental web app with advanced interpolation features",
//       image: "/path/to/interpol8r-image.jpg",
//     },
//     {
//       title: "BlogSpire",
//       description: "Blogging web app created for the modern content creator",
//       image: "/path/to/blogspire-image.jpg",
//     },
//     {
//       title: "Code Island",
//       description: "Online headquarters for the local coding community",
//       image: "/path/to/code-island-image.jpg",
//     },
//   ];

//   return (
//     <div className="bg-teal-600 w-full">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className=" text-3xl font-bold mb-8 text-white-600">CERTIFICATIONS</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Certifications.map((project, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
//               <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-teal-600 mb-2">{project.title}</h3>
//                 <p className="text-gray-600 text-sm">{project.description}</p>
//               </div>
//               <div className="px-4 py-2 bg-gray-100 flex justify-end">
//                 <button className="text-gray-600 hover:text-teal-600">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certifications;



// import React from 'react';
// import { Element } from 'react-scroll';
// const Certifications = () => {
//   const certifications = [
//     {
//       title: "Problem Solving (Basic)",
//       description: "HackerRank | Issued Jun 2024",
//       skills: "Skills: Algorithms, Problem Solving",
//       credentialId: "Credential ID: 74FBA68DE755",
//       image: "./assets/hackerrank.png",
//       link: "https://www.hackerrank.com/certificates/74FBA68DE755"
//     },
//     {
//       title: "The Complete 2022 Web Development Bootcamp",
//       description: "Udemy | Issued Nov 2022",
//       skills: "Skills: HTML5, CSS, JavaScript, Bootstrap, jQuery, Node.js, Express.js, React.js, MongoDB, REST APIs, Web Development, Responsive Web Design, Web Hosting",
//       credentialId: "Credential ID: UC-548cdfd0-fa09-42e6-8ebe-b8bad7805034",
//       image: "./assets/udemy.png",
//       link: "https://www.udemy.com/certificate/UC-548cdfd0-fa09-42e6-8ebe-b8bad7805034/"
//     },
//     {
//       title: "The Fundamentals of Digital Marketing",
//       description: "Google Digital Garage | Issued May 2021",
//       skills: "Skills: SEO, SEM, Social Media Marketing, Email Marketing, Google Analytics, Google Ads",
//       credentialId: "Credential ID: BS6 QF7 EMA",
//       image: "./assets/google.png",
//       link: "https://learndigital.withgoogle.com/link/to/your/certificate"
//     },
//   ];

//   return (
    
//     <div className="bg-teal-600 w-full">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-3xl font-bold mb-8 text-white-600">CERTIFICATIONS</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certifications.map((cert, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
//               <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
//               <div className="p-4 flex-grow">
//                 <h3 className="text-xl font-semibold text-teal-600 mb-2">{cert.title}</h3>
//                 <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
//                 <p className="text-gray-600 text-sm">{cert.skills}</p>
//               </div>
//               <div className="px-4 py-2 bg-gray-100 flex justify-between items-center">
//                 <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
//                   View Credential
//                 </a>
//               </div>
//               <div className="px-4 py-2 bg-gray-200 text-gray-600 text-xs">
//                 {cert.credentialId}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certifications;

import React, { useState } from 'react';

const Certifications = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const certifications = [
    {
      title: "Problem Solving (Basic)",
      description: "HackerRank | Issued Jun 2024",
      skills: "Skills: Algorithms, Problem Solving",
      credentialId: "Credential ID: 74FBA68DE755",
      image: "./assets/hackerrank.png",
      link: "https://www.hackerrank.com/certificates/74FBA68DE755"
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      description: "Udemy | Issued Nov 2022",
      skills: "Skills: HTML5, CSS, JavaScript, Bootstrap, jQuery, Node.js, Express.js, React.js, MongoDB, REST APIs, Web Development, Responsive Web Design, Web Hosting",
      credentialId: "Credential ID: UC-548cdfd0-fa09-42e6-8ebe-b8bad7805034",
      image: "./assets/udemy.png",
      link: "https://www.udemy.com/certificate/UC-548cdfd0-fa09-42e6-8ebe-b8bad7805034/"
    },
    {
      title: "The Fundamentals of Digital Marketing",
      description: "Google Digital Garage | Issued May 2021",
      skills: "Skills: SEO, SEM, Social Media Marketing, Email Marketing, Google Analytics, Google Ads",
      credentialId: "Credential ID: BS6 QF7 EMA",
      image: "./assets/google.png",
      link: "https://learndigital.withgoogle.com/link/to/your/certificate"
    },
  ];

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="bg-teal-600 w-full ">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-white">CERTIFICATIONS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-48 object-cover cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" 
                onClick={() => handleImageClick(cert.image)}
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                <p className="text-gray-600 text-sm">{cert.skills}</p>
              </div>
              <div className="px-4 py-2 bg-gray-100 flex justify-between items-center">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
                  View Credential
                </a>
              </div>
              <div className="px-4 py-2 bg-gray-200 text-gray-600 text-xs">
                {cert.credentialId}
              </div>
            </div>
          ))}
        </div>
      </div>
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseExpandedImage}
        >
          <img 
            src={expandedImage} 
            alt="Expanded certificate" 
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;