import React from 'react';
import { Card } from '../Common/Card';
import { useApp } from '../../context/AppContext';
import { cn } from '../../utils/cn';

export function QuickStats() {
  const { leetcodeProfile, goals } = useApp();

  if (!leetcodeProfile) return null;

  const completedGoals = goals.filter(g => g.completed).length;

  const stats = [
    { label: 'Acceptance Rate', value: `${leetcodeProfile.acceptanceRate}%`, isTarget: false },
    { label: 'Submissions', value: leetcodeProfile.totalSubmissions.toLocaleString(), isTarget: false },
    { label: 'Weekly Goals', value: `${completedGoals}/${goals.length || 0}`, isTarget: false },
    { label: 'Current Streak', value: `${leetcodeProfile.currentStreak} Days`, isTarget: true },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card 
          key={stat.label} 
          className={cn(
            "text-center py-6 flex flex-col justify-center items-center gap-1 transition-all cursor-pointer group hover:scale-[1.02]",
            stat.isTarget ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200" : "bg-white"
          )}
        >
          <p className={cn(
            "text-[10px] font-bold uppercase tracking-widest",
            stat.isTarget ? "text-indigo-100" : "text-slate-400"
          )}>
            {stat.label}
          </p>
          <p className={cn(
            "text-2xl font-bold tracking-tight",
            stat.isTarget ? "text-white" : "text-slate-900"
          )}>
            {stat.value}
          </p>
        </Card>
      ))}
    </div>
  );
}
