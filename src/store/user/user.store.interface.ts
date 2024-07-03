import User from './user.interface';

export default interface UserStoreState {
  user: User;
  setUser: (payload: User) => void;
  removeUser: () => void;
}