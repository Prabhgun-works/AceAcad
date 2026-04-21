import React, { useState } from 'react';
import { Database, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Badge } from '../Common/Badge';
import { useApp } from '../../context/AppContext';

export function LeetCodeIntegration() {
  const { username, setUsername } = useApp();
  const [inputValue, setInputValue] = useState(username);
  const [status, setStatus] = useState<'connected' | 'error' | 'idle'>('connected');
  const [isTesting, setIsTesting] = useState(false);

  const handleTestConnection = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setUsername(inputValue);
      setStatus('connected');
    }, 1500);
  };

  return (
    <Card className="space-y-6">
      <div className="flex items-center gap-2 pb-4 border-b border-[#d0d7de]">
        <Database className="w-5 h-5 text-[#57606a]" />
        <h3 className="font-bold text-[#24292f]">LeetCode Integration</h3>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-[#57606a]">
          Connect your LeetCode account to automatically sync your problem solving stats and get personalized AI insights.
        </p>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-[#d0d7de] rounded-md outline-none" 
              placeholder="Your LeetCode username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <Button 
            variant="secondary" 
            onClick={handleTestConnection} 
            isLoading={isTesting}
          >
            Test Connection
          </Button>
        </div>

        <div className="flex items-center justify-between p-3 bg-[#f6f8fa] border border-[#d0d7de] rounded-md">
          <div className="flex items-center gap-2">
            {status === 'connected' ? (
              <CheckCircle2 className="w-5 h-5 text-[#1a7f37]" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#da3633]" />
            )}
            <div>
              <p className="text-sm font-semibold text-[#24292f]">
                {status === 'connected' ? 'Connected as @' + username : 'Not connected'}
              </p>
              <p className="text-xs text-[#57606a]">Last synced: 2 hours ago</p>
            </div>
          </div>
          {status === 'connected' && (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="p-1 px-3">
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync
              </Button>
              <Button variant="ghost" size="sm" className="text-[#da3633] hover:bg-[#ffebe9] p-1 px-3">
                Disconnect
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
