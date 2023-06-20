import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem';
import { ContactListStyled } from './ContactList.styled';
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
    <ContactListStyled>
      <ul className="contact-list">
        {showContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </ContactListStyled>
  );
};

export default ContactList;
