import { create } from "zustand";

export const useStore = create((set) => ({
  TopAnime:[],
  setTopAnime: (TopAnime) => set({ TopAnime }),
}));