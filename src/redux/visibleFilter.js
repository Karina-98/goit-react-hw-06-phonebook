
export const getVisibleContacts = (contacts, filter) => {
    const filtredContacts = contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredContacts;
  };