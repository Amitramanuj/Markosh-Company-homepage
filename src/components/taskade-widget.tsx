'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    TaskadeEmbed?: {
      AgentPublicChatPopup: {
        init: (config: { publicAgentId: string }) => void;
      };
    };
  }
}

export function TaskadeWidget() {
  useEffect(() => {
    // Set system preference to light mode before loading Taskade
    if (typeof window !== 'undefined') {
      // Remove any existing dark mode classes or attributes
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
    
    // Load Taskade embed script
    const script = document.createElement('script');
    script.src = 'https://assets.taskade.com/embeds/latest/taskade-embed.min.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize the widget after script loads
      if (window.TaskadeEmbed?.AgentPublicChatPopup) {
        window.TaskadeEmbed.AgentPublicChatPopup.init({
          publicAgentId: '01K1H8Z4KAY5587YF56CR3V3F0',
          theme: 'light', // Set to light theme to match site
          preferences: {
            theme: 'light',
            hideBranding: false
          }
        });
      }
    };

    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // This component doesn't render anything visible - the widget is handled by Taskade's script
  return null;
}