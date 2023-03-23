import styled from 'styled-components';
import { NavLink as LinkStyled } from 'react-router-dom';
export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  list-style: none;
  max-width: calc(65vw - 8px);
  padding: 0;
  margin: 0px auto;
`;
export const Item = styled.li`
  transform: scale(1);
  transition: transform 200ms linear;
  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;
export const LinkStyle = styled(LinkStyled)`
  text-decoration: none;
`;
export const Poster = styled.img`
  width: 100%;
`;
export const Title = styled.h3`
  text-decoration: none;
`;
