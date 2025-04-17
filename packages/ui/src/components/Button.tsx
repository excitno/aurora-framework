import React from 'react';
import { useTheme } from './ThemeProvider';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const buttonVariants = {
  primary: {
    light: 'bg-blue-600 hover:bg-blue-700 text-white',
    dark: 'bg-blue-500 hover:bg-blue-400 text-white',
  },
  secondary: {
    light: 'bg-gray-600 hover:bg-gray-700 text-white',
    dark: 'bg-gray-700 hover:bg-gray-600 text-white',
  },
  outline: {
    light: 'border border-gray-300 hover:bg-gray-100 text-gray-700',
    dark: 'border border-gray-600 hover:bg-gray-800 text-gray-300',
  },
};

const buttonSizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const { colorScheme } = useTheme();
  const baseClasses = 'rounded-md font-medium transition-colors duration-200';
  const variantClasses = buttonVariants[variant][colorScheme];
  const sizeClasses = buttonSizes[size];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 