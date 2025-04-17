import React from 'react';
import { useTheme } from './ThemeProvider';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated';
}

const cardVariants = {
  default: {
    light: 'bg-white border border-gray-200',
    dark: 'bg-gray-800 border border-gray-700',
  },
  elevated: {
    light: 'bg-white shadow-md',
    dark: 'bg-gray-800 shadow-md shadow-gray-900',
  },
};

export const Card: React.FC<CardProps> = ({
  title,
  footer,
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const { colorScheme } = useTheme();
  const baseClasses = 'rounded-lg overflow-hidden';
  const variantClasses = cardVariants[variant][colorScheme];
  const titleClasses = colorScheme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const borderClasses = colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const footerBgClasses = colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {title && (
        <div className={`px-4 py-3 border-b ${borderClasses}`}>
          <h3 className={`text-lg font-medium ${titleClasses}`}>{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className={`px-4 py-3 border-t ${borderClasses} ${footerBgClasses}`}>
          {footer}
        </div>
      )}
    </div>
  );
}; 