'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

const VantaGlobe: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof HALO> | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
        setVantaEffect(
          HALO({
          el: vantaRef.current,
          THREE: THREE,
          baseColor: 0x0,
          backgroundColor: 0x0,
          size: 0.5,
          amplitudeFactor: 1.4,
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