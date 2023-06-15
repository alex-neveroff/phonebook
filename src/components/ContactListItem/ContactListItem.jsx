import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ReactComponent as CrossIcon } from 'icons/cross.svg';
import { ContactData } from './ContactListItem.styled';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/selectors';

const ContactListItem = ({ id, name, phone }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    const contactName = contacts.find(contact => contact.id === contactId);
    dispatch(deleteContact(contactId));
    Notify.warning(`${contactName.name} delete from phonebook.`);
  };

  return (
    <ContactData key={id}>
      <p className="contact-name">{name}:</p>{' '}
      <p className="contact-number">{phone}</p>
      <button className="delete-button" onClick={() => handleDelete(id)}>
        <CrossIcon className="cross" width="24" height="24" />
      </button>
    </ContactData>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
