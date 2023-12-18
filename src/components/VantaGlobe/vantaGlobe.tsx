'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const VantaGlobe: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof GLOBE> | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
        setVantaEffect(
          GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          color: 0x0,
          color2: 0x655699,
          backgroundColor: 0xfcfcfd,
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