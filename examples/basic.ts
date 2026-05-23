import { Drawing, LIGHTGRAY, RAYWHITE, Text, RlWindow } from "raylib";

RlWindow.init(800, 450, "Raylib - Basic Window");

while (!RlWindow.shouldClose()) {
  Drawing.beginDrawing();
  Drawing.clearBackground(RAYWHITE);
  Text.drawText(
    "Congrats! You created your first window!",
    190,
    200,
    20,
    LIGHTGRAY,
  );
  console.log(RlWindow.getPosition());
  Drawing.endDrawing();
}

RlWindow.close();
