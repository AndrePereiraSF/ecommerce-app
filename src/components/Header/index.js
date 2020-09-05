import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../store/reducers/user';

import {
  WebHeader,
  Nav,
  CartIconContainer,
  CartCounter,
  MobileHeader,
  MobileMenu,
  DrawerButton,
  UserInfo,
  LogoutContainer,
  LogoutButton,
} from './styles';
import StyledLink from '../StyledLink';
import Loading from '../Loading';

import { useUserSelector } from '../../store/reducers/user';
import { useCartSelector } from '../../store/reducers/cart';

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userState = useUserSelector();
  const cartState = useCartSelector();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);

      await dispatch(UserActions.signOut());

      history.push('/');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1100px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? 
        <WebHeader id="homepage">
          <UserInfo>
            <small>{userState.user.email}</small>
            <LogoutContainer>
              <LogoutButton onClick={logout}>
                <FontAwesomeIcon color="#FFF" icon="sign-out-alt" size="1x" />
                Sair
              </LogoutButton>
            </LogoutContainer>
          </UserInfo>
          <Nav>
            <StyledLink smooth to="/homepage#homepage">
              <span>Página Inicial</span>
            </StyledLink>
            <StyledLink smooth to="/homepage#shop">
              <span>Loja</span>
            </StyledLink>
            <StyledLink smooth to="/homepage#about">
              <span>Sobre</span>
            </StyledLink>
            <StyledLink smooth to="/homepage#contact">
              <span>Contato</span>
            </StyledLink>
          </Nav>
          <StyledLink to="/cart">
            <CartIconContainer>
              <FontAwesomeIcon
                id="cart"
                color="#000"
                icon="shopping-cart"
                size="3x"
              />
              <CartCounter>
                {cartState.items?.length ? cartState.items.length - 1 : 0}
              </CartCounter>
            </CartIconContainer>
          </StyledLink>
        </WebHeader>
        : 
        <>
          <MobileMenu open={isDrawerOpen}>
            <DrawerButton onClick={handleDrawer}>
              <FontAwesomeIcon icon="times" size="3x" />
            </DrawerButton>
            <StyledLink smooth to="/homepage#homepage" onClick={handleDrawer}>
              Página Inicial
            </StyledLink>
            <StyledLink smooth to="/homepage#shop" onClick={handleDrawer}>
              Loja
            </StyledLink>
            <StyledLink smooth to="/homepage#about" onClick={handleDrawer}>
              Sobre
            </StyledLink>
            <StyledLink smooth to="/homepage#contact" onClick={handleDrawer}>
              Contato
            </StyledLink>
          </MobileMenu>
          <MobileHeader id="homepage">
            <DrawerButton onClick={handleDrawer}>
              <FontAwesomeIcon icon="bars" size="3x" />
            </DrawerButton>
            <StyledLink disableHover to="/cart">
              <CartIconContainer>
                <FontAwesomeIcon icon="shopping-cart" size="3x" />
                <CartCounter>
                  {cartState.items?.length ? cartState.items.length - 1 : 0}
                </CartCounter>
              </CartIconContainer>
            </StyledLink>
          </MobileHeader>
        </>
      }
      {isLoading ? <Loading /> : null}
    </>
  );
}
