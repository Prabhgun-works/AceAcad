import React from 'react';
import { Lightbulb, ArrowRight, Check } from 'lucide-react';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Badge } from '../Common/Badge';
import { Insight } from '../../types';
import { useApp } from '../../context/AppContext';
import { motion } from 'motion/react';
import { cn } from '../../utils/cn';

interface InsightCardProps {
  insight: Insight;
  key?: React.Key;
}

export function InsightCard({ insight }: InsightCardProps) {
  const { addGoal } = useApp();
  const [implemented, setImplemented] = React.useState(false);

  const handleImplement = () => {
    if (insight.suggestedGoal) {
      addGoal({
        title: insight.suggestedGoal.title || insight.title,
        category: (insight.suggestedGoal.category as any) || 'CP',
        priority: (insight.suggestedGoal.priority as any) || 'Medium',
        dueDate: new Date().toISOString().split('T')[0],
        completed: false,
        weekStartDate: new Date().toISOString(),
      });
      setImplemented(true);
    }
  };

  return (
    <Card className="hover:border-indigo-400 border-gray-200 transition-all group flex flex-col h-full bg-white relative overflow-hidden rounded-2xl p-8">
      <div className="absolute top-0 right-0 p-4">
        <Badge variant="blue">{insight.relevanceScore}% Match</Badge>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-900 tracking-tight leading-tight">{insight.title}</h4>
        </div>

        <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium">
          {insight.description}
        </p>

        <div className="bg-amber-50 p-5 rounded-2xl mb-8 border border-amber-100/50">
          <p className="text-[10px] font-black text-amber-800 uppercase tracking-widest mb-2">Strategy Recommendation</p>
          <p className="text-sm font-bold text-amber-900 leading-relaxed">
            {insight.recommendation}
          </p>
        </div>
      </div>

      <Button 
        variant={implemented ? "secondary" : "primary"} 
        className={cn(
          "w-full justify-between group/btn py-4 rounded-xl",
          implemented && "bg-gray-50 border-gray-100 text-slate-400"
        )} 
        onClick={handleImplement}
        disabled={implemented}
      >
        {implemented ? (
          <>
            <span className="text-xs uppercase font-bold tracking-widest">Added to Planner</span>
            <Check className="w-5 h-5 text-green-500" />
          </>
        ) : (
          <>
            <span className="text-xs uppercase font-bold tracking-widest">Implement Solution</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </Card>
  );
}
