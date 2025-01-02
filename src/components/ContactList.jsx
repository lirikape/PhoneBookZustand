// src/components/ContactList.jsx
import { useEffect } from 'react';
import { useContactsStore } from './store/contactsStore';
import { useNavigate } from 'react-router-dom';
export const ContactList = () => {
    const { contacts, fetchContacts, deleteContact } = useContactsStore();
    const navigate = useNavigate();
    // Fetch contacts on component mount
    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    className="p-4 border rounded-md shadow-md flex items-center space-x-4 bg-white dark:bg-gray-800"
                    onClick={() => navigate(`/contact/${contact.id}`)} // Навігація при кліку на картку
                >
                    <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">{contact.name}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-100">
                            {contact.number}
                        </p>
                    </div>
                    <button
                        onClick={() => deleteContact(contact.id)}
                        className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                        Видалити
                    </button>
                </div>
            ))}
        </div>
    );
};
