export class Color extends Uint8Array {
  constructor(r: number, g: number, b: number, a: number) {
    super([r, g, b, a]);
  }
}

export const LIGHTGRAY: Color = new Color(200, 200, 200, 255);
export const RAYWHITE: Color = new Color(245, 245, 245, 255);
export const BLACK: Color = new Color(0, 0, 0, 255);
