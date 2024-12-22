"use client"
import React, { useState } from 'react';
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md'; // Import icons

interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form Submitted! (Check Console for data)');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container gap-8 px-4 py-8 w-[70%] mx-auto ">
      <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch With Us</h2>
      <div>
       {/* Mobile Text */}
          <p className="block sm:hidden text-gray-600 mb-8 w-full text-center">
           Contact us for more info!
        </p>

          {/* Desktop Text */}
         <p className="hidden sm:block text-gray-600 mb-8 w-[55.5%] text-center justify-self-center">
          For More Information About Our Product & Services. Please Feel Free To Drop us
           An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="mb-6 flex items-start">
            <MdLocationOn className="text-2xl mr-2 text-gray-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>236 5th SE Avenue, New <br/>York NY10000,United <br />States<br/></p>
                
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <MdPhone className="text-2xl mr-2 text-gray-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start">
            <MdAccessTime className="text-2xl mr-2 text-gray-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - <br/> 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700  mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block   mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block   mb-2">
                Subject 
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block   mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                required
              ></textarea>
            </div>
            <button
  type="submit"
  className="text-black border  border-black p-5 w-full md:w-64 focus:outline-none focus:ring focus:ring-blue-300 rounded-xl"
>
  Submit
</button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
