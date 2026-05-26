import { join, normalize, isAbsolute } from "node:path";


export function librarySuffix() {
  switch (Deno.build.os) {
    case "linux":
      return "so";
    case "darwin":
      return "dylib";
    case "windows":
      return "dll";
    default:
      return "so";
  }
}

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

export function denoCacheDir() {
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
