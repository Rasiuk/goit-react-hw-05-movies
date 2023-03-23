import styled from 'styled-components';
export const Ul = styled.ul`
  gap: 24px;
  flex-wrap: wrap;
  display: flex;
  list-style: none;
`;
export const ActorCard = styled.li`
  width: 200px;
  border: 2px solid #eee;
  border-radius: 4px;
  &:hover,
  :focus {
    transform: scale(1.1);
  }
  transform: scale(1);
  transition: transform 200ms linear;
  padding: 8px;
`;
