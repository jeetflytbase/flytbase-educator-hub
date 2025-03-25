
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-flytbase-dark border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-flytbase-blue to-[#AABDFF] flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="blue-gradient">FlytBase Academy</span>
            </Link>
            <p className="text-flytbase-light/70 text-sm mb-6">
              Learn drone technology from industry experts, gain certification, and advance your career in the rapidly expanding drone industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-flytbase-light/60 hover:text-flytbase-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-flytbase-light/60 hover:text-flytbase-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-flytbase-light/60 hover:text-flytbase-blue transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-flytbase-light/60 hover:text-flytbase-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-flytbase-light font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/assessments" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  Assessments
                </Link>
              </li>
              <li>
                <a href="#" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  Certification
                </a>
              </li>
              <li>
                <a href="#" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-flytbase-light font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-flytbase-light font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-flytbase-light/70 mt-0.5" />
                <a href="mailto:academy@flytbase.com" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  academy@flytbase.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-flytbase-light/70 mt-0.5" />
                <a href="tel:+1234567890" className="text-flytbase-light/70 hover:text-flytbase-blue text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-flytbase-light/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FlytBase Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-flytbase-light/60 hover:text-flytbase-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-flytbase-light/60 hover:text-flytbase-blue text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-flytbase-light/60 hover:text-flytbase-blue text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
