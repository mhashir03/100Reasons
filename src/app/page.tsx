'use client';

import { useState } from 'react';
import NoteGrid from '@/components/NoteGrid';
import TulipField from '@/components/TulipField';
import Tulip from '@/components/Tulip';

export default function Home() {
  const [showMessage, setShowMessage] = useState(true);
  
  return (
    <main className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Background tulips - subtle and sparse */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <TulipField 
          count={10} 
          distribution="scatter" 
          heightClass="h-full" 
          widthClass="w-full" 
          zIndex={-1}
        />
      </div>
      
      {showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95">
          <div className="max-w-md w-full bg-paper p-8 rounded-lg shadow-notebook text-center relative">
            {/* Individual decorative tulips instead of fields */}
            <div className="absolute -top-12 -left-8 transform -rotate-15">
              <Tulip color="pink" size="md" />
            </div>
            <div className="absolute -bottom-12 -right-8 transform rotate-5">
              <Tulip color="purple" size="md" />
            </div>
            <div className="absolute top-1/2 -right-10 transform rotate-15">
              <Tulip color="yellow" size="sm" />
            </div>
            
            <h2 className="text-2xl font-cursive text-primary mb-4">Welcome!</h2>
            <p className="handwritten mb-4">
              I've gathered 100 reasons why I love you, Merriam. 
              Each note is a piece of my heart, written just for you.
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
          </div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="notebook-page mb-8 relative">
          <div className="paper-fold"></div>
          
          {/* Individual tulips as decorative elements */}
          <div className="absolute -top-14 -left-10 transform -rotate-10">
            <Tulip color="pink" size="lg" />
          </div>
          
          <div className="absolute -top-12 -right-10 transform rotate-5">
            <Tulip color="blue" size="lg" />
          </div>
          
          {/* Small tulips around the page */}
          <div className="absolute top-10 -right-6 transform rotate-15">
            <Tulip color="yellow" size="sm" />
          </div>
          
          <div className="absolute top-20 -left-6 transform -rotate-5">
            <Tulip color="purple" size="sm" />
          </div>
          
          <header className="mb-8 relative">
            <h1 className="page-title">
              100 Reasons Why I Love Merriam
            </h1>
            <p className="text-center handwritten text-lg">
              Every reason is a memory, a feeling, a moment that makes my heart skip a beat.
            </p>
          </header>
          
          <NoteGrid />
          
          {/* Decorative tulips around the content */}
          <div className="absolute -bottom-14 -left-10 transform -rotate-5 animate-float">
            <Tulip color="yellow" size="lg" />
          </div>
          
          <div className="absolute -bottom-12 -right-10 transform rotate-10 animate-float-slow">
            <Tulip color="pink" size="lg" />
          </div>
          
          {/* Small group of tulips */}
          <div className="absolute -bottom-8 left-1/4 transform -rotate-15">
            <TulipField 
              count={3} 
              distribution="scatter" 
              heightClass="h-20" 
              widthClass="w-20"
            />
          </div>
          
          <div className="absolute -bottom-8 right-1/4 transform rotate-10">
            <TulipField 
              count={3} 
              distribution="scatter" 
              heightClass="h-20" 
              widthClass="w-20"
            />
          </div>
        </div>
        
        <footer className="text-center py-6 relative">
          <p className="handwritten">
            Made with <span className="heart-icon">❤</span> for Merriam
          </p>
          <p className="signature">
            Created by Hashir with love
          </p>
          
          {/* Simple tulip decorations for footer */}
          <div className="flex justify-center mt-4 gap-6">
            <div className="animate-float">
              <Tulip color="pink" size="md" rotation={-5} />
            </div>
            <div className="animate-float-slow">
              <Tulip color="purple" size="md" />
            </div>
            <div className="animate-float">
              <Tulip color="yellow" size="md" rotation={5} />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
