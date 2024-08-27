// import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       title: "AI and ML Engineer Intern",
//       company: "TEKSUN IoT and AI Solutions",
//       location: "San Francisco, CA",
//       date: "June 2023 – September 2023",
//       skills: ["Python", "JavaScript", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
//       achievements: [
//         "Automated sales tasks with AI-integrated RPA, reducing process time by 50%",
//         "Improved news forecasting model accuracy by 2% through enhanced data engineering",
//         "Leveraged social media APIs for comprehensive data collection and analysis"
//       ]
//     },
//     {
//       title: "Full Stack Developer Intern",
//       company: "EzTechStack Solutions",
//       location: "Remote",
//       date: "June 2023 – September 2023",
//       skills: ["JavaScript", "Python", "React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "TensorFlow.js"],
//       achievements: [
//         "Developed MERN stack applications, boosting system performance by 30%",
//         "Implemented responsive design for cross-device compatibility",
//         "Contributed to backend API development and database optimization"
//       ]
//     }
//   ];

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Professional Experience</h2>
//         <div className="space-y-10">
//           {experiences.map((exp, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="md:flex">
//                 <div className="md:w-1/3 bg-emerald-600 p-6 text-white">
//                   <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
//                   <p className="text-emerald-100 mb-2">{exp.company}</p>
//                   <p className="text-sm text-emerald-200">{exp.location}</p>
//                   <p className="mt-4 inline-block bg-emerald-700 px-3 py-1 rounded-full text-sm">
//                     {exp.date}
//                   </p>
//                 </div>
//                 <div className="md:w-2/3 p-6">
//                   <div className="mb-6">
//                     <h4 className="text-lg font-semibold text-gray-700 mb-3">Skills & Technologies</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {exp.skills.map((skill, i) => (
//                         <span key={i} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Achievements</h4>
//                     <ul className="space-y-2">
//                       {exp.achievements.map((achievement, i) => (
//                         <li key={i} className="flex items-start">
//                           <svg className="w-5 h-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <span className="text-gray-600">{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "AI and ML Engineer",
      company: "TEKSUN IoT and AI Solutions",
      location: "Ahmedabad, Gujarat",
      date: "June 2023 – September 2023",
      skills: ["Python", "YOLOv7", "ONNX", "Tesseract OCR", "Image Processing", "Machine Learning"],
      achievements: [
        "Developed a sliding window algorithm for automated punch-in system, processing 30 frames/sec & detecting the most consistent faces by frequency analysis, achieving 99.7% match accuracy with the employee database.",
        "Exported YOLOv7 model to ONNX for optimization. Implemented ALPR (Automatic License Plate Recognition) algorithm with Tesseract OCR and regex matching, achieving 96% accuracy in real-time testing at 30 FPS.",
        "Led a team of 4 interns, delegated 9k+ image annotations using LabelImg, & reported bi-weekly in scrum meetings."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "EzTechStack Solutions and Support",
      location: "Remote (California, USA)",
      date: "June 2022 – September 2022",
      skills: ["React", "Redux", "Tailwind CSS", "HTML", "JavaScript", "WordPress"],
      achievements: [
        "Developed and maintained Grocery Mart's B2C site, implementing a responsive and visually appealing UI design which increased customer engagement by 30%.",
        "Leveraged modern web libraries like React, redux (for state management), Tailwind CSS along with HTML and Javascript to enhance the functionality of web applications, ensuring scalability and maintainability.",
        "Customized WordPress themes with dynamic features, ensuring cross-browser compatibility and security.",
        "Implemented web accessibility, conducted usability testing, and designed user-friendly UX/UI interfaces.",
        "Developed WebSpark-compliant websites, translating mockups into valid HTML/CSS code."

      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">PROFESSIONAL EXPERIENCE</h2>
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/4 bg-emerald-600 p-4 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-emerald-100 text-base mb-1">{exp.company}</p>
                <p className="text-base text-emerald-200">{exp.location}</p>
              </div>
              <p className="text-base text-emerald-200 mt-2">
                {exp.date}
              </p>
            </div>
            <div className="md:w-3/4 p-4">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements</h4>
                <ul className="space-y-1 text-base">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-emerald-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default Experience;