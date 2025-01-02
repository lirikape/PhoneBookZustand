// src/pages/HomePage.jsx
import { ContactList } from '../components/ContactList';

export const HomePage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Список контактів</h1>
            <ContactList />
        </div>
    );
};
