'use client';

import React from 'react';

interface TulipProps {
  color?: 'pink' | 'purple' | 'yellow' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  rotation?: number;
  className?: string;
}

const Tulip: React.FC<TulipProps> = ({ 
  color = 'pink',
  size = 'md',
  rotation = 0,
  className = ''
}) => {
  const colors = {
    pink: {
      flower: '#f8a5c2',
      flowerDark: '#e5829e',
      stem: '#68a968',
      leaf: '#89c389'
    },
    purple: {
      flower: '#c3aed6',
      flowerDark: '#a18cbd',
      stem: '#68a968',
      leaf: '#89c389'
    },
    yellow: {
      flower: '#f7e3a0',
      flowerDark: '#e5cc70',
      stem: '#68a968',
      leaf: '#89c389'
    },
    blue: {
      flower: '#a6cef7',
      flowerDark: '#7baae3',
      stem: '#68a968',
      leaf: '#89c389'
    }
  };

  const sizes = {
    sm: {
      flower: 12,
      stem: 2,
      height: 40
    },
    md: {
      flower: 16,
      stem: 2.5,
      height: 60
    },
    lg: {
      flower: 20,
      stem: 3,
      height: 80
    }
  };

  const { flower: flowerColor, flowerDark, stem: stemColor, leaf: leafColor } = colors[color];
  const { flower: flowerSize, stem: stemSize, height } = sizes[size];

  return (
    <div 
      className={`relative inline-block ${className}`} 
      style={{ 
        height: `${height}px`, 
        width: `${flowerSize * 2.5}px`,
        transform: `rotate(${rotation}deg)`
      }}
    >
      {/* Stem with curve */}
      <div
        className="absolute"
        style={{
          backgroundColor: 'transparent',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: `${stemSize}px`,
          height: `${height - flowerSize * 1.8}px`,
          background: `linear-gradient(to right, transparent 45%, ${stemColor} 45%, ${stemColor} 55%, transparent 55%)`,
          borderRadius: '50%',
        }}
      />
      
      {/* Leaf 1 */}
      <div 
        style={{
          position: 'absolute',
          backgroundColor: leafColor,
          height: `${flowerSize * 0.6}px`,
          width: `${flowerSize * 1.2}px`,
          bottom: `${height / 2.5}px`,
          left: `calc(50% - ${flowerSize * 0.3}px)`,
          borderRadius: '50% 50% 0 50%',
          transform: 'rotate(-20deg)',
          boxShadow: `inset 1px 1px 1px rgba(255,255,255,0.3), inset -1px -1px 1px rgba(0,0,0,0.1)`
        }}
      />
      
      {/* Leaf 2 - smaller leaf on opposite side */}
      <div 
        style={{
          position: 'absolute',
          backgroundColor: leafColor,
          height: `${flowerSize * 0.5}px`,
          width: `${flowerSize * 0.8}px`,
          bottom: `${height / 3}px`,
          right: `calc(50% - ${flowerSize * 0.3}px)`,
          borderRadius: '50% 50% 50% 0',
          transform: 'rotate(20deg)',
          boxShadow: `inset 1px 1px 1px rgba(255,255,255,0.3), inset -1px -1px 1px rgba(0,0,0,0.1)`
        }}
      />
      
      {/* Tulip cup base */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: `${flowerSize * 1.6}px`,
          height: `${flowerSize * 0.5}px`,
          backgroundColor: flowerDark,
          borderRadius: '0 0 40% 40%',
          zIndex: 2
        }}
      />
      
      {/* Flower Petals Group */}
      <div
        className="absolute"
        style={{
          width: `${flowerSize * 2.5}px`,
          height: `${flowerSize * 2.2}px`,
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}
      >
        {/* Petal 1 - Left */}
        <div
          style={{
            position: 'absolute',
            backgroundColor: flowerColor,
            width: `${flowerSize * 1.2}px`,
            height: `${flowerSize * 2}px`,
            left: '0',
            top: '0',
            borderRadius: '70% 30% 70% 30%',
            transform: 'rotate(-5deg)',
            boxShadow: `inset 2px 2px 5px rgba(255,255,255,0.4), inset -2px -2px 5px rgba(0,0,0,0.1)`
          }}
        />
        
        {/* Petal 2 - Center */}
        <div
          style={{
            position: 'absolute',
            backgroundColor: flowerColor,
            width: `${flowerSize * 1.2}px`,
            height: `${flowerSize * 2.2}px`,
            left: '50%',
            top: '0',
            transform: 'translateX(-50%)',
            borderRadius: '60% 60% 40% 40%',
            boxShadow: `inset 2px 0 5px rgba(255,255,255,0.4), inset -2px -2px 5px rgba(0,0,0,0.1)`
          }}
        />
        
        {/* Petal 3 - Right */}
        <div
          style={{
            position: 'absolute',
            backgroundColor: flowerColor,
            width: `${flowerSize * 1.2}px`,
            height: `${flowerSize * 2}px`,
            right: '0',
            top: '0',
            borderRadius: '30% 70% 30% 70%',
            transform: 'rotate(5deg)',
            boxShadow: `inset -2px 2px 5px rgba(255,255,255,0.4), inset 2px -2px 5px rgba(0,0,0,0.1)`
          }}
        />
      </div>
    </div>
  );
};

export default Tulip; 