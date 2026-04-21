import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'red' | 'gray' | 'orange';
}

export function Badge({ children, variant = 'gray' }: BadgeProps) {
  const variants = {
    blue: "bg-indigo-50 text-indigo-700 border-indigo-100",
    green: "bg-green-50 text-green-700 border-green-100",
    red: "bg-red-50 text-red-700 border-red-100",
    gray: "bg-gray-100 text-slate-600 border-gray-200",
    orange: "bg-amber-50 text-amber-800 border-amber-100",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-semibold border uppercase tracking-wider",
      variants[variant]
    )}>
      {children}
    </span>
  );
}
