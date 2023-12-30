declare module 'vanta/dist/vanta.trunk.min' {
    import { VantaEffect } from 'vanta';
  
    interface VantaTrunkOptions {
      el: HTMLElement;
      THREE: any;
      color?: number;
      backgroundColor?: number; 
    }
  
    export default function TRUNK(options: VantaTrunkOptions): VantaEffect;
  }