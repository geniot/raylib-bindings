import { isAbsolute, join, normalize } from "node:path";
import { RAYLIB } from "./raylib.ts";
import { ensureDir } from "@std/fs";

//most of it is based on code from https://github.com/littledivy/plug/blob/main/download.ts

export async function reembed(): Promise<string> {
  const libName = libraryName();
  const fileName = libName + "." + defaultExtensions[Deno.build.os];
  const path: string = denoCacheDir() || "." + "/raylib/";
  await ensureDir(path);
  Deno.writeFileSync(
    path + fileName,
    Uint8Array.fromBase64(RAYLIB.get(libName)!),
  );
  return path + fileName;
}

function libraryName(): string {
  return defaultPrefixes[Deno.build.os] + "raylib_" + Deno.build.arch +
    (Deno.env.get("RL_BUILD") || "");
}

export type OsRecord<T> = { [os in typeof Deno.build.os]: T };

export const ALL_OSS = [
  "darwin",
  "linux",
  "windows",
  "freebsd",
  "netbsd",
  "aix",
  "solaris",
  "illumos",
];

export const defaultExtensions: OsRecord<string> = {
  darwin: "dylib",
  linux: "so",
  windows: "dll",
  freebsd: "so",
  netbsd: "so",
  aix: "so",
  solaris: "so",
  illumos: "so",
  android: "so",
};

export const defaultPrefixes: OsRecord<string> = {
  darwin: "lib",
  linux: "lib",
  netbsd: "lib",
  freebsd: "lib",
  aix: "lib",
  solaris: "lib",
  illumos: "lib",
  windows: "",
  android: "lib",
};

// The rest of is based on code from denoland/deno_cache by the Deno authors
// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

export function homeDir(): string | undefined {
  switch (Deno.build.os) {
    case "windows":
      return Deno.env.get("USERPROFILE");
    case "linux":
    case "darwin":
    case "freebsd":
    case "netbsd":
    case "aix":
    case "solaris":
    case "illumos":
      return Deno.env.get("HOME");
    default:
      throw Error("unreachable");
  }
}

export function cacheDir(): string | undefined {
  if (Deno.build.os === "darwin") {
    const home = homeDir();
    if (home) {
      return join(home, "Library/Caches");
    }
  } else if (Deno.build.os === "windows") {
    return Deno.env.get("LOCALAPPDATA");
  } else {
    const cacheHome = Deno.env.get("XDG_CACHE_HOME");
    if (cacheHome) {
      return cacheHome;
    } else {
      const home = homeDir();
      if (home) {
        return join(home, ".cache");
      }
    }
  }
}

export function denoCacheDir(): string | undefined {
  const dd = Deno.env.get("DENO_DIR");
  let root;
  if (dd) {
    root = normalize(isAbsolute(dd) ? dd : join(Deno.cwd(), dd));
  } else {
    const cd = cacheDir();
    if (cd) {
      root = join(cd, "deno");
    } else {
      const hd = homeDir();
      if (hd) {
        root = join(hd, ".deno");
      }
    }
  }

  return root;
}
