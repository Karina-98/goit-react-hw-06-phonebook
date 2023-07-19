
import React from 'react';
import { ButtonAdd, Conteiner, Form, Input } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handelSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    console.log(contacts)

    if (contacts?.find(contact => contact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in your contacts`);
      return;
    } else {
      dispatch(addContact(name, number));
    }

    event.target.reset();
  };

  return (
    <Conteiner>
      <Form onSubmit={handelSubmit}>
        <label>
          Name
          <Input
            placeholder="Please enter name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Input
            placeholder="Please enter number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <ButtonAdd type="submit">Add Contact</ButtonAdd>
      </Form>
    </Conteiner>
  );
};
