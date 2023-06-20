import React, { useState } from 'react';
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { addModalReducer } from 'redux/contacts/contactsSlice';
import { PhonebookForm } from './ContactForm.styled';

const ContactForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
    const newContact = {
      name: inputName.trim(),
      number: inputNumber.trim(),
    };
    const loweredNewContact = newContact.name.toLowerCase();
    const numberNewContact = newContact.number;
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === loweredNewContact &&
        contact.number === numberNewContact
    );
    if (isContactExists) {
      Notify.failure(
        `${newContact.name} with phone ${newContact.number} is already in phonebook.`
      );
      return;
    }
    dispatch(addContact(newContact));
    dispatch(addModalReducer(false));
    reset();
  };

  const reset = () => {
    setInputName('');
    setInputNumber('');
  };

  return (
    <PhonebookForm onSubmit={handleSubmit} autoComplete="off">
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
        Add contact
      </button>
    </PhonebookForm>
  );
};

export default ContactForm;
