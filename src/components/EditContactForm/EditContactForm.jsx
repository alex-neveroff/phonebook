import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';
import { editModalReducer } from 'redux/contacts/contactsSlice';
import { EditForm } from './EditContactForm.styled';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Notify } from 'notiflix';

const EditContactForm = ({ contact }) => {
  const { name, number, _id } = contact;
  const [inputName, setInputName] = useState(name);
  const [inputNumber, setInputNumber] = useState(number);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setInputName(value);
    } else if (name === 'number') {
      setInputNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputName.trim() === '' || inputNumber.trim() === '') {
      dispatch(editModalReducer(true));
      return;
    }
    const loweredEditContact = inputName.trim().toLowerCase();
    const numberEditContact = inputNumber.trim();
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === loweredEditContact &&
        contact.number === numberEditContact
    );
    if (isContactExists) {
      Notify.failure(
        `${inputName.trim()} with phone ${inputNumber.trim()} is already in phonebook.`
      );
      return;
    }
    dispatch(
      editContact({
        contactId: _id,
        name: inputName.trim(),
        number: inputNumber.trim(),
      })
    );
    dispatch(editModalReducer(false));
    reset();
  };

  const reset = () => {
    setInputName('');
    setInputNumber('');
  };

  return (
    <EditForm onSubmit={handleSubmit} autoComplete="off">
      <label className="form-label" htmlFor="contactName">
        Name:
        <input
          className="form-input"
          type="text"
          name="name"
          id="contactName"
          placeholder="Full name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={inputName}
          autoComplete="off"
          required
        />
      </label>
      <label className="form-label" htmlFor="ContactNumber">
        Phone number:
        <input
          className="form-input"
          type="tel"
          name="number"
          id="ContactNumber"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={inputNumber}
          autoComplete="off"
          required
        />
      </label>
      <button className="form-submit" type="submit">
        Edit contact
      </button>
    </EditForm>
  );
};

EditContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default EditContactForm;
