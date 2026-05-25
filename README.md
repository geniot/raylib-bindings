# Raylib Deno Bindings

Deno bindings for [raylib](https://github.com/raysan5/raylib). This is currently
aligned to raylib v6.0.

## Usage

deno.json:
```json
{
  "imports": {
    "@geniot/raylib-bindings": "jsr:@geniot/raylib-bindings@~1.0.0"
  }
}
```

main.ts:
```typescript
import * as rl from "@geniot/raylib-bindings";

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
```

## Thanks

Special thanks to @raysan5 for creating Raylib and @lino-levan for the initial bindings.

Also thanks to https://github.com/denoland/deno for the great runtime. It looks awesome.
