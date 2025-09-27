import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from "./partials/BottomNav";
import MobileMenu from "./partials/MobileMenu";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to an API
    console.log("Form Data Submitted:", formData);
    localStorage.setItem("formData", JSON.stringify(formData))
    console.log("data added to localstorage")

    // Reset form
    setFormData({ email: '', subject: '', message: '' });

    // Show success message (you can implement a toast notification here)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="w-full min-h-screen pb-20 md:pb-8 bg-[#1F1E24]">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Header */}
      <div className="sticky top-0 bg-[#1F1E24] z-30 border-b border-zinc-800">
        <div className="px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-2 text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-800 rounded-full transition-colors"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <h1 className="text-xl md:text-2xl font-semibold text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-8 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-zinc-400 text-lg">
            Got a technical issue? Want to send feedback? Need details about Streamify? Let us know.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-800 rounded-xl p-6 md:p-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 border border-zinc-600 text-white text-sm rounded-lg focus:ring-[#6556CD] focus:border-[#6556CD] placeholder-zinc-400"
              placeholder="name@streamify.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 border border-zinc-600 text-white text-sm rounded-lg focus:ring-[#6556CD] focus:border-[#6556CD] placeholder-zinc-400"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 border border-zinc-600 text-white text-sm rounded-lg focus:ring-[#6556CD] focus:border-[#6556CD] placeholder-zinc-400"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6556CD] hover:bg-[#7b68d6] text-white font-medium rounded-lg text-sm px-5 py-3 focus:ring-4 focus:outline-none focus:ring-[#6556CD]/50 transition-colors"
          >
            <i className="ri-send-plane-fill mr-2"></i>
            Send message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="mt-12 bg-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Other Ways to Reach Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
            <div className="flex items-center">
              <i className="ri-mail-line text-[#6556CD] mr-3"></i>
              <span>dangechetan3@gmail.com</span>
            </div>
            <div className="flex items-center">
              <i className="ri-phone-line text-[#6556CD] mr-3"></i>
              <span>8459011161</span>
            </div>
            <div className="flex items-center">
              <i className="ri-linkedin-line text-[#6556CD] mr-3"></i>
              <span>LinkedIn: chetan-dange</span>
            </div>
            <div className="flex items-center">
              <i className="ri-github-line text-[#6556CD] mr-3"></i>
              <span>GitHub: ChetanRDange</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Contact;