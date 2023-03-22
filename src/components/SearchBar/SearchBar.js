import { Input, Form, SearchButton } from './SearchBar.styled';

import PropTypes from 'prop-types';

export const SearchBar = ({ submit, onInputChange, inputValue }) => {
  return (
    <Form onSubmit={submit}>
      <Input
        value={inputValue}
        name="query"
        onChange={onInputChange}
        type="text"
        autoomplete="off"
        autoFocus
        placeholder="Search films"
      />
      <SearchButton type="submit"> Найти фильмы</SearchButton>
    </Form>
  );
};
SearchBar.propTypes = {
  submit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
