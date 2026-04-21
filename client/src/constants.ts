export const NAVIGATION_ITEMS = [
  { name: 'Dashboard', icon: 'LayoutDashboard', path: '/' },
  { name: 'Weekly Planner', icon: 'CalendarDays', path: '/planner' },
  { name: 'AI Mentor', icon: 'Bot', path: '/mentor' },
  { name: 'Settings', icon: 'Settings', path: '/settings' },
];

export const GOAL_CATEGORIES = ['CP', 'Academic', 'Other'] as const;
export const PRIORITIES = ['Low', 'Medium', 'High'] as const;

export const MOCK_LEETCODE_PROFILE = {
  username: "Prabhgun_works",
  realName: "Prabhgun Singh",
  avatar: "https://picsum.photos/seed/aarav/200/200",
  acceptanceRate: 45.8,
  totalProblems: {
    all: 435,
    easy: 234,
    medium: 156,
    hard: 45
  },
  totalSubmissions: 950,
  totalAccepted: 435,
  currentStreak: 14,
  maxStreak: 21,
  lastSubmissionTime: new Date().toISOString()
};

export const MOCK_PROBLEMS_HISTORY = [
  { date: 'Apr 1', count: 2 },
  { date: 'Apr 3', count: 5 },
  { date: 'Apr 5', count: 3 },
  { date: 'Apr 8', count: 8 },
  { date: 'Apr 12', count: 4 },
  { date: 'Apr 15', count: 6 },
  { date: 'Apr 20', count: 9 },
  { date: 'Apr 25', count: 5 },
  { date: 'Apr 30', count: 12 },
];
