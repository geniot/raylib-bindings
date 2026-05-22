# Raylib Deno Bindings

Deno bindings for [raylib](https://github.com/raysan5/raylib). This is currently
aligned to raylib v6.0.


## Usage

```typescript
import {
  Drawing,
  LIGHTGRAY,
  RAYWHITE,
  Text,
  Window,
} from "jsr:@geniot/raylib-bindings@latest";

Window.init(800, 450, "Raylib - Basic Window");

while (!Window.shouldClose()) {
  Drawing.beginDrawing();
  Drawing.clearBackground(RAYWHITE);
  Text.drawText(
    "Congrats! You created your first window!",
    190,
    200,
    20,
    LIGHTGRAY,
  );
  Drawing.endDrawing();
}

Window.close();
```
