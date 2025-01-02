import { create } from 'zustand';

export const useThemeStore = create(set => ({
  theme: 'light', // Default theme
  toggleTheme: () => {
    set(state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';

      // Додаємо/видаляємо клас `dark` на <html>
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return { theme: newTheme };
    });
  },
}));
