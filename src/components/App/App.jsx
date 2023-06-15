import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Container } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchFilter from 'components/SearchFilter';
import Notification from 'components/Notification';
import Loader from 'components/Loader/Loader';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="title main-title">Phonebook</h1>
      <ContactForm />
      <h2 className="title sub-title">Contacts</h2>
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
      {error && <Notification message={error} />}
    </Container>
  );
};

export default App;
