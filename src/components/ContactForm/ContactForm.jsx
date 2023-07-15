import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { ButtonAdd, Conteiner, Form, Input } from './ContactForm.styled';


export const ContactForm =  ({createUser})=>{
  const nanoIdName = nanoid();
 const nanoIdNumber = nanoid();

 const [name, setName]= useState('');
 const [number, setNumer] =useState('');

 
 const handelChange = ({ target }) => {
  const {name, value} = target;
  switch (name) {
    case 'name':
      setName(value);
      break;
      case 'number':
        setNumer(value);
        break;
        default:
          return;
  }
  

};

const handelSubmit = event => {
  event.preventDefault();
  createUser({number, name})
  reset();
};

const reset = () => {
  setNumer('')
  setName('')
};

return (
  <Conteiner>
    <Form onSubmit={handelSubmit}>
      <label htmlFor={nanoIdName}>
        Name
        <Input placeholder="Please enter name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handelChange}
          value={name}
          required
        />
      </label>
      <label htmlFor={nanoIdNumber}>
        Number
        <Input
        placeholder="Please enter number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handelChange}
          value={number}
          required
        />
      </label>
      <ButtonAdd type="submit">Add Contact</ButtonAdd>
    </Form>
  </Conteiner>
);
}

