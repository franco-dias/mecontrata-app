import api from './api';

const baseUrl = '/announcement';

const Announcement = {
  getOne: async (id) => {
    try {
      const { data } = await api.get(`${baseUrl}/${id}`);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default Announcement;
