import React from 'react';
import { SearchForm } from 'components/SearchFilter/SearchFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterReducer, addModalReducer } from 'redux/contacts/contactsSlice';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import {
  selectFilter,
  selectIsShowAddModal,
} from 'redux/contacts/contactsSelectors';

const SearchFilter = () => {
  const filter = useSelector(selectFilter);
  const isShowAddModal = useSelector(selectIsShowAddModal);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterReducer(event.currentTarget.value));
  };

  return (
    <SearchForm htmlFor="filter-field">
      <button
        className="contact-button"
        onClick={() => dispatch(addModalReducer(true))}
      >
        <AddIcon className="icon" width="30" height="30" />
      </button>
      <div className="input-wrap">
        <SearchIcon className="icon-search" width="24" height="24" />
        <input
          className="search-input"
          id="filter-field"
          type="text"
          placeholder="Find contacts by name"
          value={filter}
          onChange={handleFilter}
        />
      </div>
      {isShowAddModal && (
        <Modal onClose={() => dispatch(addModalReducer(false))}>
          <ContactForm />
        </Modal>
      )}
    </SearchForm>
  );
};

export default SearchFilter;
