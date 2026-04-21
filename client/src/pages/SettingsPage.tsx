import React from 'react';
import { ProfileSection } from '../components/Settings/ProfileSection';
import { LeetCodeIntegration } from '../components/Settings/LeetCodeIntegration';
import { Card } from '../components/Common/Card';
import { Button } from '../components/Common/Button';
import { Shield, CreditCard, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

export function SettingsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl space-y-8"
    >
      <header>
        <h2 className="text-2xl font-bold text-[#24292f] tracking-tight">Settings</h2>
        <p className="text-[#57606a]">Manage your account preferences and third-party integrations.</p>
      </header>

      <div className="space-y-6">
        <ProfileSection />
        <LeetCodeIntegration />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#d0d7de] pb-4">
              <Shield className="w-5 h-5 text-[#57606a]" />
              <h3 className="font-bold text-[#24292f]">Security</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#24292f]">Double-factor authentication</p>
                  <p className="text-xs text-[#57606a]">Add an extra layer of security.</p>
                </div>
                <Button variant="secondary" size="sm">Enable</Button>
              </div>
              <Button variant="secondary" size="sm" className="w-full">Change Password</Button>
            </div>
          </Card>

          <Card className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#d0d7de] pb-4">
              <CreditCard className="w-5 h-5 text-[#57606a]" />
              <h3 className="font-bold text-[#24292f]">Subscription</h3>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-[#fff8c5] border border-[#d4a72c4d] rounded-md">
                <p className="text-sm font-semibold text-[#9a6700]">Free Plan</p>
                <p className="text-xs text-[#9a6700]/80">Unlimited goals and AI insights.</p>
              </div>
              <Button variant="secondary" size="sm" className="w-full">Upgrade to Pro</Button>
            </div>
          </Card>
        </div>

        <Card className="border-[#da3633] bg-[#ffebe9]/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ffebe9] text-[#da3633] rounded-md">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#da3633]">Delete Account</p>
                <p className="text-sm text-[#57606a]">Permanently remove your account and all data.</p>
              </div>
            </div>
            <Button variant="danger">Delete Account</Button>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
