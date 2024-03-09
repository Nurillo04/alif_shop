import { ThemeType } from '@/types/theme.types';
import { create } from 'zustand';

const useTheme = create((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state: ThemeType) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}));

export default useTheme;
