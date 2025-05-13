import React, { useState } from 'react';
import { Search, Calendar, MapPin, Car, Filter, X } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { SearchFilters } from '../../types';

interface VehicleFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
  locations: string[];
  categories: string[];
}

const VehicleFilters: React.FC<VehicleFiltersProps> = ({ 
  onFilterChange,
  locations,
  categories
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleInputChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const clearFilters = () => {
    setFilters({});
    setStartDate('');
    setEndDate('');
  };

  const applyFilters = () => {
    const updatedFilters = { ...filters };
    
    if (startDate) {
      updatedFilters.startDate = startDate;
    }
    
    if (endDate) {
      updatedFilters.endDate = endDate;
    }
    
    onFilterChange(updatedFilters);
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Find Your Perfect Vehicle</h2>
        <Button 
          variant="ghost" 
          size="sm"
          leftIcon={isOpen ? <X size={18} /> : <Filter size={18} />}
          onClick={toggleFilters}
        >
          {isOpen ? 'Close' : 'Filters'}
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Input
            placeholder="Search by vehicle name"
            leftIcon={<Search size={18} />}
            value={filters.type || ''}
            onChange={(e) => handleInputChange('type', e.target.value)}
            fullWidth
          />
        </div>
        
        <div className="relative">
          <Select
            options={[
              { value: '', label: 'All vehicle types' },
              { value: 'car', label: 'Cars' },
              { value: 'motorcycle', label: 'Motorcycles' },
              { value: 'utility', label: 'Utility Vehicles' },
            ]}
            value={filters.type || ''}
            onChange={(value) => handleInputChange('type', value)}
            fullWidth
          />
        </div>
        
        <div className="relative">
          <Select
            options={[
              { value: '', label: 'All locations' },
              ...locations.map(location => ({ value: location, label: location }))
            ]}
            value={filters.location || ''}
            onChange={(value) => handleInputChange('location', value)}
            fullWidth
          />
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          <div>
            <Select
              label="Category"
              options={[
                { value: '', label: 'All categories' },
                ...categories.map(category => ({ value: category, label: category }))
              ]}
              value={filters.category || ''}
              onChange={(value) => handleInputChange('category', value)}
              fullWidth
            />
          </div>
          
          <div>
            <Input
              type="date"
              label="Pickup Date"
              leftIcon={<Calendar size={18} />}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              fullWidth
            />
          </div>
          
          <div>
            <Input
              type="date"
              label="Return Date"
              leftIcon={<Calendar size={18} />}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              fullWidth
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Price Range
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={filters.minPrice || ''}
                onChange={(e) => handleInputChange('minPrice', parseFloat(e.target.value))}
              />
              <Input
                type="number"
                placeholder="Max"
                value={filters.maxPrice || ''}
                onChange={(e) => handleInputChange('maxPrice', parseFloat(e.target.value))}
              />
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-4 flex justify-end space-x-4 mt-4">
            <Button 
              variant="outline" 
              onClick={clearFilters}
              leftIcon={<X size={18} />}
            >
              Clear
            </Button>
            <Button 
              onClick={applyFilters}
              leftIcon={<Search size={18} />}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleFilters;