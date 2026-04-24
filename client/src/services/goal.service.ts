import api from './api';

export const goalService = {
  async getGoals(weekStart: string) {
    const { data } = await api.get(`/goals?weekStart=${weekStart}`);
    return data.data;
  },

  async createGoal(body: Record<string, unknown>) {
    const { data } = await api.post('/goals', body);
    return data.data;
  },

  async updateGoal(id: string, updates: Record<string, unknown>) {
    const { data } = await api.patch(`/goals/${id}`, updates);
    return data.data;
  },

  async deleteGoal(id: string) {
    const { data } = await api.delete(`/goals/${id}`);
    return data.data;
  },

  async toggleComplete(id: string, completed: boolean) {
    const { data } = await api.patch(`/goals/${id}`, { completed });
    return data.data;
  },
};