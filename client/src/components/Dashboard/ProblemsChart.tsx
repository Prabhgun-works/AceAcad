import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card } from '../Common/Card';
import { MOCK_PROBLEMS_HISTORY } from '../../constants';

export function ProblemsChart() {
  return (
    <Card className="h-80 flex flex-col p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-slate-900 tracking-tight">Activity Trend</h3>
          <p className="text-xs text-slate-400 font-medium">Problems solved over time</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl">
          {['7d', '30d', '90d'].map((p) => (
            <button 
              key={p}
              className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-lg transition-all ${p === '30d' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 -ml-6 mr-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={MOCK_PROBLEMS_HISTORY}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="count" 
              stroke="#4f46e5" 
              strokeWidth={3} 
              dot={{ r: 0 }}
              activeDot={{ r: 6, fill: '#4f46e5', strokeWidth: 3, stroke: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
