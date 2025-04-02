'use client';

import { useEffect, useState } from 'react';
import Note from './Note';
import { createLoveNotes, LoveNote } from '@/utils/noteHelpers';

export default function NoteGrid() {
  const [notes, setNotes] = useState<LoveNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Create the love notes with a small delay for a nicer loading effect
    setIsLoading(true);
    const timer = setTimeout(() => {
      setNotes(createLoveNotes());
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="text-center">
          <div className="heart-icon text-4xl mb-3">❤</div>
          <p className="handwritten">Gathering all the love notes...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
} 