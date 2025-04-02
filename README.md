# Merriam - 100 Reasons

A web application built with modern frontend technologies that displays 100 personalized messages in an interactive notebook-style interface.

## Project Overview

This application presents 100 personalized notes in a visually appealing format. Each note contains a unique message that appears on customizable colorful notes in a responsive grid layout.

## Key Features

- **Interactive UI**: Responsive design with a welcome modal and scrollable content
- **Custom Components**: 
  - Note component with randomized colors and rotations
  - Realistic tulip elements created with pure CSS/inline styles
  - Animation effects on various elements
- **Organized Data Structure**: Message content separated from presentation logic

## Technical Implementation

### Frontend Framework & Tools
- **Next.js 14**: Utilizing the App Router architecture
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: For responsive styling and design system
- **React Hooks**: State management with useState for modal control
- **CSS Animations**: Custom keyframe animations for interactive elements

### Component Architecture
- **Main Page**: Container with welcome modal and content grid
- **NoteGrid**: Responsive grid system for displaying notes
- **Note**: Individual note with customizable appearance
- **Tulip/TulipField**: Custom decorative components with parameter-based styling

### Performance Considerations
- Web fonts properly configured with next/font
- Component-based architecture for better code organization
- Pointer events management to ensure UI responsiveness
- Z-index layering for proper element stacking

### Styling Approach
- Custom color palette defined in Tailwind config
- Mix of utility classes and CSS modules
- Custom animations using keyframes
- Responsive design with mobile-first approach

## Getting Started

Want to create your own version of this special gift? Follow these steps to customize it for your loved one:

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Basic knowledge of React/Next.js (for advanced customization)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/reasons-project.git
   cd reasons-project
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
     // Change these HEX values for different flower colors
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
│   ├── page.tsx      # Main page component
│   ├── layout.tsx    # Root layout with metadata
│   └── globals.css   # Global styles
├── components/       # Reusable UI components
│   ├── Note.tsx      # Individual note display
│   ├── NoteGrid.tsx  # Grid layout for notes
│   ├── Tulip.tsx     # Decorative flower component
│   └── TulipField.tsx # Grouped tulip elements
└── data/             # Application data
    └── reasons.ts    # Array of 100 personalized messages
```

## Personal Note

Created for Merriam, featuring 100 personalized messages. The design includes tulip decorations throughout and a notebook aesthetic to create a unique digital gift.

~ Hashir
