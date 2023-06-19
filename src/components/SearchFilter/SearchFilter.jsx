import { SearchForm } from 'components/SearchFilter/SearchFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterReducer } from 'redux/contacts/contactsSlice';

const SearchFilter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterReducer(event.currentTarget.value));
  };

  return (
    <SearchForm htmlFor="filter-field">
      <input
        className="search-input"
        id="filter-field"
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleFilter}
      />
    </SearchForm>
  );
};

export default SearchFilter;
