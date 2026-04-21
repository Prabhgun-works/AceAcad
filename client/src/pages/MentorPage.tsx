import React, { useState, useEffect } from 'react';
import { MentorCard } from '../components/Mentor/MentorCard';
import { InsightCard } from '../components/Mentor/InsightCard';
import { Insight } from '../types';
import { getMentorInsights } from '../services/gemini';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';

export function MentorPage() {
  const { leetcodeProfile, goals } = useApp();
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>();

  const fetchInsights = async () => {
    if (!leetcodeProfile) return;
    setIsLoading(true);
    try {
      const data = await getMentorInsights(leetcodeProfile, goals);
      setInsights(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch if empty
    if (insights.length === 0) fetchInsights();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header>
        <h2 className="text-2xl font-bold text-[#24292f] tracking-tight">AI Mentor Insights</h2>
        <p className="text-[#57606a]">Personalized recommendations based on your performance and goals.</p>
      </header>

      <MentorCard 
        onRefresh={fetchInsights} 
        isLoading={isLoading} 
        lastUpdated={lastUpdated}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="h-64 bg-[#f6f8fa] rounded-md animate-pulse border border-[#d0d7de]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map(insight => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      )}

      {insights.length === 0 && !isLoading && (
        <div className="p-12 text-center border-2 border-dashed border-[#d0d7de] rounded-md">
          <p className="text-[#57606a]">No insights generated yet. Click "Get New Insights" above.</p>
        </div>
      )}
    </motion.div>
  );
}
