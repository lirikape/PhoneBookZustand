// src/pages/ContactDetails.jsx
import { useNavigate, useParams } from 'react-router-dom';
import { useContactsStore } from '../../src/components/store/contactsStore';
import { useState } from 'react';

export const ContactDetails = () => {
    const { id } = useParams();
    const { contacts, updateContact } = useContactsStore();
    const contact = contacts.find((c) => c.id === id);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(contact?.name || '');
    const [number, setNumber] = useState(contact?.number || '');

    const handleSave = async () => {
        const updatedData = { name, number };
        await updateContact(id, updatedData); // API-запит для оновлення
        setIsEditing(false);
    };

    if (!contact) {
        return <p>Контакт не знайдено!</p>;
    }

    return (
        <div className="max-w-md mx-auto mt-4">

            {!isEditing ? (
                <div>
                    <button
                        onClick={() => navigate('/')} // Повертаємося на головну сторінку
                        className="bg-gray-500 text-white px-4 py-2 rounded-md mb-4"
                    >
                        Назад
                    </button>
                    <h1 className="text-2xl font-bold mb-2 dark:text-gray-100">{contact.name}</h1>
                    <p className="text-gray-600 mb-4">{contact.number}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Змінити
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-md px-2 py-1 w-full mb-4"
                    />
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="border rounded-md px-2 py-1 w-full mb-4"
                    />
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Зберегти
                    </button>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    >
                        Скасувати
                    </button>
                </div>
            )}
        </div>
    );
};
