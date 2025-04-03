'use client';

import { useState, useEffect } from 'react';
import { LoveNote } from '@/utils/noteHelpers';

interface NoteProps {
  note: LoveNote;
}

export default function Note({ note }: NoteProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Run client-side effects after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Get variant class for subtle color differences
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
  
  // Use the attachment style from the note object for consistency
  const attachmentStyle = note.id % 4; // Deterministic based on note ID
  
  // Custom styles for the sticky note - static during render
  const noteStyle = {
    transform: isMounted ? `rotate(${note.rotation}deg)` : 'rotate(0deg)',
    transformStyle: 'preserve-3d' as 'preserve-3d',
    transition: 'transform 0.6s',
    margin: '1.5rem 0.5rem',
    maxWidth: '100%',
    minHeight: '100px',
    position: 'relative' as 'relative',
    top: isMounted ? note.position?.top : '0',
    left: isMounted ? note.position?.left : '0',
    right: isMounted ? note.position?.right : '0',
    '--rotation': `${note.id % 7 - 3}deg` as any // Deterministic based on note ID
  };
  
  return (
    <div 
      className={`sticky-note ${getVariantClass()} handwritten relative`}
      style={noteStyle}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {isMounted && (
        <>
          {/* Folded corner */}
          {attachmentStyle === 0 && (
            <div className="folded-corner"></div>
          )}
          
          {/* Pin element */}
          {attachmentStyle === 1 && (
            <div className="absolute rounded-full w-3 h-3 top-2 right-2 bg-red-400 shadow-sm" style={{ boxShadow: 'inset 0 0 2px rgba(0,0,0,0.2)' }}></div>
          )}
          
          {/* Multiple tape pieces */}
          {attachmentStyle === 2 && (
            <>
              <div className="absolute w-6 h-5 -top-2 -left-1 bg-red-300 opacity-60 rounded-sm" style={{ transform: 'rotate(-35deg)' }}></div>
              <div className="absolute w-6 h-5 -bottom-2 -right-1 bg-red-300 opacity-60 rounded-sm" style={{ transform: 'rotate(30deg)' }}></div>
            </>
          )}
          
          {/* Paperclip */}
          {attachmentStyle === 3 && (
            <div className="absolute w-3 h-8 border-2 border-gray-400 rounded-full -top-3 right-4 rotate-12"></div>
          )}
        </>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs opacity-60">#{note.id}</span>
        <span className="heart-icon text-xs">❤</span>
      </div>
      <p className="text-base sm:text-lg font-handwritten text-center">
        {note.text}
      </p>
    </div>
  );
} 