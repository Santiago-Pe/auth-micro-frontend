// userStore.ts
import {create} from 'zustand';
import User from './user.interface';

interface UserStoreState {
  user: User;
  setUser: (payload: User) => void;
  removeUser: () => void;
}

const initialState: User = {
  email: '',
  id: '',
  name: '',
  userName: '',
  token: null,
  logged: false,
};

const useUserStore = create<UserStoreState>((set) => ({
  user: initialState,
  setUser: (payload: Partial<User>) => set((state) => ({
    user: { ...state.user, ...payload }, // Actualiza solo los campos proporcionados en payload
  })),
  removeUser: () => set({ user: initialState }),
}));

export default useUserStore;
