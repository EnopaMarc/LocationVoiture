import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  onClick,
  hoverable = false
}) => {
  const hoverClass = hoverable 
    ? 'hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-200' 
    : '';
  
  return (
    <div 
      className={`
        bg-white rounded-lg shadow p-6 
        ${onClick ? 'cursor-pointer' : ''}
        ${hoverClass}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;