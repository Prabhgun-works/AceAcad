import React from 'react';
import { LeetCodeCard } from '../components/Dashboard/LeetCodeCard';
import { ProblemsChart } from '../components/Dashboard/ProblemsChart';
import { DifficultyBreakdown } from '../components/Dashboard/DifficultyBreakdown';
import { QuickStats } from '../components/Dashboard/QuickStats';
import { motion } from 'motion/react';

export function DashboardPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header>
        <h2 className="text-2xl font-bold text-[#24292f] tracking-tight">Dashboard Overview</h2>
        <p className="text-[#57606a]">Welcome back! Here's your current academic and competitive programming progress.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <LeetCodeCard />
        </div>
        <div className="lg:col-span-2">
          <ProblemsChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <DifficultyBreakdown />
        </div>
        <div className="lg:col-span-2">
          <QuickStats />
        </div>
      </div>
    </motion.div>
  );
}
