import create from 'zustand';

const useAuthStore = create(() => ({
  isLogged: false,
}));

export default useAuthStore;
