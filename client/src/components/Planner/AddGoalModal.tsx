import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modal } from '../Common/Modal';
import { Button } from '../Common/Button';
import { useApp } from '../../context/AppContext';
import { GOAL_CATEGORIES, PRIORITIES } from '../../constants';

interface AddGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddGoalModal({ isOpen, onClose }: AddGoalModalProps) {
  const { addGoal } = useApp();
  const [formData, setFormData] = useState({
    title: '',
    category: 'CP' as any,
    target: '',
    priority: 'Medium' as any,
    dueDate: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addGoal({
      ...formData,
      completed: false,
      weekStartDate: new Date().toISOString(), // Simplified for demo
    });
    setFormData({
      title: '',
      category: 'CP',
      target: '',
      priority: 'Medium',
      dueDate: new Date().toISOString().split('T')[0],
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Goal">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Goal Title *</label>
          <input
            required
            type="text"
            maxLength={100}
            placeholder="e.g., Solve 5 DP problems"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-transparent outline-none transition-all text-sm"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Category</label>
            <select
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
            >
              {GOAL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Priority</label>
            <select
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
            >
              {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Target (Optional)</label>
          <input
            type="text"
            maxLength={200}
            placeholder="e.g., focus on array DP"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
            value={formData.target}
            onChange={(e) => setFormData({ ...formData, target: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Due Date</label>
          <input
            type="date"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="secondary" type="button" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="flex-1">
            Save Goal
          </Button>
        </div>
      </form>
    </Modal>
  );
}
