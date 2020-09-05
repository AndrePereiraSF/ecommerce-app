import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const StyledLink = styled(Link)`
  color: ${({ color }) => color ? color : '#000'};
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    transition: 0.15s;
  }
`;


export default StyledLink;