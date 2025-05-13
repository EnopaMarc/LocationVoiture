export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  profileImage?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'motorcycle' | 'utility';
  category: string;
  dailyRate: number;
  images: string[];
  specifications: {
    year: number;
    seats: number;
    transmission: 'manual' | 'automatic';
    fuel: 'petrol' | 'diesel' | 'electric' | 'hybrid';
    consumption: string;
  };
  features: string[];
  available: boolean;
  location: string;
  description: string;
  rating: number;
  reviews: number;
}

export interface Booking {
  id: string;
  vehicleId: string;
  userId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}

export interface SearchFilters {
  type?: 'car' | 'motorcycle' | 'utility';
  category?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  minPrice?: number;
  maxPrice?: number;
}