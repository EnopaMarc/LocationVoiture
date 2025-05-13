import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVehicleById } from '../lib/mockData';
import { useAuth } from '../contexts/AuthContext';
import { Booking } from '../types';
import BookingForm from '../components/booking/BookingForm';
import VehicleCard from '../components/vehicle/VehicleCard';
import Card from '../components/ui/Card';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const vehicle = id ? getVehicleById(id) : undefined;
  
  // If vehicle not found or user not logged in, redirect
  useEffect(() => {
    if (!vehicle && id) {
      navigate('/vehicles');
    }
    
    if (!user) {
      navigate(`/login?redirect=/booking/${id}`);
    }
  }, [vehicle, id, user, navigate]);
  
  if (!vehicle || !user) {
    return null;
  }
  
  const handleBookingSubmit = async (bookingData: Partial<Booking>) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would be an API call to create the booking
    console.log('Booking created:', bookingData);
    
    setIsLoading(false);
    
    // Show success and redirect to dashboard
    alert('Booking submitted successfully!');
    navigate('/dashboard');
  };
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Complete Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Booking Details</h2>
              
              <BookingForm 
                vehicle={vehicle} 
                onSubmit={handleBookingSubmit}
                isLoading={isLoading}
              />
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Selected Vehicle</h2>
              <VehicleCard vehicle={vehicle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;