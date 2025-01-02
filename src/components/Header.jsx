// src/components/Header.jsx
import { useThemeStore } from './store/themeStore';
import { useState } from 'react';

export const Header = () => {
    const { theme, toggleTheme } = useThemeStore();
    const [search, setSearch] = useState('');

    return (
        <header
            className={`p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                }`}
        >
            <h1 className="text-2xl font-bold">Книга контактів</h1>
            <input
                type="text"
                placeholder="Пошук..."
                className="border rounded-md px-2 py-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                onClick={toggleTheme}
                className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white"
            >
                {theme === 'dark' ? 'Світла тема' : 'Темна тема'}
            </button>
        </header>
    );
};
