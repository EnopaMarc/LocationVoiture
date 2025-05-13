import React, { useState, useEffect } from 'react';
import { Calendar, CreditCard, Clock } from 'lucide-react';
import { Vehicle, Booking } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';

interface BookingFormProps {
  vehicle: Vehicle;
  onSubmit: (booking: Partial<Booking>) => void;
  isLoading?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({
  vehicle,
  onSubmit,
  isLoading = false,
}) => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [totalDays, setTotalDays] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [pickupTime, setPickupTime] = useState<string>('10:00');
  const [returnTime, setReturnTime] = useState<string>('10:00');

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      
      if (differenceInDays >= 0) {
        setTotalDays(differenceInDays);
        setTotalPrice(differenceInDays * vehicle.dailyRate);
      } else {
        setTotalDays(0);
        setTotalPrice(0);
      }
    } else {
      setTotalDays(0);
      setTotalPrice(0);
    }
  }, [startDate, endDate, vehicle.dailyRate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    const bookingData: Partial<Booking> = {
      vehicleId: vehicle.id,
      userId: user.id,
      startDate,
      endDate,
      status: 'pending',
      totalPrice,
    };
    
    onSubmit(bookingData);
  };

  // Get tomorrow's date for the min attribute of the first date input
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  // Get the day after tomorrow for the min attribute of the second date input
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  const dayAfterTomorrowStr = dayAfterTomorrow.toISOString().split('T')[0];

  return (
    <Card className="sticky top-24">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Book This Vehicle</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Input
              type="date"
              label="Pickup Date"
              min={tomorrowStr}
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              leftIcon={<Calendar size={18} />}
              fullWidth
            />
          </div>
          
          <div>
            <Input
              type="time"
              label="Pickup Time"
              required
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              leftIcon={<Clock size={18} />}
              fullWidth
            />
          </div>
          
          <div>
            <Input
              type="date"
              label="Return Date"
              min={startDate || dayAfterTomorrowStr}
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              leftIcon={<Calendar size={18} />}
              fullWidth
            />
          </div>
          
          <div>
            <Input
              type="time"
              label="Return Time"
              required
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
              leftIcon={<Clock size={18} />}
              fullWidth
            />
          </div>
          
          {totalDays > 0 && (
            <div className="pt-4 pb-2 mt-4 border-t border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Daily Rate:</span>
                <span className="font-medium">${vehicle.dailyRate}/day</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{totalDays} day{totalDays > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total Price:</span>
                <span className="text-blue-600">${totalPrice}</span>
              </div>
            </div>
          )}
          
          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
            disabled={!startDate || !endDate || totalDays <= 0 || isLoading || !user}
            rightIcon={<CreditCard size={18} />}
          >
            {user ? 'Proceed to Booking' : 'Login to Book'}
          </Button>
          
          {!user && (
            <p className="text-sm text-red-500 mt-2">
              You need to login to book this vehicle.
            </p>
          )}
        </div>
      </form>
    </Card>
  );
};

export default BookingForm;