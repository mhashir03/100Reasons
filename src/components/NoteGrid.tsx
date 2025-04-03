'use client';

import { useEffect, useState, useRef } from 'react';
import Note from './Note';
import { createLoveNotes, LoveNote } from '@/utils/noteHelpers';

// Create notes outside of component to ensure consistent server/client rendering
const staticNotes = createLoveNotes();

export default function NoteGrid() {
  // Use the static notes to prevent hydration mismatches
  const [notes] = useState<LoveNote[]>(staticNotes);
  const [isLoading, setIsLoading] = useState(false);
  
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
} 