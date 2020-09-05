import api from './api';

export const UserService = {
  signUp: async (user) => {
    return (await api.post('user_create', user)).data;
  },
};
