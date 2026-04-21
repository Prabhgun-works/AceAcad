import React, { useState } from 'react';
import { User, Mail, Camera } from 'lucide-react';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { useApp } from '../../context/AppContext';

export function ProfileSection() {
  const { leetcodeProfile } = useApp();
  const [name, setName] = useState(leetcodeProfile?.realName || 'Aarav Singh');

  return (
    <Card className="space-y-6">
      <div className="flex items-center gap-2 pb-4 border-b border-[#d0d7de]">
        <User className="w-5 h-5 text-[#57606a]" />
        <h3 className="font-bold text-[#24292f]">Public Profile</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <img 
              src={leetcodeProfile?.avatar} 
              alt="Avatar" 
              className="w-32 h-32 rounded-full border border-[#d0d7de] group-hover:opacity-75 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-8 h-8 text-white" />
            </button>
          </div>
          <Button variant="secondary" size="sm">Change Avatar</Button>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#24292f] mb-1">Display Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-[#d0d7de] rounded-md outline-none" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#24292f] mb-1">Email <span className="text-xs font-normal text-[#57606a]">(Private)</span></label>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#f6f8fa] border border-[#d0d7de] rounded-md text-[#57606a] text-sm">
              <Mail className="w-4 h-4" />
              aarav.singh@example.com
            </div>
          </div>
          <Button variant="primary">Update Profile</Button>
        </div>
      </div>
    </Card>
  );
}
