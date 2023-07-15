import React, { useEffect, useState } from 'react';

import { Titles } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';


export const App = () => {
  const [contacts, setContacts] = useState(()=>{ return JSON.parse(localStorage.getItem('contacts'))});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);

    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 

 const createUser = contact => {
    const newUser = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (newUser) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact },
    ]);
    
  };

  const getFiltredContacts = () => {
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredContacts;
  };

  const getFilterChange = event => {
    
    setFilter(event.target.value);
    
  };

 const onDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
   };

  //  const createNewUser = createUser();
  //  const filterContacts =getFilterChange();
   const visibleContacts =getFiltredContacts();
  //  const deleteContacts =onDeleteContact();

   return (
    <Container>
      <Titles>Phonebook</Titles>
      <ContactForm createUser={createUser} />

      <Titles>Contacts</Titles>
      {contacts.length > 0 ? (
        <Filter value={filter} onChange={getFilterChange} />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      <ContactList
        contacts={visibleContacts}
        deleteContact={onDeleteContact}
      />
    </Container>
  );
};
