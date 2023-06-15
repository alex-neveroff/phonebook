import React, { useState } from 'react';
import { PhonebookForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

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
      name: inputName,
      phone: inputNumber,
    };
    const loweredNewContact = newContact.name.toLowerCase();
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === loweredNewContact
    );
    if (isContactExists) {
      Notify.failure(`${newContact.name} is already in phonebook.`);
      return;
    }
    dispatch(addContact(newContact));
    Notify.success(`${newContact.name} added to phonebook successfully!`);
    reset();
  };

  const reset = () => {
    setInputName('');
    setInputNumber('');
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="contactName">
        Name:
        <input
          className="form-input"
          type="text"
          name="name"
          id="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={inputName}
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
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={inputNumber}
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
