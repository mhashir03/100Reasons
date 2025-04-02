'use client';

import React from 'react';
import Tulip from './Tulip';

interface TulipFieldProps {
  count?: number;
  className?: string;
  absolute?: boolean; // Whether tulips should be absolutely positioned
  heightClass?: string; // Optional height class
  widthClass?: string; // Optional width class
  distribution?: 'scatter' | 'bottom'; // How tulips should be distributed
  zIndex?: number; // Control the z-index for proper layering
}

const TulipField: React.FC<TulipFieldProps> = ({ 
  count = 10, 
  className = '',
  absolute = true,
  heightClass = 'h-24',
  widthClass = 'w-full',
  distribution = 'bottom',
  zIndex = 0
}) => {
  const tulipColors: ('pink' | 'purple' | 'yellow' | 'blue')[] = ['pink', 'purple', 'yellow', 'blue'];
  const tulipSizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg'];
  const animationClasses = ['animate-float', 'animate-float-slow', 'animate-sway', 'animate-sway-slow'];
  
  // Create an array to represent the tulips
  const tulips = Array.from({ length: count }, (_, index) => {
    // Randomize tulip properties
    const color = tulipColors[Math.floor(Math.random() * tulipColors.length)];
    const size = tulipSizes[Math.floor(Math.random() * tulipSizes.length)];
    const rotation = Math.floor(Math.random() * 30) - 15; // Between -15 and 15 degrees
    const animationClass = animationClasses[Math.floor(Math.random() * animationClasses.length)];
    
    // Position based on distribution
    let positionStyle = {};
    if (distribution === 'scatter') {
      // For scatter, place tulips randomly throughout the container
      // Avoid edges to prevent overflow issues
      const paddingPercent = 10; // Keep tulips 10% away from edges
      positionStyle = {
        left: `${paddingPercent + Math.floor(Math.random() * (100 - paddingPercent * 2))}%`,
        top: `${paddingPercent + Math.floor(Math.random() * (100 - paddingPercent * 2))}%`,
      };
    } else {
      // For bottom (default), place tulips along the bottom with random horizontal position
      // Avoid edges to prevent overflow issues
      const paddingPercent = 5; // Keep tulips 5% away from edges
      positionStyle = {
        left: `${paddingPercent + Math.floor(Math.random() * (100 - paddingPercent * 2))}%`,
        bottom: '0',
      };
    }
    
    const delay = Math.random() * 3; // Random animation delay
    
    return (
      <div 
        key={index}
        className={`${absolute ? 'absolute' : 'relative'} ${animationClass} pointer-events-none`}
        style={{ 
          ...positionStyle,
          animationDelay: `${delay}s`,
          zIndex: Math.floor(Math.random() * 3) + zIndex
        }}
      >
        <Tulip 
          color={color} 
          size={size} 
          rotation={rotation} 
        />
      </div>
    );
  });
  
  return (
    <div className={`relative ${heightClass} ${widthClass} overflow-visible ${className}`} style={{ pointerEvents: 'none' }}>
      {tulips}
    </div>
  );
};

export default TulipField; 