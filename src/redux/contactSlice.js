import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


 const contactsBook = {
  contacts: [
  { "id": "id-1", "name": "Steve Kap", "number": "478-47-11 "},
  {"id": "id-2", "name": "Luck Jobs", "number": "745-11-85 " },
  { "id": "id-3", "name": "Jack Forbs", "number": "457-58-74 " },
  { "id": "id-4", "name": "Mick Wage", "number": "659-12-56 " }
]}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsBook,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.contacts.unshift(action.payload);
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
      const index = state.contacts.contacts.findIndex(
        contact => contact.id !== action.payload
      );
      state.contacts.contacts.splice(index, 1);
    },
  },
});


export const { removeContact, addContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;

// export const contactsReducer = persistReducer(
//   { key: 'contacts', storage },
//   contactsSlice.reducer
// );
