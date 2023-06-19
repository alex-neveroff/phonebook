import React from 'react';
import { SearchForm } from 'components/SearchFilter/SearchFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterReducer, modalReducer } from 'redux/contacts/contactsSlice';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import {
  selectFilter,
  selectIsShowModal,
} from 'redux/contacts/contactsSelectors';

const SearchFilter = () => {
  const filter = useSelector(selectFilter);
  const isShowModal = useSelector(selectIsShowModal);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterReducer(event.currentTarget.value));
  };

  return (
    <SearchForm htmlFor="filter-field">
      <button
        className="contact-button"
        onClick={() => dispatch(modalReducer(true))}
      >
        <AddIcon className="icon" width="30" height="30" />
      </button>

      <input
        className="search-input"
        id="filter-field"
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleFilter}
      />
      {isShowModal && (
        <Modal onClose={() => dispatch(modalReducer(false))}>
          <ContactForm />
        </Modal>
      )}
    </SearchForm>
  );
};

export default SearchFilter;
