// Import the `esbuild` package installed by `vite`

import { createRequire } from "module"

function requireFrom(contextModuleName: string, wantedModuleName: string) {
  const contextModulePath = require.resolve(contextModuleName);
  const customRequire = createRequire(contextModulePath);
  return customRequire(wantedModuleName);
}

export default requireFrom("vite", "esbuild") as typeof import("esbuild");
