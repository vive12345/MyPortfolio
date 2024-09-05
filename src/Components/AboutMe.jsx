// import React from 'react';

// const PortfolioPage = () => {
//   const handleDownload = () => {
//     // Replace with your actual resume PDF URL
//     const pdfUrl = "/path-to-your-resume.pdf";
//     window.open(pdfUrl, '_blank');
//   };

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
//       <div className="max-w-6xl w-full mx-auto">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 p-6 lg:p-10 z-10">
//             <h2 className="text-green-800 text-xl lg:text-2xl font-semibold mb-3">
//               The Process of Building a Portfolio for
//             </h2>
//             <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
//               Full Stack Web Development Job
//             </h1>
//             <button 
//               onClick={handleDownload}
//               className="bg-green-800 text-white px-5 py-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg text-sm lg:text-base"
//             >
//               READ MORE
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//           </div>
//           <div className="lg:w-1/2 relative">
//             <div className="aspect-w-1 aspect-h-1">
//               <img
//                 src="src/assets/womenlaptop.avif"
//                 alt="Woman using laptop"
//                 className="object-cover w-full h-full rounded-bl-[100px] lg:rounded-bl-[200px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Responsive decorative circles */}
//       <div className="absolute top-0 right-0 w-1/4 h-1/4 max-w-xs max-h-xs bg-black rounded-full opacity-5 -mr-12 -mt-12"></div>
//       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 max-w-sm max-h-sm bg-green-800 rounded-full opacity-10 -ml-16 -mb-16"></div>
//       <div className="absolute top-1/4 left-1/4 w-1/6 h-1/6 max-w-[100px] max-h-[100px] bg-green-200 rounded-full opacity-20"></div>
//     </div>
//   );
// };

// export default PortfolioPage;


import React from 'react';


const PortfolioPage = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vipsakamani/', '_blank');
  };

  return (

      <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-6 lg:p-10 z-10">
              <h2 className="text-green-800 text-xl lg:text-2xl font-semibold mb-3">
              Developing Responsive Wonders 
              </h2>
              <h1 id="about-me" className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
              Where Flexibility Meets Functionality</h1>
              <button 
                onClick={handleLinkedInClick}
                className="bg-green-800 text-white px-5 py-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg text-sm lg:text-base"
              >
                LINKEDIN
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="./assets/womenlaptop.avif"
                  alt="Woman using laptop"
                  className="object-cover w-full h-full rounded-bl-[100px] lg:rounded-bl-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Responsive decorative circles */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 max-w-xs max-h-xs bg-black rounded-full opacity-5 -mr-12 -mt-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 max-w-sm max-h-sm bg-green-800 rounded-full opacity-10 -ml-16 -mb-16"></div>
        <div className="absolute top-1/4 left-1/4 w-1/6 h-1/6 max-w-[100px] max-h-[100px] bg-green-200 rounded-full opacity-20"></div>
      </div>

  );
};

export default PortfolioPage;
