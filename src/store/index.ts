import { create } from "zustand";
import { UserSlice, createUserSlice } from "./user";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStore = create<UserSlice>()(
  persist(
    (...actions) => ({
      ...createUserSlice(...actions),
      // ...createFishSlice(...a),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
