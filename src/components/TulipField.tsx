'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Tulip from './Tulip';

interface TulipFieldProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  isStatic?: boolean;
  maxWidth?: number;
}

const TulipField: FC<TulipFieldProps> = ({ 
  className = '',
  density = 'medium',
  isStatic = false,
  maxWidth,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tulips, setTulips] = useState<React.ReactNode[]>([]);
  
  // Initialize with static tulips for fast initial loading
  useEffect(() => {
    // Array of all available colors
    const colors = ['pink', 'yellow', 'purple', 'blue', 'orange'];
    
    // Static counts for different screen sizes to ensure predictable loading
    const staticCounts = {
      small: { low: 4, medium: 5, high: 7 },
      medium: { low: 6, medium: 8, high: 10 },
      large: { low: 8, medium: 10, high: 12 }
    };
  
    // Density factors for dynamic sizing
    const densityFactors = {
      low: 24,
      medium: 20,
      high: 16
    };
    
    // Generate a set of static tulips - will be used for initial render or static mode
    const generateTulips = (count: number) => {
      return Array.from({ length: count }).map((_, index) => {
        const size = 'xs'; // Always use extra small for consistent containment
        const rotation = (Math.random() * 6) - 3; // Smaller rotation range
        const colorIndex = Math.floor(Math.random() * colors.length);
        const color = colors[colorIndex];
        const animationClass = Math.random() > 0.6 ? 'animate-sway-slow' : 'animate-sway';
        
        return (
          <div 
            key={`tulip-${index}`}
            className={`inline-block ${animationClass}`}
            style={{ 
              animationDelay: `${Math.random() * 2}s`,
              margin: '0 6px', // Wider spacing between tulips
            }}
          >
            <Tulip 
              size={size as 'xs'} 
              rotation={rotation} 
              color={color as 'pink' | 'yellow' | 'purple' | 'blue' | 'orange'} 
            />
          </div>
        );
      });
    };
    
    // Determine a reasonable static count based on screen size
    const getStaticCount = () => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
      let screenSize: keyof typeof staticCounts = 'medium';
      
      if (screenWidth < 640) screenSize = 'small';
      else if (screenWidth > 1024) screenSize = 'large';
      
      return staticCounts[screenSize][density];
    };

    // Generate initial static tulips for immediate render
    const initialCount = getStaticCount();
    setTulips(generateTulips(initialCount));
    
    // If static mode is enabled, don't add resize listeners
    if (isStatic) return;
    
    // For dynamic mode, recalculate on resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      // Calculate available width based on container or maxWidth
      const containerWidth = maxWidth || containerRef.current.clientWidth;
      const availableWidth = Math.max(200, containerWidth - 80); // Subtract generous padding
      
      // Calculate tulip count based on available width and density
      const spacing = densityFactors[density];
      const count = Math.max(3, Math.floor(availableWidth / spacing));
      
      // Only regenerate if count has changed significantly
      if (Math.abs(count - tulips.length) > 1) {
        setTulips(generateTulips(count));
      }
    };
    
    // Add event listener and clean up
    window.addEventListener('resize', handleResize);
    // Run once after mounting to adjust to actual container size
    setTimeout(handleResize, 100);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isStatic, density, maxWidth, tulips.length]);
  
  return (
    <div 
      ref={containerRef}
      className={`flex flex-row flex-nowrap justify-center items-center w-full py-2 ${className}`}
      style={{ 
        maxWidth: maxWidth ? `${maxWidth}px` : '100%',
        overflow: 'hidden' // Additional overflow protection
      }}
    >
      {tulips}
    </div>
  );
};

export default TulipField; 