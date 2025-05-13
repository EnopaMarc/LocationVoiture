import React from 'react';
import { Car, Users, Award, MapPin, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About KMW Platform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for all your vehicle rental needs since 2023.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At KMW Platform, we're dedicated to providing exceptional vehicle rental services with transparency,
              reliability, and customer satisfaction at the core of everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Vehicles</h3>
              <p className="text-gray-600">
                We maintain a diverse fleet of well-maintained vehicles to meet every need and preference.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize your experience with transparent pricing and responsive support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from booking to return.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                KMW Platform was founded in 2023 with a simple goal: to revolutionize the vehicle rental experience through
                technology and customer-centric service.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What began as a small startup has quickly grown into a trusted platform serving thousands of customers
                across France. Our journey has been driven by a commitment to innovation and a passion for mobility solutions.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our services while maintaining the personal touch and attention to detail
                that our customers have come to expect from us.
              </p>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4097159/pexels-photo-4097159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Paris</h3>
              </div>
              <p className="text-gray-600 mb-4">
                123 Avenue des Champs-Élysées<br />
                75008 Paris, France
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +33 1 23 45 67 89<br />
                <strong>Hours:</strong> Mon-Sat: 8AM-8PM, Sun: 10AM-6PM
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Lyon</h3>
              </div>
              <p className="text-gray-600 mb-4">
                45 Rue de la République<br />
                69002 Lyon, France
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +33 4 78 12 34 56<br />
                <strong>Hours:</strong> Mon-Sat: 8AM-8PM, Sun: 10AM-6PM
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Nice</h3>
              </div>
              <p className="text-gray-600 mb-4">
                78 Promenade des Anglais<br />
                06000 Nice, France
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +33 4 93 87 65 43<br />
                <strong>Hours:</strong> Mon-Sat: 8AM-8PM, Sun: 10AM-6PM
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-blue-100">
                We deliver on our promises with well-maintained vehicles and punctual service.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-blue-100">
                No hidden fees or surprises. We believe in clear, honest communication.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-blue-100">
                We continuously improve our platform to enhance your rental experience.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-blue-100">
                We're committed to reducing our environmental impact with eco-friendly options.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section - Simplified for Demo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're a dedicated team of professionals passionate about providing exceptional vehicle rental experiences.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Team Member {index}</h3>
                  <p className="text-blue-600 mb-4">Position</p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-500">
            Note: This is a demo application with placeholder content for the team section.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;