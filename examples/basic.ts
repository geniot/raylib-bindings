import * as rl from "raylib";
import {cacheDir, denoCacheDir, homeDir} from "../src/util.ts";

rl.SetConfigFlags({ vsync: true });
rl.InitWindow(800, 450, "Raylib - Basic Window");

console.log(homeDir());
console.log(cacheDir());
console.log(denoCacheDir());

while (!rl.WindowShouldClose()) {
  rl.BeginDrawing();
  rl.ClearBackground(rl.RAYWHITE);
  rl.DrawText(
    "Congrats! You created your first window!",
    190,
    200,
    20,
    rl.BLACK,
  );
  // console.log(Window.getPosition());
  rl.EndDrawing();
}

rl.CloseWindow();
