// src/store/contactsStore.js
import { create } from 'zustand';

export const useContactsStore = create(set => ({
  contacts: [], // Initial empty contacts array
  fetchContacts: async () => {
    try {
      const response = await fetch(
        'https://65816a843dfdd1b11c4336b1.mockapi.io/contacts'
      );
      const data = await response.json();
      set({ contacts: data });
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  },
  deleteContact: async id => {
    try {
      const response = await fetch(
        `https://65816a843dfdd1b11c4336b1.mockapi.io/contacts/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        set(state => ({
          contacts: state.contacts.filter(contact => contact.id !== id),
        }));
      } else {
        console.error('Failed to delete contact from backend');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  },
  updateContact: async (id, updatedData) => {
    try {
      const response = await fetch(
        `https://65816a843dfdd1b11c4336b1.mockapi.io/contacts/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        const updatedContact = await response.json();
        set(state => ({
          contacts: state.contacts.map(contact =>
            contact.id === id ? updatedContact : contact
          ),
        }));
      } else {
        console.error('Failed to update contact on backend');
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  },
}));
