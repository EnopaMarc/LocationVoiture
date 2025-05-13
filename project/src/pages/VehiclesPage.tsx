import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterVehicles, mockVehicles } from '../lib/mockData';
import VehicleCard from '../components/vehicle/VehicleCard';
import VehicleFilters from '../components/vehicle/VehicleFilters';
import { SearchFilters } from '../types';

const VehiclesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [vehicles, setVehicles] = useState(mockVehicles);
  
  // Extract initial filters from URL search params
  const initialFilters: SearchFilters = {
    type: searchParams.get('type') || undefined,
    location: searchParams.get('location') || undefined,
  };
  
  // Extract unique locations and categories for filter options
  const locations = Array.from(new Set(mockVehicles.map(vehicle => vehicle.location)));
  const categories = Array.from(new Set(mockVehicles.map(vehicle => vehicle.category)));
  
  useEffect(() => {
    // Apply initial filters from URL params
    if (Object.keys(initialFilters).some(key => initialFilters[key as keyof SearchFilters])) {
      const filteredVehicles = filterVehicles(initialFilters);
      setVehicles(filteredVehicles);
    }
  }, []);
  
  const handleFilterChange = (filters: SearchFilters) => {
    const filteredVehicles = filterVehicles(filters);
    setVehicles(filteredVehicles);
  };
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vehicle Listings</h1>
          <p className="text-gray-600">
            Find the perfect vehicle for your needs from our extensive collection.
          </p>
        </div>
        
        <VehicleFilters
          onFilterChange={handleFilterChange}
          locations={locations}
          categories={categories}
        />
        
        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No vehicles found
            </h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any vehicles matching your search criteria.
            </p>
            <button
              className="text-blue-600 font-medium hover:text-blue-800"
              onClick={() => handleFilterChange({})}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;