'use client';

import React from 'react';
import useVidalyticsPlayer from '@/hooks/useVidalyticsPlayer';

interface VidalyticsPlayerProps {
  className?: string;
  playerId?: string;
}

const VidalyticsPlayer: React.FC<VidalyticsPlayerProps> = ({ 
  className = '',
  playerId = 'iyFI_qiQT5gw4Arh' // Default ID for vnls2
}) => {
  // Initialize the Vidalytics player with the specified ID
  useVidalyticsPlayer(playerId);

  // The player will be injected into this div
  return (
    <div 
      id={`vidalytics_embed_${playerId}`}
      className={`vidalytics-player ${className}`}
      style={{
        width: '100%',
        maxWidth: '100%',
        aspectRatio: '16/9',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
      }}>
        {/* Loading indicator or placeholder can go here */}
      </div>
    </div>
  );
};

export default VidalyticsPlayer;
