import api from './api';

const baseUrl = '/ad';

const Announcement = {
  getOne: async (id) => {
    try {
      const { data } = await api.get(`${baseUrl}/${id}`);
      console.log(data);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default Announcement;
