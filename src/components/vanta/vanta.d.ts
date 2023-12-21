declare module 'vanta/dist/vanta.globe.min' {
    import { VantaEffect } from 'vanta';
  
    interface VantaGlobeOptions {
      el: HTMLElement;
      THREE: any;
      color?: number;
      color2?: number;
      backgroundColor?: number;
      
    }
  
    export default function GLOBE(options: VantaGlobeOptions): VantaEffect;
  }