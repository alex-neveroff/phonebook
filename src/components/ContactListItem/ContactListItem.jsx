import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReactComponent as CrossIcon } from 'icons/cross.svg';
import { ReactComponent as EditIcon } from 'icons/edit.svg';
import { ContactData } from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);

  // const handleEdit = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactData key={id}>
      <div className="contact-align">
        <p className="contact-name">{name}:</p>
        <p className="contact-number">{number}</p>
      </div>
      <div className="button-wrap">
        <button
          className="contact-button"
          onClick={() => {
            setIsShowModal(true);
          }}
        >
          <EditIcon className="icon" width="24" height="24" />
        </button>
        <button className="contact-button" onClick={() => handleDelete(id)}>
          <CrossIcon className="icon" width="24" height="24" />
        </button>
      </div>
      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)}>
          <ContactForm />
        </Modal>
      )}
    </ContactData>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
