import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Users, Battery, Fuel } from 'lucide-react';
import { Vehicle } from '../../types';
import Card from '../ui/Card';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const navigate = useNavigate();

  const getFuelIcon = (fuel: string) => {
    switch (fuel) {
      case 'electric':
        return <Battery className="text-green-500" size={16} />;
      default:
        return <Fuel size={16} />;
    }
  };

  return (
    <Card 
      hoverable 
      className="h-full flex flex-col overflow-hidden transition-all duration-300"
      onClick={() => navigate(`/vehicles/${vehicle.id}`)}
    >
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={vehicle.images[0]} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
            {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}
          </span>
        </div>
        <div className="absolute top-0 right-0 m-4">
          <span className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            {vehicle.category}
          </span>
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{vehicle.name}</h3>
        
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-600">{vehicle.location}</span>
          <div className="flex items-center ml-auto">
            <Star size={16} className="text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{vehicle.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({vehicle.reviews})</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center text-xs bg-gray-100 rounded-full px-2 py-1">
            <Users size={14} className="mr-1" />
            <span>{vehicle.specifications.seats} seats</span>
          </div>
          <div className="flex items-center text-xs bg-gray-100 rounded-full px-2 py-1">
            {getFuelIcon(vehicle.specifications.fuel)}
            <span className="ml-1">{vehicle.specifications.fuel}</span>
          </div>
          <div className="flex items-center text-xs bg-gray-100 rounded-full px-2 py-1">
            <span>{vehicle.specifications.transmission}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="font-bold text-lg text-blue-600">${vehicle.dailyRate}</span>
          <span className="text-gray-500 text-sm">/day</span>
        </div>
        <button 
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/booking/${vehicle.id}`);
          }}
        >
          Book Now
        </button>
      </div>
    </Card>
  );
};

export default VehicleCard;