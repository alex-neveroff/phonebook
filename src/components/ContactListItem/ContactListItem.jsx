import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as CrossIcon } from 'icons/cross.svg';
import { ReactComponent as EditIcon } from 'icons/edit.svg';
import { ContactData } from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import Modal from 'components/Modal/Modal';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import { selectIsShowModal } from 'redux/contacts/contactsSelectors';
import { modalReducer } from 'redux/contacts/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactData key={id}>
      <div className="contact-align">
        <p className="contact-name">{name}</p>
        <p className="contact-number">{number}</p>
      </div>
      <div className="button-wrap">
        <button
          type="button"
          className="contact-button"
          onClick={() => {
            dispatch(modalReducer(true));
          }}
        >
          <EditIcon className="icon" width="24" height="24" />
        </button>
        <button
          type="button"
          className="contact-button"
          onClick={() => handleDelete(id)}
        >
          <CrossIcon className="icon" width="24" height="24" />
        </button>
      </div>
      {isShowModal && (
        <Modal onClose={() => dispatch(modalReducer(false))}>
          <EditContactForm contactId={id} name={name} number={number} />
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
