import api from './api';

export const leetcodeService = {
  async getProfile() {
    const { data } = await api.get('/leetcode/profile');
    return data.data.profile;
  },

  async getHistory(days: number = 30) {
    const { data } = await api.get(`/leetcode/history?days=${days}`);
    return data.data.history;
  },
};