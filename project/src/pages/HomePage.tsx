import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Search, MapPin, Star, ArrowRight } from 'lucide-react';
import { mockVehicles } from '../lib/mockData';
import VehicleCard from '../components/vehicle/VehicleCard';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import Input from '../components/ui/Input';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  
  // Extract unique locations from mockVehicles
  const locations = Array.from(new Set(mockVehicles.map(vehicle => vehicle.location)));
  
  // Featured vehicles - just take the first 3 from our mock data
  const featuredVehicles = mockVehicles.slice(0, 3);
  
  // Get top rated vehicles (rating > 4.5)
  const topRatedVehicles = mockVehicles
    .filter(vehicle => vehicle.rating > 4.5)
    .slice(0, 3);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchParams = new URLSearchParams();
    if (selectedType) searchParams.set('type', selectedType);
    if (selectedLocation) searchParams.set('location', selectedLocation);
    
    navigate({
      pathname: '/vehicles',
      search: searchParams.toString()
    });
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/4090150/pexels-photo-4090150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Vehicle Rental
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our wide range of vehicles for any need - from luxury cars to practical utility vehicles.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:space-x-4">
                <div className="flex-1">
                  <Select
                    options={[
                      { value: '', label: 'All vehicle types' },
                      { value: 'car', label: 'Cars' },
                      { value: 'motorcycle', label: 'Motorcycles' },
                      { value: 'utility', label: 'Utility Vehicles' },
                    ]}
                    label="Vehicle Type"
                    value={selectedType}
                    onChange={setSelectedType}
                    fullWidth
                  />
                </div>
                
                <div className="flex-1">
                  <Select
                    options={[
                      { value: '', label: 'All locations' },
                      ...locations.map(location => ({ value: location, label: location })),
                    ]}
                    label="Location"
                    value={selectedLocation}
                    onChange={setSelectedLocation}
                    fullWidth
                  />
                </div>
                
                <div className="self-end">
                  <Button 
                    type="submit" 
                    size="lg"
                    rightIcon={<Search size={18} />}
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Vehicles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Vehicles</h2>
            <Button 
              variant="outline" 
              rightIcon={<ArrowRight size={18} />}
              onClick={() => navigate('/vehicles')}
            >
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Explore by Vehicle Type
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="relative overflow-hidden rounded-lg shadow-md h-64 group cursor-pointer"
              onClick={() => navigate('/vehicles?type=car')}
            >
              <img 
                src="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cars" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Cars</h3>
                <p className="text-gray-200 mb-4">Comfortable rides for any occasion</p>
                <div className="flex items-center text-white">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
            
            <div 
              className="relative overflow-hidden rounded-lg shadow-md h-64 group cursor-pointer"
              onClick={() => navigate('/vehicles?type=motorcycle')}
            >
              <img 
                src="https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Motorcycles" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Motorcycles</h3>
                <p className="text-gray-200 mb-4">Freedom on two wheels</p>
                <div className="flex items-center text-white">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
            
            <div 
              className="relative overflow-hidden rounded-lg shadow-md h-64 group cursor-pointer"
              onClick={() => navigate('/vehicles?type=utility')}
            >
              <img 
                src="https://images.pexels.com/photos/8345275/pexels-photo-8345275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Utility Vehicles" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Utility Vehicles</h3>
                <p className="text-gray-200 mb-4">Practical solutions for all your needs</p>
                <div className="flex items-center text-white">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Rated Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Top Rated Vehicles</h2>
            <div className="flex items-center">
              <Star size={20} className="text-yellow-500 mr-2" />
              <span className="text-gray-700">Highest rated by our customers</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRatedVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Search</h3>
              <p className="text-gray-600">
                Browse our wide selection of vehicles and find the perfect match for your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book</h3>
              <p className="text-gray-600">
                Choose your dates and complete your booking with our secure payment system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enjoy</h3>
              <p className="text-gray-600">
                Pick up your vehicle and enjoy your journey with our top-notch service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose KMW Platform for their vehicle rental needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => navigate('/vehicles')}
          >
            Browse Vehicles
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;