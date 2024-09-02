import React from 'react';

interface BaseLabelProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const BaseLabel: React.FC<BaseLabelProps> = ({ id, className = '', children }) => {
  return (
    <label
      className={`block mb-2 text-base font-medium text-gray-700 ${className}`}
      htmlFor={id}
    >
      {children}
    </label>
  );
};

export default BaseLabel;
