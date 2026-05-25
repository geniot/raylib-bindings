import {type Color, lib} from "raylib";

export interface WindowState {
  /** Set to try enabling V-Sync on GPU */
  vsync: boolean;
  /** Set to run program in fullscreen */
  fullscreen: boolean;
  /** Set to allow resizable window */
  resizable: boolean;
  /** Set to disable window decoration (frame and buttons) */
  undecorated: boolean;
  /** Set to hide window */
  hidden: boolean;
  /** Set to minimize window (iconify) */
  minimized: boolean;
  /** Set to maximize window (expanded to monitor) */
  maximized: boolean;
  /** Set to window non focused */
  unfocused: boolean;
  /** Set to window always on top */
  topmost: boolean;
  /** Set to allow windows running while minimized */
  alwaysRun: boolean;
  /** Set to allow transparent framebuffer */
  transparent: boolean;
  /** Set to support HighDPI */
  highDPI: boolean;
  /** Set to support mouse passthrough, only supported when the undecorated flag is set as well */
  mousePassthrough: boolean;
  /** Set to run program in borderless windowed mode */
  borderless: boolean;
  /** Set to try enabling MSAA 4X */
  msaa4x: boolean;
  /** Set to try enabling interlaced video format (for V3D) */
  interlaced: boolean;
}

const FLAG_BITMASK = {
  vsync: 0x00000040,
  fullscreen: 0x00000002,
  resizable: 0x00000004,
  undecorated: 0x00000008,
  hidden: 0x00000080,
  minimized: 0x00000200,
  maximized: 0x00000400,
  unfocused: 0x00000800,
  topmost: 0x00001000,
  alwaysRun: 0x00000100,
  transparent: 0x00000010,
  highDPI: 0x00002000,
  mousePassthrough: 0x00004000,
  borderless: 0x00008000,
  msaa4x: 0x00000020,
  interlaced: 0x00010000,
};

export function SetConfigFlags(flags: Partial<WindowState>): void {
  const flag = Object.keys(flags).reduce((acc, key) => {
    return acc | FLAG_BITMASK[key as keyof WindowState];
  }, 0);
  lib.symbols.SetConfigFlags(flag);
}

export function InitWindow(width: number, height: number, title: string): void {
  return lib.symbols.InitWindow(
    width,
    height,
    new TextEncoder().encode(title + "\0"),
  );
}
export function CloseWindow(): void {
  return lib.symbols.CloseWindow();
}
export function BeginDrawing(): void {
  return lib.symbols.BeginDrawing();
}
export function EndDrawing(): void {
  return lib.symbols.EndDrawing();
}
export function ClearBackground(c: Color): void {
  return lib.symbols.ClearBackground(c);
}
export function WindowShouldClose(): boolean {
  return !!lib.symbols.WindowShouldClose();
}
