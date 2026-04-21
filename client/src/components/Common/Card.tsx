import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
