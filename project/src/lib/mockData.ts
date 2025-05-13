import { User, Vehicle, Booking } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Tesla Model 3',
    type: 'car',
    category: 'Electric',
    dailyRate: 89,
    images: [
      'https://images.pexels.com/photos/7902939/pexels-photo-7902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12862937/pexels-photo-12862937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    specifications: {
      year: 2023,
      seats: 5,
      transmission: 'automatic',
      fuel: 'electric',
      consumption: '15kWh/100km',
    },
    features: [
      'Autopilot',
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Parking Sensors',
      'Backup Camera',
    ],
    available: true,
    location: 'Paris',
    description: 'Sleek, modern, and eco-friendly. The Tesla Model 3 offers exceptional performance with zero emissions.',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Mercedes C-Class',
    type: 'car',
    category: 'Luxury',
    dailyRate: 120,
    images: [
      'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    specifications: {
      year: 2022,
      seats: 5,
      transmission: 'automatic',
      fuel: 'petrol',
      consumption: '7L/100km',
    },
    features: [
      'Leather Seats',
      'Climate Control',
      'Premium Sound System',
      'Parking Assist',
      'Adaptive Cruise Control',
      'Heated Seats',
    ],
    available: true,
    location: 'Lyon',
    description: 'Experience luxury driving with the elegant Mercedes C-Class, featuring premium comfort and cutting-edge technology.',
    rating: 4.6,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Renault Kangoo',
    type: 'utility',
    category: 'Van',
    dailyRate: 65,
    images: [
      'https://images.pexels.com/photos/8345275/pexels-photo-8345275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    specifications: {
      year: 2021,
      seats: 3,
      transmission: 'manual',
      fuel: 'diesel',
      consumption: '6L/100km',
    },
    features: [
      'Large Cargo Space',
      'Bluetooth',
      'Air Conditioning',
      'Power Steering',
      'ABS',
    ],
    available: true,
    location: 'Marseille',
    description: 'Practical and reliable utility van perfect for moving or business purposes.',
    rating: 4.2,
    reviews: 56,
  },
  {
    id: '4',
    name: 'BMW R 1250 GS',
    type: 'motorcycle',
    category: 'Adventure',
    dailyRate: 95,
    images: [
      'https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    specifications: {
      year: 2023,
      seats: 2,
      transmission: 'manual',
      fuel: 'petrol',
      consumption: '4.5L/100km',
    },
    features: [
      'ABS',
      'Traction Control',
      'Heated Grips',
      'Adjustable Windscreen',
      'Luggage System',
    ],
    available: true,
    location: 'Nice',
    description: 'The ultimate adventure motorcycle for both on and off-road experiences.',
    rating: 4.9,
    reviews: 42,
  },
  {
    id: '5',
    name: 'Peugeot 208',
    type: 'car',
    category: 'Economy',
    dailyRate: 45,
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    specifications: {
      year: 2021,
      seats: 5,
      transmission: 'manual',
      fuel: 'petrol',
      consumption: '5.2L/100km',
    },
    features: [
      'Air Conditioning',
      'Bluetooth',
      'USB Ports',
      'Navigation',
      'Backup Camera',
    ],
    available: true,
    location: 'Bordeaux',
    description: 'Compact and fuel-efficient city car, perfect for urban driving and weekend getaways.',
    rating: 4.3,
    reviews: 78,
  },
  {
    id: '6',
    name: 'Audi Q5',
    type: 'car',
    category: 'SUV',
    dailyRate: 110,
    images: [
      'https://images.pexels.com/photos/1131575/pexels-photo-1131575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    specifications: {
      year: 2022,
      seats: 5,
      transmission: 'automatic',
      fuel: 'diesel',
      consumption: '6.8L/100km',
    },
    features: [
      'Leather Seats',
      'Panoramic Sunroof',
      'Premium Sound System',
      'Advanced Driver Assistance',
      'Wireless Charging',
      'Climate Control',
    ],
    available: true,
    location: 'Toulouse',
    description: 'Combining luxury, performance, and versatility, the Audi Q5 delivers an exceptional driving experience.',
    rating: 4.7,
    reviews: 63,
  },
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    vehicleId: '1',
    userId: '1',
    startDate: '2025-05-10',
    endDate: '2025-05-15',
    status: 'confirmed',
    totalPrice: 445,
    createdAt: '2025-04-20T14:30:00Z',
  },
  {
    id: '2',
    vehicleId: '3',
    userId: '1',
    startDate: '2025-06-05',
    endDate: '2025-06-07',
    status: 'pending',
    totalPrice: 130,
    createdAt: '2025-05-25T09:15:00Z',
  },
];

// Helper function to get vehicle by ID
export const getVehicleById = (id: string): Vehicle | undefined => {
  return mockVehicles.find(vehicle => vehicle.id === id);
};

// Helper function to get user by ID
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

// Helper function to get bookings by user ID
export const getBookingsByUserId = (userId: string): Booking[] => {
  return mockBookings.filter(booking => booking.userId === userId);
};

// Helper function to check if a vehicle is available for a specific date range
export const isVehicleAvailable = (
  vehicleId: string,
  startDate: string,
  endDate: string
): boolean => {
  const overlappingBookings = mockBookings.filter(
    booking => 
      booking.vehicleId === vehicleId && 
      booking.status !== 'cancelled' &&
      !(new Date(booking.endDate) < new Date(startDate) || 
        new Date(booking.startDate) > new Date(endDate))
  );
  
  return overlappingBookings.length === 0;
};

// Function to filter vehicles based on search criteria
export const filterVehicles = (filters: any): Vehicle[] => {
  return mockVehicles.filter(vehicle => {
    if (filters.type && vehicle.type !== filters.type) return false;
    if (filters.category && vehicle.category !== filters.category) return false;
    if (filters.location && vehicle.location !== filters.location) return false;
    if (filters.minPrice && vehicle.dailyRate < filters.minPrice) return false;
    if (filters.maxPrice && vehicle.dailyRate > filters.maxPrice) return false;
    
    // If start and end dates are provided, check availability
    if (filters.startDate && filters.endDate) {
      return isVehicleAvailable(vehicle.id, filters.startDate, filters.endDate);
    }
    
    return true;
  });
};