import {lib} from "raylib";
import type {Color} from "./color.ts";

export function DrawText(
  text: string,
  x: number,
  y: number,
  fontSize: number,
  color: Color,
): void {
  lib.symbols.DrawText(
    new TextEncoder().encode(text + "\0"),
    x,
    y,
    fontSize,
    color.buffer,
  );
}
