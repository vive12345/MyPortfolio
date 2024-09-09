
import React from "react";
import { Element } from "react-scroll";
const Experience = () => {
  const experiences = [
    {
      title: "Artificial Intelligence and Machine Learning Engineer Intern",
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
      ],
      achievements: [
        "Devised an innovative sliding window algorithm for a real-world attendance system, processing 30 frames per sec (FPS) and identifying faces with 98.7% accuracy against a 500+ employee database, demonstrating high-volume processing.",
        "Collaborated with a cross-functional team to architect innovative RPA solutions using UiPath Studio, automating email marketing workflows and reducing sales team's personalized outreach time, saving 20+ hours weekly.",
        "Formulated Automatic License Plate Recognition system by exporting YOLOv6 model through Open Neural Network Exchange, utilizing Tesseract OCR & regex matching, achieving 94% accuracy at 30 FPS in real-time testing.",
        "Leveraged Roboflow's data augmentation techniques, boosting object detection mean Average Precision (mAP) by 3%.",
        "Revised a high-performance Python tool leveraging OpenCV and FFmpeg, enabling simultaneous processing of multiple customer videos and converting 10,000+ annotatable images in one go, eliminating one-by-one conversion.",
        "Led a team of 4 interns, delegated 9k+ image annotations using LabelImg, & reported bi-weekly in scrum meetings.",
        "Engineered GlucoseGuard AI, a real-time IV glucose monitoring system using YOLOv7, achieving 86.5% mean Average Precision (mAP) in glucose level detection and implementing estimation algorithm with OpenCV & statistical averaging for accurate percentage calculations.",
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
        "Developed a high-performance React-based grocery B2C platform utilizing Tailwind CSS; produced 10+ modular components and implemented Redux for efficient cart state management, delivering a responsive and scalable UI.",
        "Created a MySQL database for the product catalog; teamed up to integrate the database with backend logic.",
        "Conducted online customer meetings to gather user interface requirements & prepared high-fidelity Figma prototype for the product landing page, which reduced development turnaround time and improved customer satisfaction by 100%.",
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
                        <svg
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
  );
};

export default Experience;
