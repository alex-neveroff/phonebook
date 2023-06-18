import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReactComponent as CrossIcon } from 'icons/cross.svg';
import { ContactData } from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactData key={id}>
      <p className="contact-name">{name}:</p>{' '}
      <p className="contact-number">{number}</p>
      <button className="delete-button" onClick={() => handleDelete(id)}>
        <CrossIcon className="cross" width="24" height="24" />
      </button>
    </ContactData>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
