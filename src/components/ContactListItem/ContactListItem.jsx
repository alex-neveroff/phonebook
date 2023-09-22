import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { ContactData } from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import Modal from 'components/Modal/Modal';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import { selectIsShowEditModal } from 'redux/contacts/contactsSelectors';
import { editModalReducer } from 'redux/contacts/contactsSlice';

const ContactListItem = ({ _id, name, number }) => {
  const dispatch = useDispatch();
  const isShowEditModal = useSelector(selectIsShowEditModal);
  const [editContact, setEditContact] = useState(null);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleEdit = () => {
    setEditContact({ _id, name, number });
    dispatch(editModalReducer(true));
  };

  const handleModalClose = () => {
    setEditContact(null);
    dispatch(editModalReducer(false));
  };

  return (
    <ContactData key={_id}>
      <div className="contact-align">
        <p className="contact-name">{name}</p>
        <p className="contact-number">{number}</p>
      </div>
      <div className="button-wrap">
        <button type="button" className="contact-button" onClick={handleEdit}>
          <FaRegEdit className="icon" />
        </button>
        <button
          type="button"
          className="contact-button"
          onClick={() => handleDelete(_id)}
        >
          <FaRegTrashAlt className="icon" />
        </button>
      </div>
      {isShowEditModal && editContact && (
        <Modal onClose={handleModalClose}>
          <EditContactForm contact={editContact} />
        </Modal>
      )}
    </ContactData>
  );
};

ContactListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
