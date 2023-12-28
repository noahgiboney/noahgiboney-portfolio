declare module 'vanta/dist/vanta.halo.min' {
    import { VantaEffect } from 'vanta';
  
    interface VantaHaloOptions {
      el: HTMLElement;
      THREE: any;
      baseColor?: number;
      backgroundColor?: number; 
      size?: number;
      amplitudeFactor?: number;
    }
  
    export default function Halo(options: VantaHaloOptions): VantaEffect;
  }