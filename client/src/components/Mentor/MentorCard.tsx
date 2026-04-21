import React from 'react';
import { Bot, Sparkles, RefreshCw } from 'lucide-react';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';

interface MentorCardProps {
  onRefresh: () => void;
  isLoading: boolean;
  lastUpdated?: string;
}

export function MentorCard({ onRefresh, isLoading, lastUpdated }: MentorCardProps) {
  return (
    <Card className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-indigo-600 p-4 rounded-2xl shadow-xl shadow-indigo-200 shrink-0">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-bold text-2xl text-slate-900 tracking-tight">AI Academic Mentor</h3>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                Active
              </div>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              {lastUpdated ? `Personalized analysis generated at ${lastUpdated}` : 'Your intelligence partner for competitive programming.'}
            </p>
          </div>
        </div>
        <Button 
          variant="primary" 
          onClick={onRefresh} 
          isLoading={isLoading}
          className="flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl shadow-indigo-100"
        >
          {!isLoading && <RefreshCw className="w-5 h-5" />}
          Refresh Insights
        </Button>
      </div>
    </Card>
  );
}
