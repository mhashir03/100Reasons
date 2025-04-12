# Merriam - 100 Reasons

A beautifully crafted web application built with Next.js that displays 100 personalized love messages in an interactive notebook-style interface, decorated with colorful tulips.

## Project Overview

This romantic digital gift presents 100 unique love notes in a visually appealing format. Each message appears on a colorful sticky note with realistic details like pins, paper clips, and tape. The application features a welcoming modal and decorative tulip elements created entirely with CSS.

## Key Features

- **Welcoming Experience**: Beautiful welcome modal with personalized message and centered tulip decorations
- **Interactive UI**: Responsive design with smooth transitions and a scrollable notebook layout
- **Customized Components**: 
  - Sticky notes with randomized colors, rotations, and attachment styles
  - Realistic tulip decorations created purely with CSS/inline styles
  - Heart icons and handwritten-style typography
- **Visual Details**:
  - Notebook paper aesthetic with decorative elements
  - Tulip fields at top and bottom of the content
  - Varied note colors and positions for a realistic scatter effect
- **Responsive Design**: Optimized experience across desktop and mobile devices

## Technical Implementation

### Frontend Framework & Tools
- **Next.js 14**: Utilizing the App Router architecture
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: For responsive styling and design system
- **React Hooks**: State management with useState for modal control and component state
- **CSS Animations**: Custom keyframe animations for interactive elements

### Component Architecture
- **Main Page**: Container with welcome modal and content grid
- **NoteGrid**: Responsive grid system for displaying the love notes
- **Note**: Individual note component with customizable appearance and attachment styles
- **Tulip/TulipField**: Decorative flower components with parameter-based styling
  - Static rendering to prevent mobile glitching
  - Customizable density and positioning

### Performance Considerations
- Static component optimization to prevent layout shifts
- Component-based architecture for better code organization
- Pointer events management to ensure UI responsiveness
- Z-index layering for proper element stacking
- Fixed mobile-specific issues (such as tulip rendering)

### Styling Approach
- Custom color palette defined in Tailwind config
- Mix of utility classes and CSS modules
- Custom animations using keyframes
- Responsive design with mobile-first approach
- Paper-like textures and realistic design elements

## Getting Started

Want to create your own version of this special gift? Follow these steps to customize it for your loved one:

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Basic knowledge of React/Next.js (for advanced customization)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/mhashir03/100Reasons.git
   cd 100Reasons
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

### Customization

#### Personalizing the Messages

1. Edit the `src/data/reasons.ts` file:
   ```typescript
   // Replace these messages with your own personal messages
   export const reasons = [
     "Your smile brightens my day",
     "The way you always know what to say",
     // Add up to 100 reasons...
   ];
   ```

2. Change the name in the welcome message and title:
   - Edit `src/app/page.tsx` to replace "Merriam" with your loved one's name
   - Update the welcome modal text if desired

#### Styling Changes

1. Modify the color scheme in `tailwind.config.js`:
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: '#your-color-here',
         // other colors...
       },
     },
   }
   ```

2. Adjust the tulip colors in `src/components/Tulip.tsx`:
   ```typescript
   const colors = {
     yellow: { flower: '#fff77d', stem: '#5a8d4e' },
     pink: { flower: '#ffb7c5', stem: '#5a8d4e' },
     // Add or modify colors...
   };
   ```

3. Customize the note styles in `src/components/Note.tsx`:
   ```typescript
   const getVariantClass = () => {
     switch (note.variant) {
       case 'pink': return 'sticky-note-pink';
       // Add or modify variants...
     }
   };
   ```

### Deployment

To share your creation with your loved one:

1. Create a free account on [Vercel](https://vercel.com) or [Netlify](https://netlify.com)

2. Deploy directly from your GitHub repository:
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy
   vercel
   ```

3. Alternatively, connect your GitHub repository to Vercel/Netlify for automatic deployments

4. Share the provided URL with your special someone

## Project Structure

```
src/
├── app/              # App router components
│   ├── page.tsx      # Main page with welcome modal and content
│   ├── layout.tsx    # Root layout with metadata
│   └── globals.css   # Global styles and animations
├── components/       # Reusable UI components
│   ├── Note.tsx      # Individual note display with attachment styles
│   ├── NoteGrid.tsx  # Grid layout for notes
│   ├── Tulip.tsx     # Individual flower component
│   └── TulipField.tsx # Grouped tulip elements with static rendering
├── utils/            # Helper utilities
│   └── noteHelpers.ts # Functions for note generation and styling
└── data/             # Application data
    └── reasons.ts    # Array of 100 personalized love messages
```
