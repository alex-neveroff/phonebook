import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';
import { modalReducer } from 'redux/contacts/contactsSlice';
import { EditForm } from './EditContactForm.styled';

const EditContactForm = ({ name, number, contactId }) => {
  const [inputName, setInputName] = useState(name);
  const [inputNumber, setInputNumber] = useState(number);
  const dispatch = useDispatch();

  //   console.log(inputName);
  //   console.log(name);

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
      dispatch(modalReducer(true));
      return;
    }
    dispatch(
      editContact({
        contactId,
        name: inputName.trim(),
        number: inputNumber.trim(),
      })
    );
    dispatch(modalReducer(false));
    dispatch(editContact(contactId));
    reset();
  };

  const reset = () => {
    setInputName('');
    setInputNumber('');
  };

  return (
    <EditForm onSubmit={handleSubmit}>
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
          required
        />
      </label>
      <button className="form-submit" type="submit">
        Edit contact
      </button>
    </EditForm>
  );
};

export default EditContactForm;
