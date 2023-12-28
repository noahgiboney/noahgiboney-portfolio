'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const VantaGlobe: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
        setVantaEffect(
          NET({
          el: vantaRef.current,
          THREE: THREE,
          showDots: false,
          color: 0x0,
          color2: 0x0,
          backgroundColor: 0x0,
          scale: 0.5,
          maxDistance: 15,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ width: '100%', height: '100%' }} />;
};

export default VantaGlobe;