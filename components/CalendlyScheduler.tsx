"use client"

import React from 'react';
import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function CalendlyScheduler() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const calendlyUrl = "https://calendly.com/drjohnsonsarah?" + new URLSearchParams({
    hide_gdpr_banner: '1',
    background_color: 'ffffff',
    text_color: '333333',
    primary_color: '3b82f6', // Blue color
  }).toString();

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-6">Prendre un rendez-vous</h1>
        <div className="w-full h-[calc(100vh-120px)]">
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url={calendlyUrl}
            style={{ 
              minWidth: '320px',
              height: '100%',
            }} 
          />
        </div>
      </div>
    </div>
  );
} 