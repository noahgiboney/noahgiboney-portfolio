'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import TRUNK from 'vanta/dist/vanta.trunk.min';

const VantaGlobe: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof TRUNK> | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
        setVantaEffect(
          TRUNK({
          el: vantaRef.current,
          THREE: THREE,
          color: 0xffffff,
          backgroundColor: 0x0,
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