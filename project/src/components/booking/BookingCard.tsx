import React from 'react';
import { Calendar, Car, CreditCard, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import { Booking, Vehicle } from '../../types';
import Card from '../ui/Card';

interface BookingCardProps {
  booking: Booking;
  vehicle: Vehicle;
  onCancel?: (bookingId: string) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, vehicle, onCancel }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const statusIcons = {
    pending: <AlertCircle size={16} className="text-yellow-500" />,
    confirmed: <CheckCircle size={16} className="text-green-500" />,
    completed: <CheckCircle size={16} className="text-blue-500" />,
    cancelled: <XCircle size={16} className="text-red-500" />,
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const canCancel = booking.status === 'pending' || booking.status === 'confirmed';

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <img
            src={vehicle.images[0]}
            alt={vehicle.name}
            className="w-full h-28 md:h-full object-cover rounded-md"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
            <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
              {statusIcons[booking.status]}
              <span className="ml-1">{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Pickup Date</div>
                <div className="font-medium">{formatDate(booking.startDate)}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Return Date</div>
                <div className="font-medium">{formatDate(booking.endDate)}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Car size={18} className="text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Vehicle Type</div>
                <div className="font-medium">{vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)} - {vehicle.category}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <CreditCard size={18} className="text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Total Amount</div>
                <div className="font-medium text-blue-600">${booking.totalPrice}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <Clock size={16} className="text-gray-500 mr-1" />
              <span className="text-sm text-gray-500">Booked on {formatDate(booking.createdAt)}</span>
            </div>
            
            {canCancel && onCancel && (
              <button
                onClick={() => onCancel(booking.id)}
                className="text-sm font-medium text-red-600 hover:text-red-800"
              >
                Cancel Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;