import React from 'react';

export const DeviTravelsLogo = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 330 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`h-12 w-auto ${className}`}
    style={{ minWidth: '160px' }}
  >
    {/* Car body */}
    <path d="M15 40C15 40 20 26 35 26H55C70 26 75 40 75 40V50H15V40Z" className="fill-primary" />
    {/* Windshield / roof */}
    <path d="M35 26L43 13H57L65 26Z" className="fill-primary" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Windows */}
    <path d="M37 26L43 16H57L63 26Z" fill="white" fillOpacity="0.3" />
    {/* Wheels */}
    <circle cx="30" cy="50" r="6" className="fill-accent" />
    <circle cx="60" cy="50" r="6" className="fill-accent" />
    <circle cx="30" cy="50" r="3" fill="white" fillOpacity="0.6" />
    <circle cx="60" cy="50" r="3" fill="white" fillOpacity="0.6" />
    {/* Door line */}
    <path d="M21 40H69" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Headlight */}
    <rect x="70" y="38" width="5" height="3" rx="1" fill="#F4B400" />
    {/* Taillight */}
    <rect x="15" y="38" width="5" height="3" rx="1" fill="#F4B400" fillOpacity="0.6" />

    {/* "DEVI" text */}
    <text x="92" y="43" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="30" className="fill-primary dark:fill-white">
      DEVI
    </text>
    {/* "Travels" text */}
    <text x="180" y="43" fontFamily="Poppins, sans-serif" fontWeight="500" fontSize="30" className="fill-accent">
      Travels
    </text>
  </svg>
);
