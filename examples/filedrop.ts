import { Drawing, FileDrop, LIGHTGRAY, RAYWHITE, Text, RlWindow } from "raylib";

RlWindow.init(800, 450, "Raylib - File Drop");

while (!RlWindow.shouldClose()) {
  Drawing.beginDrawing();
  Drawing.clearBackground(RAYWHITE);
  Text.drawText(
    "Try dropping a file here, then read the console.",
    190,
    200,
    20,
    LIGHTGRAY,
  );

  if (FileDrop.isFileDropped()) {
    const files = FileDrop.loadDroppedFiles();
    console.log(files);
  }

  Drawing.endDrawing();
}

RlWindow.close();
