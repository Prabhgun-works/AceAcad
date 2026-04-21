import { GoogleGenAI, Type } from "@google/genai";
import { Insight, LeetCodeProfile, Goal } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getMentorInsights(
  profile: LeetCodeProfile,
  goals: Goal[]
): Promise<Insight[]> {
  const prompt = `
    You are an AI Mentor for a college student named Aarav.
    Aarav is balancing competitive programming (CP) on LeetCode with college academics.
    
    Current Stats:
    - LeetCode: ${profile.totalProblems.all} total solved (${profile.totalProblems.easy} Easy, ${profile.totalProblems.medium} Medium, ${profile.totalProblems.hard} Hard).
    - Acceptance Rate: ${profile.acceptanceRate}%.
    - Streak: ${profile.currentStreak} days.
    
    Weekly Goals:
    ${goals.map(g => `- [${g.completed ? 'COMPLETED' : 'PENDING'}] ${g.title} (${g.category})`).join('\n')}
    
    Provide 3 professional, high-impact insights or recommendations.
    Focus on:
    1. Weak spots in their problem-solving distribution.
    2. Maintenance of their CP streak.
    3. Balance between CP and academics.
    
    Return exactly 3 insights.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              type: { type: Type.STRING },
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              recommendation: { type: Type.STRING },
              relevanceScore: { type: Type.NUMBER },
              suggestedGoal: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  category: { type: Type.STRING },
                  priority: { type: Type.STRING },
                }
              }
            },
            required: ["id", "type", "title", "description", "recommendation", "relevanceScore"]
          }
        },
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback if API fails
    return [
      {
        id: '1',
        type: 'WeakTopic',
        title: 'Focus on Medium Problems',
        description: 'Your ratio of Easy to Medium problems is high. Medium problems are key for FAANG interviews.',
        recommendation: 'Target 3 Medium problems this week in DP or Graphs.',
        relevanceScore: 90,
        suggestedGoal: { title: 'Solve 3 Medium problems', category: 'CP', priority: 'High' }
      },
      {
        id: '2',
        type: 'StreakMaintenance',
        title: 'Keep the 14-day Streak!',
        description: 'You are on a great roll. Don\'t let college assignments break your momentum.',
        recommendation: 'Solve at least 1 easy problem daily even on busy days.',
        relevanceScore: 85,
        suggestedGoal: { title: '1 Daily LeetCode (Maintenance)', category: 'CP', priority: 'Medium' }
      },
      {
        id: '3',
        type: 'BalanceWarning',
        title: 'Academic Balance',
        description: 'You have several pending academic goals. Ensure your CP focus doesn\'t hurt your CGPA.',
        recommendation: 'Block 2 hours tonight specifically for academic assignments.',
        relevanceScore: 95,
        suggestedGoal: { title: 'Finish Academic Assignments', category: 'Academic', priority: 'High' }
      }
    ];
  }
}
