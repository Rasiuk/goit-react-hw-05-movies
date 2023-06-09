import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin: 0px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
`;
