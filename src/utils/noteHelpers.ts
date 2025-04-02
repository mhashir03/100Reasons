import { reasons } from "../data/reasons";

export type NoteVariant = "pink" | "lavender" | "mint" | "default";

export interface LoveNote {
  id: number;
  text: string;
  variant: NoteVariant;
  rotation: number;
}

export const getRandomRotation = (): number => {
  // Return a random number between -3 and 3
  return Math.floor(Math.random() * 7) - 3;
};

export const getRandomVariant = (): NoteVariant => {
  const variants: NoteVariant[] = ["pink", "lavender", "mint", "default"];
  return variants[Math.floor(Math.random() * variants.length)];
};

export const createLoveNotes = (): LoveNote[] => {
  return reasons.map((text, index) => ({
    id: index + 1,
    text,
    variant: getRandomVariant(),
    rotation: getRandomRotation(),
  }));
}; 