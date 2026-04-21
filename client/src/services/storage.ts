import { Goal } from "../types";

export const getGoals = (): Goal[] => {
  const saved = localStorage.getItem('ace_goals');
  return saved ? JSON.parse(saved) : [];
};

export const saveGoals = (goals: Goal[]) => {
  localStorage.setItem('ace_goals', JSON.stringify(goals));
};

export const getLeetCodeUsername = (): string => {
  return localStorage.getItem('ace_leetcode_username') || 'prabhgun_works';
};

export const saveLeetCodeUsername = (username: string) => {
  localStorage.setItem('ace_leetcode_username', username);
};
