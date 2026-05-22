# Raylib Deno Bindings

Deno bindings for [raylib](https://github.com/raysan5/raylib). This is currently
aligned to raylib v6.0.

This is a fork of [lino-levan/raylib-deno](https://github.com/lino-levan/raylib-deno) which has become outdated.

Like @lino-levan, I also have little time to make things perfect. 

### What I did: 
- updated raylib.h to v6.0
- ran generator
- changed the way dlopen works (opinionated)
- fixed compilation errors
- added missing functions

### What I didn't:
- test all these bindings

I'm going to fix errors as I encounter them while using the bindings. One step at a time.

### .so files in examples/lib 
- are built from raylib v6.1-dev (yes, I've learned how to build raylib from source). 
- aarch64 is built for SDL and ES_2.0 for my own Trimui projects (using my own Docker image for cross-compilation: https://github.com/geniot/trimui-smart-pro-toolchain.

Don't use these .so files unless you know what you're doing. 

Just download Raylib binaries from [github.com/raysan5/raylib/releases](https://github.com/raysan5/raylib/releases) and put them in the lib folder relative to your executable.

### How Raylib is loaded

See bindings.ts:

`
Deno.dlopen("./lib/libraylib_"+Deno.build.arch+"."+librarySuffix()
`

I did not test it on Windows or MacOS.

I changed it from https://jsr.io/@divy/plug

Fetching shared libraries is not something that I want for my projects. My target devices are retro game consoles that often do not have Wi-Fi or have very specific Raylib builds. 

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

## Thanks

Special thanks to @raysan5 for creating Raylib and @lino-levan for the initial bindings.

Also thanks to https://github.com/denoland/deno for the great runtime. It looks awesome.
