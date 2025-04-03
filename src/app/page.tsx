'use client';

import { useState } from 'react';
import NoteGrid from '@/components/NoteGrid';
import TulipField from '@/components/TulipField';

export default function Home() {
  const [showMessage, setShowMessage] = useState(true);
  
  return (
    <main className="min-h-screen py-8 px-4 relative overflow-hidden">
      {showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95">
          <div className="max-w-md w-full bg-paper p-8 rounded-lg shadow-notebook text-center relative">
            <h2 className="text-2xl font-cursive text-primary mb-4">Welcome!</h2>
            <p className="handwritten mb-4">
            I love you Merriam. Always have, always will.
            </p>
            <div className="mb-4">
              <span className="heart-icon text-4xl">❤</span>
            </div>
            <button 
              onClick={() => setShowMessage(false)}
              className="px-6 py-2 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition-colors font-cursive"
            >
              Read My Notes
            </button>
            
            {/* Small tulip decoration in the modal */}
            <div className="absolute bottom-2 w-full flex justify-center items-center pointer-events-none overflow-hidden">
              <TulipField density="low" className="opacity-60 modal-tulips" maxWidth={300} isStatic={true} />
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="notebook-page mb-8 relative">
          <div className="paper-fold"></div>
          
          {/* Top tulip border - contained inside notebook paper */}
          <div className="w-full border-b border-transparent mb-6 pointer-events-none overflow-hidden px-8">
            <TulipField density="medium" isStatic={true} />
          </div>
          
          <header className="mb-8 relative z-10">
            <h1 className="page-title" spellCheck="false">
              100 Reasons Why I Love Merriam
            </h1>
            <p className="text-center handwritten text-lg">
              Every reason is a memory, a feeling, a moment that makes my heart skip a beat.
            </p>
          </header>
          
          <NoteGrid />
          
          {/* Bottom tulip border - contained inside notebook paper */}
          <div className="w-full border-t border-transparent mt-8 pointer-events-none overflow-hidden px-8">
            <TulipField density="medium" className="opacity-70" isStatic={true} />
          </div>
        </div>
        
        <footer className="text-center py-6 relative">
          <p className="handwritten">
            Made with <span className="heart-icon">❤</span> for Merriam
          </p>
          <p className="signature">
            Created by Hashir with love
          </p>
          <p className="mt-6">
            <a 
              href="https://github.com/mhashir03/100Reasons" 
              target="_blank" 
              rel="noopener noreferrer"
              className="handwritten inline-block px-4 py-2 border-2 border-primary rounded-lg shadow-sm hover:shadow-md transition-shadow text-primary hover:bg-paper/50"
            >
              &lt; View on GitHub /&gt;
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
