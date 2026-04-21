import React from 'react';
import { RefreshCcw, Flame, Target } from 'lucide-react';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Badge } from '../Common/Badge';
import { useApp } from '../../context/AppContext';

export function LeetCodeCard() {
  const { leetcodeProfile } = useApp();

  if (!leetcodeProfile) return null;

  return (
    <Card className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative p-1 bg-white border-2 border-indigo-100 rounded-full">
            <img 
              src={leetcodeProfile.avatar} 
              alt={leetcodeProfile.username} 
              className="w-14 h-14 rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg tracking-tight">@{leetcodeProfile.username}</h3>
            <p className="text-sm text-slate-400 font-medium">{leetcodeProfile.realName}</p>
          </div>
        </div>
        <Button variant="secondary" className="p-2 w-10 h-10 rounded-xl">
          <RefreshCcw className="w-4 h-4 text-slate-400" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Easy</p>
          <p className="text-xl font-bold text-green-600">{leetcodeProfile.totalProblems.easy}</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Med</p>
          <p className="text-xl font-bold text-amber-500">{leetcodeProfile.totalProblems.medium}</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Hard</p>
          <p className="text-xl font-bold text-red-500">{leetcodeProfile.totalProblems.hard}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-50 rounded-lg">
            <Flame className="w-5 h-5 text-amber-500" fill="currentColor" strokeWidth={1} />
          </div>
          <span className="text-sm font-bold text-slate-700">{leetcodeProfile.currentStreak} Day Streak</span>
        </div>
        <Badge variant="blue">{leetcodeProfile.acceptanceRate}% Rate</Badge>
      </div>
    </Card>
  );
}
