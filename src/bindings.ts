import {reembed} from "./util.ts";

export const RAYLIB_VERSION_MAJOR = 6;
export const RAYLIB_VERSION_MINOR = 0;
export const RAYLIB_VERSION_PATCH = 0;
export const RAYLIB_VERSION = "6.0";

export const lib = Deno.dlopen(await reembed(),
  {
    InitWindow: { parameters: ["i32", "i32", "buffer"], result: "void" }, // Initialize window and OpenGL context
    CloseWindow: { parameters: [], result: "void" }, // Close window and unload OpenGL context
    WindowShouldClose: { parameters: [], result: "bool" }, // Close window and unload OpenGL context
    SetConfigFlags: { parameters: ["u32"], result: "void" },
    BeginDrawing: { parameters: [], result: "void" },
    EndDrawing: { parameters: [], result: "void" }, // End canvas drawing and swap buffers (double buffering)
    ClearBackground: {
      parameters: [{ "struct": ["u8", "u8", "u8", "u8"] }],
      result: "void",
    },
    DrawText: {
      parameters: ["buffer", "i32", "i32", "i32", {
        "struct": ["u8", "u8", "u8", "u8"],
      }],
      result: "void",
    },
  },
);
