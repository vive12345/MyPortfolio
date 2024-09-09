
import React from "react";
import { Element } from "react-scroll";
const Projects = () => {
  const projects = [
    {
      title: "GlucoseGuard AI",
      subtitle: "Real-time IV Glucose Monitoring System",
      description:
        "Engineered an AI-powered object detection system for real-time IV glucose monitoring.",
      image: "assets/iv.jpg", 
      features: [
        "Engineered an AI-powered object detection system using YOLOv7 to monitor IV glucose levels, automating alerts",
        "Achieved 86.5% mAP in glucose detection",
        "Implemented estimation using OpenCV & statistical averaging for accuracy",
      ],
      technologies: [
        "YOLOv7",
        "OpenCV",
        "Python",
        "Machine Learning",
        "Computer Vision",
      ],
      github: "https://github.com/vive12345",
      date: "August 2024 - September 2024",
    },
    {
      title: "Student Academic Success & Dropout Prediction",
      subtitle: "Using Machine Learning to predict student outcomes",
      description:
        "Developed a machine learning model to predict student academic success and potential dropouts.",
      image: "assets/361.jpg", 
      features: [
        "Spearheaded a collaborative project with a team of five",
        "Focused on data visualization techniques and machine learning model optimization",
        "Yielded 2% increase in predictive accuracy through SMOTE and hyperparameter tuning",
        "Visualized feature correlations using heatmaps and scatter plots",
        "Trained dataset on various algorithms",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "SMOTE",
      ],
      github: "https://github.com/vive12345",
      date: "February 2024 - April 2024",
    },
    {
      title: "HealthTrack Pro",
      subtitle: "Personalized health management using Python & ML Technologies",
      description:
        "Created a web application for automated calorie tracking and personalized health recommendations.",
      image: "assets/HealthProject.jpg", 
      features: [
        "Automated precise calorie calculation Algorithm",
        "Connected database API & integrated Nutritionix and Twilio APIs for personalized calorie calculation and motivational SMS delivery",
        "Designed documentation with 7+ UML diagrams detailing system architecture; presented to industry professionals",
        "Crafted a KNN algorithm for dynamically personalized dietary and fitness recommendations based on user activity",
      ],
      technologies: [
        "Python",
        "NLP",
        "KNN",
        "Nutritionix API",
        "Twilio API",
        "UML",
      ],
      github: "https://github.com/vive12345",
      date: "January 2023 - May 2023",
    },
    {
      title: "Stroke Prediction",
      subtitle: "Predicting stroke likelihood using Machine Learning",
      description:
        "Developed machine learning models to predict the likelihood of strokes using various classification algorithms.",
      image: "assets/stroke.jpg", 
      features: [
        "Captained a 4-member team in benchmarking ML models",
        "Executed data cleaning and visualization processes",
        "Diagnosed decision tree & random forest overfitting",
        "Optimized KNN to achieve 96% accuracy in Google Colab",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Google Colab",
        "KNN",
        "Decision Trees",
        "Random Forest",
      ],
      github: "https://github.com/vive12345",
      date: "January 2022 - March 2022",
    },
    {
      title: "Tech Blog Website",
      subtitle: "Dynamic tech blog using modern web technologies",
      description:
        "Created a tech blog website with a dynamic front-end and efficient back-end functionality.",
      image: "./assets/Project1.jpg", 
      features: [
        "Developed dynamic front-end using HTML, CSS, and JavaScript",
        "Implemented Node.js for efficient back-end functionality",
        "Hosted the website on a user domain",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      github: "https://github.com/vive12345",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-emerald-600 text-center">
        PROJECTS
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-12 sm:mb-16 md:mb-20">
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center`}
          >
            <div className="lg:w-1/2 lg:px-6 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                {project.title}
              </h2>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6">
                {project.subtitle}
              </p>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                {project.description}
              </p>
              <p className="font-semibold mb-2 sm:mb-3">Key Features:</p>
              <ul className="list-disc pl-5 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base hover:bg-emerald-700 transition duration-300"
              >
                View on GitHub
              </a>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-auto max-h-[300px] object-contain"
              />
              <div className="mt-4 sm:mt-6 bg-gray-100 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
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
