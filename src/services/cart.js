import api from './api';

export const CartService = {
  read: async (cart_id) => {
    return (
      await api.post('cart_read', {
        params: { cart_id },
      })
    ).data;
  },
};
