import api from './api';

export const ProductService = {
  readAll: async () => {
    return (
      await api.get('product_read_all')
    ).data.data;
  },
};
