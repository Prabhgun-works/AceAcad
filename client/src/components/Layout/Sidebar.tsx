import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Bot, Settings, GraduationCap, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';

const icons = {
  LayoutDashboard,
  CalendarDays,
  Bot,
  Settings,
};

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Weekly Planner', icon: CalendarDays, path: '/planner' },
  { name: 'AI Mentor', icon: Bot, path: '/mentor' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 hidden md:flex overflow-hidden">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-tight">AceAcademics</h1>
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Student Platform</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 mt-4">
        <label className="px-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">Menu</label>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all",
                isActive
                  ? "bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100"
                  : "text-slate-500 hover:bg-gray-50 hover:text-slate-900"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-5 h-5", isActive ? "text-indigo-600" : "text-slate-400")} />
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-100 bg-gray-50/50">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-sm font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all group">
          <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
          Logout
        </button>
      </div>
    </aside>
  );
}
