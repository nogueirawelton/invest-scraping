import { StateCreator } from "zustand";

interface User {
  name: string;
  avatar: string;
}

export interface UserSlice {
  user?: User;

  setUser: (user: User) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: undefined,
  setUser: (user) =>
    set(() => ({
      user: {
        name: user.name,
        avatar: user.avatar,
      },
    })),
});
