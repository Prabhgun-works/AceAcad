import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../Common/Button';

export function WeekPicker() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <Button variant="secondary" className="p-1 px-2">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="secondary" className="px-4 py-1.5 font-semibold">
          Current Week
        </Button>
        <Button variant="secondary" className="p-1 px-2">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      <p className="text-sm font-medium text-[#57606a]">
        Mon, Apr 21 — Sun, Apr 27
      </p>
    </div>
  );
}
