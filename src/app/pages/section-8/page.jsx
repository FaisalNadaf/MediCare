'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">How to Find Us</h2>
        <p className="mt-2 text-gray-600">Fill up the Form and Ask Your Queries</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">View On Google Map</a>
      </div>
      <div className="max-w-6xl mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 bg-blue-500 text-white">
            <div className="flex items-center gap-4 mb-6">
              <FaMapMarkerAlt size={24} />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>177 E Houston St, New York, NY 10002</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <FaPhoneAlt size={24} />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+ (888) 695-9859</p>
                <p>+ (888) 569-9859</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope size={24} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>info@example.com</p>
                <p>hello@example.com</p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-4">Book Your Appointment</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg mb-4" onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mb-4" onChange={handleChange} />
              <input type="text" name="phone" placeholder="Your Phone Number" className="w-full p-3 border rounded-lg mb-4" onChange={handleChange} />
              <textarea name="message" placeholder="Message" className="w-full p-3 border rounded-lg mb-4 h-28" onChange={handleChange}></textarea>
              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Send Request</button>
            </form>
          </div>
        </div>
        <div>
          <iframe
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9810870189925!2d-73.98901102438962!3d40.72243513808466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259881a8c95b9%3A0xeed8f1f7a23fd50a!2s177%20E%20Houston%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
