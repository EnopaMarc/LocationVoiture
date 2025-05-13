import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getBookingsByUserId, getVehicleById } from '../lib/mockData';
import { User, Booking, Vehicle } from '../types';
import { Car, Calendar, User as UserIcon, LogOut, Plus } from 'lucide-react';
import BookingCard from '../components/booking/BookingCard';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'bookings' | 'profile'>('bookings');
  
  // Get bookings
  const userBookings = user ? getBookingsByUserId(user.id) : [];
  
  // Get vehicles for each booking
  const bookingsWithVehicles = userBookings.map(booking => {
    const vehicle = getVehicleById(booking.vehicleId);
    return { booking, vehicle };
  }).filter(item => item.vehicle !== undefined) as {
    booking: Booking;
    vehicle: Vehicle;
  }[];
  
  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/dashboard');
    }
  }, [user, navigate]);
  
  if (!user) {
    return null;
  }
  
  const handleCancelBooking = (bookingId: string) => {
    // In a real app, this would be an API call
    alert(`Booking ${bookingId} cancelled.`);
    // Would need to refresh bookings after cancellation
  };
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage your bookings and account</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <div className="flex items-center space-x-4 mb-6">
                {user.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt={user.name} 
                    className="h-16 w-16 rounded-full"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-gray-500">{user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'bookings'
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('bookings')}
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  My Bookings
                </button>
                
                <button
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'profile'
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <UserIcon className="mr-3 h-5 w-5" />
                  Profile Settings
                </button>
                
                <button
                  className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Log Out
                </button>
              </nav>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'bookings' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">My Bookings</h2>
                  <Button
                    variant="outline"
                    leftIcon={<Plus size={18} />}
                    onClick={() => navigate('/vehicles')}
                  >
                    New Booking
                  </Button>
                </div>
                
                {bookingsWithVehicles.length > 0 ? (
                  <div className="space-y-6">
                    {bookingsWithVehicles.map(({ booking, vehicle }) => (
                      <BookingCard
                        key={booking.id}
                        booking={booking}
                        vehicle={vehicle}
                        onCancel={handleCancelBooking}
                      />
                    ))}
                  </div>
                ) : (
                  <Card className="text-center py-12">
                    <Car size={48} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
                    <p className="text-gray-500 mb-6">You haven't made any bookings yet.</p>
                    <Button
                      onClick={() => navigate('/vehicles')}
                    >
                      Browse Vehicles
                    </Button>
                  </Card>
                )}
              </div>
            )}
            
            {activeTab === 'profile' && (
              <Card>
                <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Account Type
                    </label>
                    <input
                      type="text"
                      value={user.role === 'admin' ? 'Administrator' : 'Regular User'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">
                      Note: This is a demo application. In a real application, you would be able to edit your profile information.
                    </p>
                    <Button disabled>Save Changes</Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;