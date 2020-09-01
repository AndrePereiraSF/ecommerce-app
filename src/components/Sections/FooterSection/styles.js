import styled from 'styled-components';

export const FooterContainer = styled.div`
  color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 8% 10%;

  p {
    margin: 4% 0;
  }

  @media (min-width: 1100px) {
    padding: 2%;
  }
`;

export const ToTheTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  color: #fff;
  border: none;
  margin: 0 auto;
  width: 60px;

  @media (min-width: 1100px) {
    font-size: 16px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10% 0;

  @media (min-width: 1100px) {
    margin: 5% 0;
    justify-content: center;

    .social-icon {
      margin: 0 1%;
    }
  }
`;

export const StoreInfo = styled.div`
  font-size: 14px;

  @media (min-width: 1100px) {
    font-size: 16px;
    width: 30%;
    margin: 0 auto;
  }
`;