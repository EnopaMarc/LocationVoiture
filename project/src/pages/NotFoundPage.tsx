import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-3 text-lg text-gray-600">
          We couldn't find the page you were looking for. Sorry about that!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            onClick={() => navigate('/')}
            leftIcon={<Home size={18} />}
          >
            Go Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/vehicles')}
            leftIcon={<Search size={18} />}
          >
            Search Vehicles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;