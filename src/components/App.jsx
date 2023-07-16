

import { Titles } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


export const App = () => {

const contacts = useSelector(getContacts)
console.log(contacts)

   return (
    <Container>
      <Titles>Phonebook</Titles>
      <ContactForm />

      <Titles>Contacts</Titles>
      {contacts.length > 0 ? (
        <Filter  />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      {contacts.length > 0 && <ContactList
        contacts={contacts}
        // deleteContact={onDeleteContact}
      /> }
      
    </Container>
  );
};