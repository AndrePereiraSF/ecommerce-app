import styled from 'styled-components';

const Title = styled.h2`
  color: ${({ color }) => color ? color : '#FFF'};
  text-align: center;
  margin: 5% 0;

  @media (min-width: 1100px) {
    font-size: 36px;
    margin: 2% 0;
  }
`;

export default Title;