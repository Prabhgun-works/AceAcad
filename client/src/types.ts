export interface LeetCodeProfile {
  username: string;
  realName?: string;
  avatar: string;
  acceptanceRate: number;
  totalProblems: {
    all: number;
    easy: number;
    medium: number;
    hard: number;
  };
  totalSubmissions: number;
  totalAccepted: number;
  currentStreak: number;
  maxStreak: number;
  lastSubmissionTime: string;
}

export interface Goal {
  id: string;
  title: string;
  category: 'CP' | 'Academic' | 'Other';
  target?: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  completed: boolean;
  weekStartDate: string;
}

export interface Insight {
  id: string;
  type: 'WeakTopic' | 'StreakMaintenance' | 'BalanceWarning' | 'Custom';
  title: string;
  description: string;
  recommendation: string;
  relevanceScore: number;
  suggestedGoal?: Partial<Goal>;
}

export interface UserStats {
  problemsHistory: { date: string; count: number }[];
}
