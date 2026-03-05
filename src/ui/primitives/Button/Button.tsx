import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

const baseStyles =
    'px-4 py-2 rounded focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50',
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};