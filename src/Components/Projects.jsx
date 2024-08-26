// import React from 'react';
// import HealtManagerImage from '../assets/HealthProject.jpg' ;
// import Project1 from '../assets/Project1.jpg';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Health Manager AI",
//       subtitle: "Experience health tracking reimagined. Save time on your fitness journey.",
//       description: "Health Manager AI is a web platform that allows users to track their health and fitness goals using advanced machine learning algorithms.",
//       image: HealtManagerImage,
//       features: [
//         "AI-driven personalized meal plans",
//         "Automated calorie tracking through image recognition",
//         "Integration with fitness wearables for comprehensive health monitoring"
//       ],
//       technologies: ["Python", "TensorFlow", "React", "Flask"]
//     },
//     {
//       title: "Smart Home Hub",
//       subtitle: "Control your entire home with a single app. Simplify your life.",
//       description: "Smart Home Hub is an IoT platform that connects and manages all your smart home devices from a centralized dashboard.",
//       image: Project1,
//       features: [
//         "Voice-controlled home automation",
//         "Energy usage optimization",
//         "Advanced security features with AI-powered threat detection"
//       ],
//       technologies: ["Node.js", "React Native", "MongoDB", "MQTT"]
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold mb-8 text-emerald-600">PROJECTS</h2>
//       {projects.map((project, index) => (
//         <div key={index} className="mb-20">
//           <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
//             <div className="md:w-1/2 md:px-8">
//               <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
//               <p className="text-xl mb-6">{project.subtitle}</p>
//               <p className="mb-6">{project.description}</p>
//               <p className="font-semibold mb-4">This project serves as:</p>
//               <ul className="list-disc pl-5 mb-6 space-y-2">
//                 {project.features.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//               <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition duration-300">
//                 Learn more
//               </button>
//             </div>
//             <div className="md:w-1/2 mt-8 md:mt-0">
//               <img src={project.image} alt={project.title} className=" rounded-full shadow-lg w-full" />
//               <div className="mt-6 bg-gray-100 p-4 rounded-lg">
//                 <h3 className="font-semibold mb-2">Technologies Used:</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech, i) => (
//                     <span key={i} className="bg-white px-3 py-1 rounded-full text-sm">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Student Academic Success & Dropout Prediction",
      subtitle: "Using Machine Learning to predict student outcomes",
      description: "Developed a machine learning model to predict student academic success and potential dropouts.",
      image: "src/assets/HealthProject.jpg", // You'll need to add this image
      features: [
        "Visualized feature correlations using heatmaps and scatter plots",
        "Trained dataset on various algorithms",
        "Applied SMOTE and manual hyperparameter tuning, improving accuracy by 2%"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "SMOTE"],
      github: "https://github.com/vive12345/student-success-prediction"
    },
    {
      title: "Health Manager Web Application",
      subtitle: "Personalized health management using Python & ML Technologies",
      description: "Created a web application for automated calorie tracking and personalized health recommendations.",
      image: "src/assets/Project1.jpg", // You'll need to add this image
      features: [
        "Automated precise calorie calculations through NLP APIs",
        "Integrated Nutritionix and Twilio APIs for food calorie calculation and SMS delivery",
        "Implemented ML algorithms for dynamically personalized recommendations using KNN"
      ],
      technologies: ["Python", "NLP", "KNN", "Nutritionix API", "Twilio API"],
      github: "https://github.com/vive12345/health-manager-app"
    },
    {
      title: "Stock Prediction Using Machine Learning",
      subtitle: "Predicting stock trends with advanced ML algorithms",
      description: "Developed a machine learning model to predict stock trends using various classification algorithms.",
      image: "src/assets/HealthProject.jpg", // You'll need to add this image
      features: [
        "Pre-processed Kaggle data and optimized datasets for model training",
        "Fine-tuned classification models for improved accuracy",
        "Improved naive Bayes accuracy by 3.4% and logistic regression by 2%"
      ],
      technologies: ["Python", "Machine Learning", "Google Colab", "Naive Bayes", "Logistic Regression"],
      github: "https://github.com/vive12345"
    },
    {
      title: "Tech Blog Website",
      subtitle: "Dynamic tech blog using modern web technologies",
      description: "Created a tech blog website with a dynamic front-end and efficient back-end functionality.",
      image: "src/assets/Project1.jpg", // You'll need to add this image
      features: [
        "Developed dynamic front-end using HTML, CSS, and JavaScript",
        "Implemented Node.js for efficient back-end functionality",
        "Hosted the website on a user domain"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      github: "https://github.com/vive12345"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-emerald-600">PROJECTS</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-20">
          <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            <div className="md:w-1/2 md:px-8">
              <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
              <p className="text-xl mb-6">{project.subtitle}</p>
              <p className="mb-6">{project.description}</p>
              <p className="font-semibold mb-4">Key Features:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition duration-300">
                View on GitHub
              </a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src={project.image} alt={project.title} className="rounded-lg shadow-lg w-full" />
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;