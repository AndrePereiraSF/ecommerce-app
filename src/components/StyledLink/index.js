import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const StyledLink = styled(Link)`
  color: ${({ color }) => color ? color : '#000'};
  text-decoration: none;
  transition: opacity .5s;

  &:hover {
    opacity: ${({ disableHover }) => disableHover ? 1 : .5}
  }
`;


export default StyledLink;