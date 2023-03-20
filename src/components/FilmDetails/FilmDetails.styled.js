import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const LinkStyle = styled(Link)`
  display: block;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  background-color: orangered;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 300px;
`;
export const ImageBox = styled.div`
  display: block;
  margin-right: 48px;
`;
export const MainInfo = styled.div`
  display: flex;
`;
export const Ul = styled.ul`
  list-style-type: none;
`;
export const LinkMoreInfo = styled(Link)`
  display: block;
  font-weight: 700;
  text-decoration: none;
`;
