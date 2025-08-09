import React from 'react';
import { CardProps, ProgressRingProps } from 'types/Ratings';

// Simple Card component with proper typing
const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-transparent border border-gray-600 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

// Progress Ring component
const ProgressRing: React.FC<ProgressRingProps> = ({ value, size = 60, stroke = 8, color = "green" }) => {
  const radius = (size - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const colorMap: Record<string, string> = {
    green: "#10b981"
  };

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform rotate-90" style={{ overflow: 'visible' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth={stroke}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colorMap[color] || color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-xs">{value}%</span>
      </div>
    </div>
  );
};

export default function RatingCard() {
  return (
    <Card className="w-full h-20">
      <div className="p-3 md:p-4 text-white flex items-center gap-3 md:gap-3 overflow-hidden">
        <ProgressRing value={85} size={40} stroke={4} color="green" />
        <div className="flex flex-col justify-items-start min-w-0">
          <h4 className="text-sm font-medium text-white">Current</h4>
          <h4 className="text-sm font-medium text-white">Rating</h4>
        </div>
      </div>
    </Card>
  );
}
