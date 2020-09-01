import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #faa014;

  p {
    margin: 8% 0;
    width: 80%;
    text-align: center;
    font-size: 18px;
  }

  @media (min-width: 1100px) {
    p {
      width: 50%;
      margin: 0 0 4%;
    }
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 50%;
  margin-bottom: 25px;

  @media (min-width: 1100px) {
    width: 120px;
    flex-basis: 10%;
    margin: 0 45px 75px;
  }
`;
