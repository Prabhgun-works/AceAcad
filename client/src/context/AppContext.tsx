import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Goal, LeetCodeProfile, Insight } from '../types';
import { getGoals, saveGoals, getLeetCodeUsername } from '../services/storage';
import { MOCK_LEETCODE_PROFILE } from '../constants';

interface AppContextType {
  goals: Goal[];
  addGoal: (goal: Omit<Goal, 'id'>) => void;
  toggleGoal: (id: string) => void;
  deleteGoal: (id: string) => void;
  leetcodeProfile: LeetCodeProfile | null;
  username: string;
  setUsername: (username: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [goals, setGoalsState] = useState<Goal[]>(getGoals());
  const [username, setUsername] = useState(getLeetCodeUsername());
  const [leetcodeProfile, setLeetcodeProfile] = useState<LeetCodeProfile | null>(MOCK_LEETCODE_PROFILE);

  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  const addGoal = (goalData: Omit<Goal, 'id'>) => {
    const newGoal: Goal = {
      ...goalData,
      id: Math.random().toString(36).substring(2, 9),
    };
    setGoalsState([...goals, newGoal]);
  };

  const toggleGoal = (id: string) => {
    setGoalsState(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  };

  const deleteGoal = (id: string) => {
    setGoalsState(goals.filter(g => g.id !== id));
  };

  return (
    <AppContext.Provider value={{ 
      goals, 
      addGoal, 
      toggleGoal, 
      deleteGoal, 
      leetcodeProfile, 
      username, 
      setUsername 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
