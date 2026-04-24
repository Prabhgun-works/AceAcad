import api from './api';

const TOKEN_KEY = import.meta.env.VITE_AUTH_TOKEN_KEY as string;

export const authService = {
  async register(name: string, email: string, password: string) {
    const { data } = await api.post('/auth/register', { name, email, password });
    return data.data;
  },

  async login(email: string, password: string) {
    const { data } = await api.post('/auth/login', { email, password });
    return data.data;
  },

  async getMe() {
    const { data } = await api.get('/auth/me');
    return data.data.user;
  },

  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  },

  clearToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  isLoggedIn(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },
};