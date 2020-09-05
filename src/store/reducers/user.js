import api from '../../services/api';
import { useSelector } from 'react-redux';
import { CartActions } from './cart';

const Types = {
  SIGN_IN: '@user/SIGN_IN',
  SIGN_OUT: '@user/SIGN_OUT',
  SET_USER: '@user/SET_USER',
};

const initialState = {
  user: undefined,
  token: undefined,
  cart_id: undefined,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case Types.SIGN_IN:
    api.defaults.headers.Authorization = `${action.token}`;
    return {
      ...state,
      token: action.token,
      user: action.user,
      cart_id: action.cart_id,
    };
  case Types.SIGN_OUT:
    return {
      ...state,
      token: undefined,
      user: undefined,
      cart_id: undefined,
    };
  case Types.UPDATE_CART:
    return { ...state, cart_id: action.cart_id };
  default:
    return state;
  }
};

export const useUserSelector = () => useSelector((store) => store.user);

export const UserActions = {
  signIn(email, password) {
    return async (dispatch) => {
      const response = (
        await api.post('/.netlify/functions/user_login', {
          email,
          password,
        })
      ).data;

      const token = response.secret;
      const { cart_id } = response;
      const user = {
        id: response.ref['@ref'].id,
        email,
      };

      dispatch({ type: Types.SIGN_IN, token, user, cart_id });
      dispatch(CartActions.addToCart([], cart_id));
    };
  },
  signOut() {
    return async (dispatch) => {
      (await api.get('/.netlify/functions/user_logout')).data;

      dispatch({ type: Types.SIGN_OUT });
    };
  },
  updateCartId(cart_id) {
    return async (dispatch) => {
      dispatch({ type: Types.UPDATE_CART, cart_id });
    };
  },
};
