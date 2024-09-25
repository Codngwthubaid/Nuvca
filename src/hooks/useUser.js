import { create } from 'zustand';
const UserHook= create((set) => ({
    user: "",
    setUser: (user) => set({ user }),
}));

export default UserHook;