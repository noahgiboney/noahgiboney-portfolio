declare module 'vanta/dist/vanta.net.min' {
    import { VantaEffect } from 'vanta';
  
    interface VantaNetOptions {
      el: HTMLElement;
      THREE: any;
      color?: number;
      color2?: number;
      color3?: number;
      backgroundColor?: number;
      size?: number;
      
    }
  
    export default function Net(options: VantaNetOptions): VantaEffect;
  }