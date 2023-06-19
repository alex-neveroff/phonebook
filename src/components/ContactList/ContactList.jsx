import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem';
import { Contacts } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const showContacts = contacts
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );

  return (
    <Contacts>
      {showContacts.map(({ id, name, number }, index) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </Contacts>
  );
};

export default ContactList;
