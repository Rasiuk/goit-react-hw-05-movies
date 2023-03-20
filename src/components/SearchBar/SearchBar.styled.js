import styled from 'styled-components';
export const Form = styled.form`
  display: flex;

  justify-content: center;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  width: 400px;
  margin-right: 8px;
`;
export const SearchButton = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
