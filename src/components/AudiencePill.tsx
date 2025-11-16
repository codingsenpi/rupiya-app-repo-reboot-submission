"use client";

import React from 'react';

export const AUDIENCES = ['Farmer', 'FPO', 'Buyer', 'Investor'] as const;

export type Audience = typeof AUDIENCES[number];

interface AudiencePillProps {
  activeAudience: Audience;
  setActiveAudience: (audience: Audience) => void;
}

const AudiencePill: React.FC<AudiencePillProps> = ({ activeAudience, setActiveAudience }) => (
    <div className="relative flex items-center p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-inner shadow-slate-200">
        {AUDIENCES.map((audience) => (
            <button
                key={audience}
                onClick={() => setActiveAudience(audience)}
                className={`relative z-10 px-4 sm:px-6 py-2.5 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300
                    ${activeAudience === audience ? 'text-white' : 'text-slate-500 hover:text-emerald-700'}`}
            >
                {audience}
            </button>
        ))}
        <div
            className="absolute top-1.5 left-1.5 h-[calc(100%-12px)] bg-emerald-500 rounded-full transition-all duration-500 ease-in-out"
            style={{
                width: `calc(${100 / AUDIENCES.length}% - 4px)`,
                transform: `translateX(${AUDIENCES.indexOf(activeAudience) * (100)}%)`
            }}
        />
    </div>
);

export default AudiencePill;
