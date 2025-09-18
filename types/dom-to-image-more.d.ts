declare module 'dom-to-image-more' {
  export function toPng(node: HTMLElement, options?: any): Promise<string>;
  export function toJpeg(node: HTMLElement, options?: any): Promise<string>;
  export function toBlob(node: HTMLElement, options?: any): Promise<Blob>;
  export function toCanvas(node: HTMLElement, options?: any): Promise<HTMLCanvasElement>;
  export function toSvg(node: HTMLElement, options?: any): Promise<string>;
  
  const domtoimage: {
    toPng: typeof toPng;
    toJpeg: typeof toJpeg;
    toBlob: typeof toBlob;
    toCanvas: typeof toCanvas;
    toSvg: typeof toSvg;
  };
  
  export default domtoimage;
}