import { useDispatch, useSelector } from "react-redux";
import { ButtonDelete, ContactItem, List } from "./ContactList.styled";
import { getContacts, getFilter } from "redux/selectors";
import { removeContact } from "redux/contactSlice";
import { getVisibleContacts } from "redux/visibleFilter";


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch()
  const filter = useSelector(getFilter);

const visibleContacts =getVisibleContacts(contacts, filter);

  const deletContact = (id) =>{
dispatch(removeContact(id));
  }
  console.log(visibleContacts)
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ButtonDelete type="button" onClick={deletContact}>Delete</ButtonDelete>
        </ContactItem>
      ))}
    </List>
  );
};
