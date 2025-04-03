import { reasons } from "../data/reasons";

export type NoteVariant = "pink" | "lavender" | "mint" | "default";

export interface LoveNote {
  id: number;
  text: string;
  variant: NoteVariant;
  rotation: number;
  position?: {
    top?: string;
    left?: string;
    right?: string;
  };
}

// Deterministic rotation based on note ID
export const getRotation = (id: number): number => {
  // Use a simple hash function based on ID to get predictable but varied values
  return ((id * 17) % 5) - 2.5;
};

export const getVariant = (id: number): NoteVariant => {
  const variants: NoteVariant[] = ["pink", "lavender", "mint", "default"];
  return variants[id % variants.length];
};

export const getPosition = (id: number) => {
  // Deterministic position based on note ID
  const position: { top?: string; left?: string; right?: string } = {};
  
  // Use the ID to determine if and which position properties to set
  if (id % 3 === 0) {
    position.top = `${(id % 5) - 2.5}px`;
  }
  
  if (id % 2 === 0) {
    if (id % 4 === 0) {
      position.left = `${id % 5}px`;
    } else {
      position.right = `${id % 5}px`;
    }
  }
  
  return position;
};

export const createLoveNotes = (): LoveNote[] => {
  return reasons.map((text, index) => {
    const id = index + 1;
    return {
      id,
      text,
      variant: getVariant(id),
      rotation: getRotation(id),
      position: getPosition(id),
    };
  });
}; 