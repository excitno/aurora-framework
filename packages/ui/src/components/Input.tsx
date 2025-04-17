import React from 'react';
import { useTheme } from './ThemeProvider';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const inputVariants = {
  default: {
    light: 'bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900',
    dark: 'bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white',
  },
  outline: {
    light: 'bg-transparent border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900',
    dark: 'bg-transparent border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white',
  },
};

const inputSizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const { colorScheme } = useTheme();
  const baseClasses = 'block w-full rounded-md shadow-sm';
  const variantClasses = inputVariants[variant][colorScheme];
  const sizeClasses = inputSizes[size];
  const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';
  const labelClasses = colorScheme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const errorTextClasses = colorScheme === 'dark' ? 'text-red-400' : 'text-red-600';

  return (
    <div className="space-y-1">
      {label && (
        <label className={`block text-sm font-medium ${labelClasses}`}>
          {label}
        </label>
      )}
      <input
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${errorClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className={`mt-1 text-sm ${errorTextClasses}`}>
          {error}
        </p>
      )}
    </div>
  );
}; 