import React from 'react';
import { useApp } from '../../context/AppContext';

export function ProgressBar() {
  const { goals } = useApp();
  const completedCount = goals.filter(g => g.completed).length;
  const totalCount = goals.length;
  const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Weekly Completion</p>
          <p className="text-sm font-bold text-slate-900">
            {completedCount} <span className="text-slate-400 font-medium">of {totalCount} goals</span>
          </p>
        </div>
        <p className="text-sm font-black text-indigo-600">{Math.round(percentage)}%</p>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 rounded-full transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(79,70,229,0.3)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
