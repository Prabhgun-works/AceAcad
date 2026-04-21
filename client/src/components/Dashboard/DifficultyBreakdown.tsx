import React from 'react';
import { Card } from '../Common/Card';
import { useApp } from '../../context/AppContext';

export function DifficultyBreakdown() {
  const { leetcodeProfile } = useApp();

  if (!leetcodeProfile) return null;

  const { easy, medium, hard, all } = leetcodeProfile.totalProblems;
  
  const getPercentage = (val: number) => ((val / all) * 100).toFixed(0);

  const data = [
    { label: 'Easy', count: easy, color: '#26a641', bg: '#dafbe1' },
    { label: 'Medium', count: medium, color: '#f0883e', bg: '#fff8c5' },
    { label: 'Hard', count: hard, color: '#d1242f', bg: '#ffebe9' },
  ];

  return (
    <Card>
      <h3 className="font-semibold text-[#24292f] mb-6">Difficulty Distribution</h3>
      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-[#24292f]">{item.label}</span>
              <span className="text-sm text-[#57606a]">
                <span className="font-bold text-[#24292f]">{item.count}</span> ({getPercentage(item.count)}%)
              </span>
            </div>
            <div className="h-2 w-full bg-[#f6f8fa] rounded-full overflow-hidden border border-[#d0d7de]/50">
              <div 
                className="h-full rounded-full transition-all duration-500" 
                style={{ width: `${getPercentage(item.count)}%`, backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
