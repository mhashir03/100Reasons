'use client';

import { useState } from 'react';
import { LoveNote } from '@/utils/noteHelpers';

interface NoteProps {
  note: LoveNote;
}

export default function Note({ note }: NoteProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const getVariantClass = () => {
    switch (note.variant) {
      case 'pink':
        return 'sticky-note-pink';
      case 'lavender':
        return 'sticky-note-lavender';
      case 'mint':
        return 'sticky-note-mint';
      default:
        return '';
    }
  };
  
  return (
    <div 
      className={`sticky-note ${getVariantClass()} handwritten`}
      style={{ 
        transform: `rotate(${note.rotation}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s'
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs opacity-60">#{note.id}</span>
        <span className="heart-icon text-lg">❤</span>
      </div>
      <p className="text-lg font-handwritten text-center">
        {note.text}
      </p>
    </div>
  );
} 