import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Steve Jobs', number: '459-12-56' },
    { id: 'id-2', name: 'Bill Gates', number: '443-89-12' },
    { id: 'id-3', name: 'Elon Musk', number: '645-17-79' },
    { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {contactsInitialState},
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id !== action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});


export const { removeContact, addContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;

// export const contactsReducer = persistReducer(
//   { key: 'contacts', storage },
//   contactsSlice.reducer
// );
