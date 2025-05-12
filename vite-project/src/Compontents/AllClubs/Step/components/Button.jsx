import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
}) => {
  const baseClasses =
    'font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center';
  const variantClasses = {
    primary:
      'bg-[#FACC15] text-black hover:bg-[#FACC15]/90 focus:ring-2 focus:ring-[#FACC15]/50 shadow-lg',
    secondary:
      'bg-transparent border-2 border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15]/10 focus:ring-2 focus:ring-[#FACC15]/50',
  };
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
