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
          color: 0xfcfcfd,
          color2: 0xb2aacf,
          backgroundColor: 0xb2aacf,
          size: 0.1,
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