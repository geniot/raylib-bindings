import * as rl from "raylib";

rl.SetConfigFlags({ vsync: true });
rl.InitWindow(800, 450, "Raylib - Basic Window");

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
