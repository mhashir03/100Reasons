'use client';

import { FC } from 'react';

interface TulipProps {
  color?: 'pink' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  rotation?: number;
  className?: string;
}

const Tulip: FC<TulipProps> = ({ 
  color = 'yellow', 
  size = 'md', 
  rotation = 0,
  className = '',
}) => {
  // Define the tulip colors
  const colors = {
    yellow: {
      flower: '#fff77d',
      stem: '#5a8d4e',
    },
    pink: {
      flower: '#ffb7c5',
      stem: '#5a8d4e',
    },
  };

  // Define tulip sizes (pixels)
  const sizes = {
    sm: {
      flower: 30,
      stem: 40,
      leafWidth: 15,
    },
    md: {
      flower: 45,
      stem: 60,
      leafWidth: 20,
    },
    lg: {
      flower: 60,
      stem: 80,
      leafWidth: 25,
    },
  };

  const tulipColor = colors[color];
  const tulipSize = sizes[size];

  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        width: tulipSize.flower,
        height: tulipSize.flower + tulipSize.stem,
        transformOrigin: 'bottom center',
      }}
    >
      {/* Stem */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '4px',
          height: tulipSize.stem,
          backgroundColor: tulipColor.stem,
          transform: 'translateX(-50%)',
        }}
      />
      
      {/* Leaf */}
      <div 
        style={{
          position: 'absolute',
          bottom: tulipSize.stem * 0.4,
          right: '50%',
          width: tulipSize.leafWidth,
          height: tulipSize.leafWidth / 2,
          backgroundColor: tulipColor.stem,
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          transform: 'rotate(-15deg)',
        }}
      />
      
      {/* Flower */}
      <div
        style={{
          position: 'absolute',
          bottom: tulipSize.stem,
          left: 0,
          width: tulipSize.flower,
          height: tulipSize.flower,
        }}
      >
        {/* Petals */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: tulipColor.flower,
            borderTopLeftRadius: '60%',
            borderTopRightRadius: '60%',
            borderBottomLeftRadius: '10%',
            borderBottomRightRadius: '10%',
          }}
        />
      </div>
    </div>
  );
};

export default Tulip; 