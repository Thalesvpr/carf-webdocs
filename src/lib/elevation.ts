import type { CSSProperties } from "react";

type ElevationStyle = Pick<CSSProperties, "boxShadow">;

export const elevation: Record<string, ElevationStyle> = {
  level0: {},
  level1: { boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  level2: { boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
  level3: { boxShadow: "0 4px 8px rgba(0,0,0,0.15)" },
};
