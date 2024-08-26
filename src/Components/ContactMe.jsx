// import React from 'react';

// const ContactForm = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex flex-col lg:flex-row justify-between">
//           <div className="lg:w-1/2 mb-8 lg:mb-0">
//             <h3 className="text-green-500 mb-4">- LET'S CONNECT</h3>
//             <h1 className="text-4xl font-bold mb-6">Contact With Me</h1>
//             <p className="text-gray-400 mb-8">
//               I'm currently available to take on new projects, so feel free to send me a message
//               about anything that you want to run past me. You I'm currently available to take
//               can contact anytime at 24/7
//             </p>
//             <div className="space-y-2">
//               <p><span className="font-semibold">Phone:</span> +123 456 7890</p>
//               <p><span className="font-semibold">Email Address:</span> <a href="mailto:info@abcmail.com" className="text-green-500">info@abcmail.com</a></p>
//               <p><span className="font-semibold">Location:</span> 14/A, Miranda City, NYC</p>
//             </div>
//           </div>
//           <div className="lg:w-1/2">
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-400">YOUR NAME</label>
//                 <input type="text" id="name" className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-400">YOUR EMAIL</label>
//                 <input type="email" id="email" className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-400">YOUR MESSAGE</label>
//                 <textarea id="message" rows="4" className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"></textarea>
//               </div>
//               <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">SEND MESSAGE</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <footer className="bg-gray-800 py-4 mt-16">
//         <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
//           <div className="flex space-x-4 mb-4 sm:mb-0">
//             <a href="#" className="text-green-500 hover:text-green-400"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="text-green-500 hover:text-green-400"><i className="fab fa-twitter"></i></a>
//             <a href="#" className="text-green-500 hover:text-green-400"><i className="fab fa-linkedin-in"></i></a>
//             <a href="#" className="text-green-500 hover:text-green-400"><i className="fab fa-pinterest"></i></a>
//           </div>
//           <p className="text-gray-400 text-sm">Copyright © 2023 Mesut Ozil Theme. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    // For now, we'll just simulate a successful submission
    console.log('Form submitted:', { name, email, message });
    
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
    
    // Show success message
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-green-500 mb-4">- LET'S CONNECT</h3>
            <h1 className="text-4xl font-bold mb-6">Contact With Me</h1>
            <p className="text-gray-400 mb-8">
              
            </p>
            <div className="space-y-2">
              <p><span className="font-semibold">Phone:</span> +1 (623) 286 8800</p>
              <p><span className="font-semibold">Email Address:</span> <a href="mailto:vkamani1@asu.edu" className="text-green-500">vkamani1@asu.edu</a></p>
              <p><span className="font-semibold">Location:</span> Tempe, Arizona</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">YOUR NAME</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">YOUR EMAIL</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">YOUR MESSAGE</label>
                <textarea id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required></textarea>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">SEND MESSAGE</button>
            </form>
            {showSuccess && (
              <div className="mt-4 p-2 bg-green-500 text-white rounded-md">
                Message sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 mt-16">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="https://www.linkedin.com/in/vipsakamani/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/vive12345" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400"><i className="fab fa-github"></i></a>
          </div>
          <p className="text-gray-400 text-sm">Copyright © 2023 VIPSA KAMANI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;