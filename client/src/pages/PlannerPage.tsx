import React, { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { GoalItem } from '../components/Planner/GoalItem';
import { WeekPicker } from '../components/Planner/WeekPicker';
import { ProgressBar } from '../components/Planner/ProgressBar';
import { AddGoalModal } from '../components/Planner/AddGoalModal';
import { Button } from '../components/Common/Button';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';

export function PlannerPage() {
  const { goals } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompletedOpen, setIsCompletedOpen] = useState(false);

  const activeGoals = goals.filter(g => !g.completed);
  const completedGoals = goals.filter(g => g.completed);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#24292f] tracking-tight">Weekly Planner</h2>
          <p className="text-[#57606a]">Manage your academic tasks and competitive programming goals.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Goal
        </Button>
      </header>

      <div className="space-y-6">
        <WeekPicker />
        <ProgressBar />
      </div>

      <div className="space-y-px rounded-md border border-[#d0d7de] overflow-hidden shadow-sm">
        {activeGoals.length > 0 ? (
          activeGoals.map(goal => (
            <GoalItem key={goal.id} goal={goal} />
          ))
        ) : (
          <div className="p-12 text-center bg-white">
            <div className="inline-flex p-3 rounded-full bg-[#f6f8fa] mb-4">
              <Plus className="w-6 h-6 text-[#57606a]" />
            </div>
            <h3 className="text-lg font-semibold text-[#24292f]">No active goals</h3>
            <p className="text-[#57606a] mb-6">You've finished everything or haven't added any goals yet.</p>
            <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Add your first goal</Button>
          </div>
        )}
      </div>

      {completedGoals.length > 0 && (
        <div className="space-y-3">
          <button 
            onClick={() => setIsCompletedOpen(!isCompletedOpen)}
            className="flex items-center gap-2 text-sm font-semibold text-[#57606a] hover:text-[#24292f] transition-colors"
          >
            {isCompletedOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            Completed This Week ({completedGoals.length})
          </button>
          
          <AnimatePresence>
            {isCompletedOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden space-y-px rounded-md border border-[#d0d7de]"
              >
                {completedGoals.map(goal => (
                  <GoalItem key={goal.id} goal={goal} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <AddGoalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  );
}
