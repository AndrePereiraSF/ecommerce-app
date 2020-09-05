import api from '../../services/api';
import { useSelector } from 'react-redux';
import { UserActions } from './user';

const Types = {
  UPDATE_CART: '@cart/UPDATE_CART',
  CLEAR_CART: '@cart/CLEAR_CART',
};

const initialState = {
  items: undefined,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case Types.UPDATE_CART:
    return {
      ...state,
      items: action.cart.items,
    };
  case Types.CLEAR_CART:
    return {
      ...state,
      items: action.items,
    };
  default:
    return state;
  }
};

export const useCartSelector = () => useSelector((store) => store.cart);

export const CartActions = {
  addToCart(item, cart_id) {
    return async (dispatch, getState) => {
      const state = getState();
      let cart = {
        items: []
      };

      if (state.cart.items) {
        cart.items = state.cart.items;
      }
      
      cart.items.push(item);

      await api.put(
        '/.netlify/functions/cart_update',
        {
          cart,
        },
        {
          params: {
            cart_id,
          },
        }
      );

      dispatch({ type: Types.UPDATE_CART, cart });
    };
  },
  clearCart(cart_id, user_id) {
    return async () => {
      await api.delete('/.netlify/functions/cart_delete', {
        params: {
          cart_id,
          user_id,
        },
      });

      const items = [];

      const newCartId = response.ref['@ref'].id;

      dispatch({ type: Types.CLEAR_CART, items });
      dispatch(UserActions.updateCartId(newCartId));
    };
  },
};
