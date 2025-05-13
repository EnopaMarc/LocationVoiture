import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Car size={24} className="text-blue-400" />
              <span className="ml-2 text-xl font-bold">KMWT Platform</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-xs">
              Your trusted vehicle rental platform. Find the perfect vehicle for your needs with ease and confidence.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Vehicle Types</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/vehicles?type=car" className="text-gray-400 hover:text-white">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/vehicles?type=motorcycle" className="text-gray-400 hover:text-white">
                  Motorcycles
                </Link>
              </li>
              <li>
                <Link to="/vehicles?type=utility" className="text-gray-400 hover:text-white">
                  Utility Vehicles
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin size={20} className="flex-shrink-0 mr-2 text-gray-400" />
                <span className="text-gray-400">Yaounde</span>
              </li>
              <li className="flex items-center">
                <PhoneCall size={20} className="flex-shrink-0 mr-2 text-gray-400" />
                <span className="text-gray-400">+237 6 56 52 90 27</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="flex-shrink-0 mr-2 text-gray-400" />
                <span className="text-gray-400">enopamarc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} KMWT Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;