import { Input, Form, SearchButton } from './SearchBar.styled';

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
