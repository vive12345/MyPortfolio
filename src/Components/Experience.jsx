import React from "react";
import { Element } from "react-scroll";
const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "TEKSUN IoT and AI Solutions Company",
      location: "Ahmedabad, Gujarat, India",
      date: "June 2023 – September 2023",
      skills: [
        "Python",
        "YOLOv6",
        "YOLOv7",
        "ONNX",
        "Tesseract OCR",
        "OpenCV",
        "FFmpeg",
        "Image Processing",
        "Machine Learning",
        "Statistical Analysis",
        "UiPath Studio",
        "RPA",
        "Roboflow",
        "LabelImg",
        "Django REST Framework",
        "Redis",
        "Apache Spark",
        "Tableau",
        "DAX",
        "Predictive Analytics",
        "TensorFlow",
        "Data Augmentation",
      ],
      achievements: [
        "Developed API endpoints using Django REST Framework for real-time face recognition with faster processing through Redis caching; devised a sliding window algorithm with OpenCV & TensorFlow for real-time detection in a 500+ employee database; formulated an Automatic License Plate Recognition system using YOLOv6, Tesseract OCR, and regex matching for real-time testing; revised a Python tool to process videos and convert 10,000+ images in bulk; collaborated on RPA solutions with UiPath Studio to automate email marketing, saving significant time weekly; led 5 interns to manage image annotations; and analyzed 5,000+ CRM interactions to improve response rates using Apache Spark and Python, while developing Tableau dashboards that enhanced decision-making. Leveraged Roboflow's data augmentation techniques, boosting object detection performance. Engineered GlucoseGuard AI, a real-time IV glucose monitoring system using YOLOv7 for glucose level detection.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "EzTechStack Solutions and Support Company",
      location: "Los Angeles, California, USA (Remote)",
      date: "June 2022 – September 2022",
      skills: [
        "React",
        "Redux",
        "Tailwind CSS",
        "MySQL",
        "Full Stack Development",
        "UI/UX Design",
        "Figma",
        "Customer Requirements Gathering",
      ],
      achievements: [
        "This project demonstrates the development of a comprehensive grocery B2C platform, combining modern front-end technologies with robust back-end solutions. The implementation showcases proficiency in React, Redux, and Tailwind CSS for creating a responsive and scalable user interface. Back-end work included MySQL database design and integration. A user-centric approach, involving customer meetings and Figma prototyping, led to improved development efficiency and customer satisfaction. Overall, the project highlights a blend of technical skills in full-stack development and a strong focus on user experience optimization.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        PROFESSIONAL EXPERIENCE
      </h2>
      <div className="space-y-6 py-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/4 bg-emerald-600 p-4 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-emerald-100 text-base mb-1">
                    {exp.company}
                  </p>
                  <p className="text-base text-emerald-200">{exp.location}</p>
                </div>
                <p className="text-base text-emerald-200 mt-2">{exp.date}</p>
              </div>
              <div className="md:w-3/4 p-4">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1 text-base">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        {/* <svg
                          className="w-4 h-4 text-emerald-500 mr-1 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg> */}
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
  );
};

export default Experience;
