import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:khoeaarontitan@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-[#5C4033] hover:scale-110'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-[#8B7355] hover:scale-110'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-[#A87C5B] hover:scale-110'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3E2D] via-[#1A2417] to-[#2C3E2D] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5C4033] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8B7355] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl font-bold text-[#DBC1AC] mb-4 tracking-tight">Get in Touch</h2>
          <p className="text-[#C8B6A6] max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-8 backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-xl">
            <div className="flex items-center space-x-4 group transform hover:translate-x-2 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#DBC1AC] to-[#C8B6A6] p-3 rounded-lg group-hover:shadow-lg transition-all">
                <Mail className="w-6 h-6 text-[#5C4033]" />
              </div>
              <div>
                <h3 className="font-medium text-[#DBC1AC]">Email</h3>
                <p className="text-[#C8B6A6]">khoeaarontitan@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group transform hover:translate-x-2 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#DBC1AC] to-[#C8B6A6] p-3 rounded-lg group-hover:shadow-lg transition-all">
                <Phone className="w-6 h-6 text-[#5C4033]" />
              </div>
              <div>
                <h3 className="font-medium text-[#DBC1AC]">Phone</h3>
                <p className="text-[#C8B6A6]">+62 Your Phone Number</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group transform hover:translate-x-2 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#DBC1AC] to-[#C8B6A6] p-3 rounded-lg group-hover:shadow-lg transition-all">
                <MapPin className="w-6 h-6 text-[#5C4033]" />
              </div>
              <div>
                <h3 className="font-medium text-[#DBC1AC]">Location</h3>
                <p className="text-[#C8B6A6]">Semarang, Jawa Tengah</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h3 className="font-medium text-[#DBC1AC] mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-br from-[#DBC1AC] to-[#C8B6A6] rounded-lg transition-all duration-300 transform ${social.color} hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-[#DBC1AC] mb-2 group-hover:text-[#C8B6A6] transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-[#C8B6A6] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all text-[#DBC1AC] placeholder-[#8B7355]"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-[#DBC1AC] mb-2 group-hover:text-[#C8B6A6] transition-colors">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-[#C8B6A6] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all text-[#DBC1AC] placeholder-[#8B7355]"
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-[#DBC1AC] mb-2 group-hover:text-[#C8B6A6] transition-colors">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-[#C8B6A6] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all text-[#DBC1AC] placeholder-[#8B7355]"
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-[#DBC1AC] mb-2 group-hover:text-[#C8B6A6] transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-white/10 border border-[#C8B6A6] rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all text-[#DBC1AC] placeholder-[#8B7355]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8B7355] to-[#5C4033] text-white font-medium rounded-lg hover:from-[#5C4033] hover:to-[#8B7355] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B7355] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative backdrop-blur-sm bg-gradient-to-b from-[#2C3639]/80 to-[#3F4E4F]/80 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform hover:translate-y-[-10px] transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#DBC1AC]">About Me</h3>
              <p className="text-[#C8B6A6]">
                A passionate developer focused on creating interactive and user-friendly applications.
              </p>
            </div>
            <div className="transform hover:translate-y-[-10px] transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#DBC1AC]">Quick Links</h3>
              <ul className="space-y-2">
                {['Portfolio', 'Services', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#C8B6A6] hover:text-white transition-colors flex items-center group">
                      <ExternalLink className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="transform hover:translate-y-[-10px] transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#DBC1AC]">Newsletter</h3>
              <p className="text-[#C8B6A6] mb-4">
                Subscribe to my newsletter for updates and tips.
              </p>
              <form className="flex group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-[#DBC1AC] placeholder-[#8B7355]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#8B7355] to-[#5C4033] text-white rounded-r-lg group-hover:from-[#5C4033] group-hover:to-[#8B7355] transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#8B7355]/30 mt-8 pt-8 text-center">
            <p className="text-[#C8B6A6]">&copy; {new Date().getFullYear()} Khoe, Aaron Titan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;