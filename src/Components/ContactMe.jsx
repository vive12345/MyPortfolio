import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-gray-900 text-white h-full w-full">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-green-500 mb-4">- LET'S CONNECT</h3>
            <h1 className="text-4xl font-bold mb-6">Contact With Me</h1>
            <p className="text-gray-400 mb-8"></p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Phone:</span> +1 (623) 286 8800
              </p>
              <p>
                <span className="font-semibold">Email Address:</span>{" "}
                <a href="mailto:vkamani1@asu.edu" className="text-green-500">
                  vipsakamani141100@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Location:</span> Tempe, Arizona
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Form has been removed */}
            <p className="text-gray-400">
              
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 mt-16 align-bottom">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="https://www.linkedin.com/in/vipsakamani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/vive12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Thank you for visiting this site
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactInfo;