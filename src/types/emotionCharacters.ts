// src/types/emotionCharacters.ts
export type EmotionCharacterKey = "Bubba" | "Charlie" | "Rusty" | "bubba" | "charlie" | "rusty";

interface EmotionCharacterMeta {
  displayName: string;
  fileName: string;
}

export const EmotionCharacters: Record<EmotionCharacterKey, EmotionCharacterMeta> = {
  bubba: {
    displayName: "Bubba (Black and Tan)",
    fileName: "Bubba", // maps to /assets/images/emotions/Bubba/
  },
  charlie: {
    displayName: "Charlie (White Yorkie)",
    fileName: "Charlie",
  },
  rusty: {
    displayName: "Rusty (Yard Art Yorkie)",
    fileName: "Rusty",
  },
  Rusty: {
    displayName: "Rusty (Yard Art Yorkie)",
    fileName: "Rusty",
  },
  Bubba: {
    displayName: "Bubba (Black and Tan)",
    fileName: "Bubba",
  },
  Charlie: {
    displayName: "Charlie (White Yorkie)",
    fileName: "Charlie",
  },
};