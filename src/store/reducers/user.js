import { useSelector } from 'react-redux';

const Types = {
  LOADING: '@user/LOADING',
  STOP_LOADING: '@user/STOP_LOADING',
  SIGN_IN: '@user/SIGN_IN',
  SIGN_OUT: '@user/SIGN_OUT',
  SET_USER: '@user/SET_USER',
};

const initialState = {
  user: undefined,
  isLoading: false,
  token: undefined,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case Types.LOADING:
    return { ...state, isLoading: true };
  case Types.STOP_LOADING:
    return { ...state, isLoading: false };
  case Types.SIGN_IN:
    api.defaults.headers.Authorization = `Bearer ${action.token}`;
    return {
      ...state,
      isLoading: false,
      token: action.token,
      user: action.user,
    };
  case Types.SIGN_OUT:
    return { ...state, token: undefined, user: undefined, isLoading: false };
  case Types.SET_USER:
    return { ...state, user: action.user, isLoading: false };
  default:
    return state;
  };
};

export const useUserSelector = () => useSelector((store) => store.user);

export const UserActions = {
  signIn(email, password) {
    return async (dispatch) => {
      try {
        dispatch({ type: Types.LOADING });
        const { token, user } = await api.post({ email, password });
        dispatch({ type: Types.SIGN_IN, token, user });
      } catch (error) {
        return error;
      }
    };
  },
  signOut() {
    return (dispatch) => {
      dispatch({ type: Types.SIGN_OUT });
    };
  },
};