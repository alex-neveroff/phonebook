import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchFilter from 'components/SearchFilter';
import Notification from 'components/Notification';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsAuthorized } from 'redux/auth/authSelectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isAuthorized = useSelector(selectIsAuthorized);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthorized) return;
    dispatch(fetchContacts());
  }, [dispatch, isAuthorized]);

  return (
    <>
      <h1 className="title main-title">Phonebook</h1>
      <ContactForm />
      <h2 className="title sub-title">Contacts</h2>
      {error && <Notification message={error} />}
      {contacts.length > 0 ? (
        <>
          <SearchFilter />
          {isLoading && !error && <Loader />}
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Notification message="No matches found" />
          )}
        </>
      ) : (
        <Notification message="Your phonebook is empty" />
      )}
    </>
  );
};

export default Contacts;
