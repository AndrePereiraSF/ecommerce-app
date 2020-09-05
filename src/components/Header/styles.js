import styled from 'styled-components';

export const MobileHeader = styled.div`
  background: #faa014;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  @media (min-width: 1100px) {
    height: 10vh;
  }
`;

export const DrawerButton = styled.button`
  background: none;
  border: none;
  outline: none;

  &:active {
    transform: scale(0.9);
    transition: 0.1s;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background: #fff;
  height: 100vh;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'TranslateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  & > :first-child {
    padding: 6% 8%;
    text-align: left;
  }

  & > *:not(:first-child) {
    padding: 8% 8%;
    font-size: 32px;
  }
`;

export const WebHeader = styled.div`
  background: #faa014;
  height: 90px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;

  button:focus {
    outline: none;
  }
`;

export const UserInfo = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoutContainer = styled.div`
  align-self: flex-start;
  border-radius: 8px;
  background: #000;
  padding: 0 6px;
  margin-top: 2px;  
  &:hover {
    transform: scale(1.1);
    transition: 0.1s;
  }
`;

export const LogoutButton = styled.button`
  margin-left: 5px;
  color: #fff;
  font-size: 14px;
  background: none;
  border: none;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  margin: 0 auto;
  width: 50%;
`;

export const CartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  height: 1.8rem;
  width: 2.5rem;
  margin-left: 10%;
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  background: none;
  border: none;

  &:active {
    transform: scale(0.9);
    transition: 0.1s;
  }
`;
