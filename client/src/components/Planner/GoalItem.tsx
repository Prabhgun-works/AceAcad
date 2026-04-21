import React from 'react';
import { Trash2, CheckCircle2, Circle, Clock } from 'lucide-react';
import { Goal } from '../../types';
import { Badge } from '../Common/Badge';
import { useApp } from '../../context/AppContext';
import { cn } from '../../utils/cn';

interface GoalItemProps {
  goal: Goal;
  key?: React.Key;
}

export function GoalItem({ goal }: GoalItemProps) {
  const { toggleGoal, deleteGoal } = useApp();

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'High': return 'red';
      case 'Medium': return 'orange';
      case 'Low': return 'gray';
      default: return 'gray';
    }
  };

  const isOverdue = !goal.completed && new Date(goal.dueDate) < new Date(new Date().setHours(0,0,0,0));

  return (
    <div className={cn(
      "flex items-center gap-4 px-6 py-4 border-b border-gray-50 bg-white transition-all group hover:bg-indigo-50/20",
      goal.completed && "bg-indigo-50/10"
    )}>
      <button 
        onClick={() => toggleGoal(goal.id)}
        className="mt-0.5 text-slate-300 hover:text-indigo-600 transition-colors"
      >
        {goal.completed ? (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        ) : (
          <Circle className="w-5 h-5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h4 className={cn(
            "text-sm font-semibold text-slate-900 truncate tracking-tight",
            goal.completed && "line-through text-slate-400"
          )}>
            {goal.title}
          </h4>
          <Badge variant={goal.category === 'CP' ? 'blue' : goal.category === 'Academic' ? 'green' : 'gray'}>
            {goal.category}
          </Badge>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Priority</span>
          <Badge variant={getPriorityVariant(goal.priority)}>{goal.priority}</Badge>
        </div>
        <div className={cn(
          "flex items-center gap-2 text-xs font-semibold text-slate-500",
          isOverdue && "text-red-500"
        )}>
          <Clock className="w-3.5 h-3.5" />
          <span>{new Date(goal.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>

      <button 
        onClick={() => deleteGoal(goal.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all ml-4"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
