import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVehicleById } from '../lib/mockData';
import { Star, MapPin, Calendar, Users, Fuel, Battery, Gauge, Settings, CheckCircle } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const VehicleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  
  const vehicle = id ? getVehicleById(id) : undefined;
  
  // If vehicle not found, redirect to vehicles page
  useEffect(() => {
    if (!vehicle && id) {
      navigate('/vehicles');
    }
  }, [vehicle, id, navigate]);
  
  if (!vehicle) {
    return null;
  }
  
  const handleBookingSubmit = (bookingData: any) => {
    alert('Booking submitted successfully!');
    navigate('/dashboard');
  };
  
  const getFuelIcon = (fuel: string) => {
    switch (fuel) {
      case 'electric':
        return <Battery className="text-green-500" size={18} />;
      default:
        return <Fuel size={18} />;
    }
  };
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to search results
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vehicle Details Column */}
          <div className="lg:col-span-2">
            {/* Vehicle Images */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative h-72 md:h-96 bg-gray-100">
                <img
                  src={vehicle.images[activeImage]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {vehicle.images.length > 1 && (
                <div className="flex p-4 space-x-2 overflow-x-auto">
                  {vehicle.images.map((image, index) => (
                    <div
                      key={index}
                      className={`
                        h-16 w-20 flex-shrink-0 cursor-pointer border-2 
                        ${activeImage === index ? 'border-blue-500' : 'border-transparent'}
                      `}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${vehicle.name} - View ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Vehicle Info */}
            <Card className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{vehicle.name}</h1>
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="font-medium">{vehicle.rating}/5</span>
                    <span className="text-sm text-gray-500 ml-1">({vehicle.reviews})</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 mb-6">
                <MapPin size={18} className="mr-1" />
                <span>{vehicle.location}</span>
              </div>
              
              <p className="text-gray-700 mb-6">{vehicle.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                  <Users size={20} className="text-blue-600 mb-2" />
                  <span className="text-sm text-gray-500">Seats</span>
                  <span className="font-medium">{vehicle.specifications.seats}</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                  {getFuelIcon(vehicle.specifications.fuel)}
                  <span className="text-sm text-gray-500">Fuel</span>
                  <span className="font-medium capitalize">{vehicle.specifications.fuel}</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                  <Settings size={20} className="text-blue-600 mb-2" />
                  <span className="text-sm text-gray-500">Transmission</span>
                  <span className="font-medium capitalize">{vehicle.specifications.transmission}</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                  <Gauge size={20} className="text-blue-600 mb-2" />
                  <span className="text-sm text-gray-500">Consumption</span>
                  <span className="font-medium">{vehicle.specifications.consumption}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div>
                  <span className="block text-gray-500">Daily Rate</span>
                  <span className="text-3xl font-bold text-blue-600">${vehicle.dailyRate}</span>
                  <span className="text-gray-500">/day</span>
                </div>
                
                <Button
                  onClick={() => window.scrollTo({
                    top: document.getElementById('booking-form')?.offsetTop || 0,
                    behavior: 'smooth'
                  })}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Booking Form Column */}
          <div id="booking-form" className="lg:col-span-1">
            <BookingForm
              vehicle={vehicle}
              onSubmit={handleBookingSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;