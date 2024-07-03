// userStore.ts
import {create} from 'zustand';
import UserStoreState from './user.store.interface';
import User from './user.interface';


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
    user: { ...state.user, ...payload }, 
  })),
  removeUser: () => set({ user: initialState }),
}));

export default useUserStore;
