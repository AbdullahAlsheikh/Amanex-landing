// components/ClarityProvider.tsx
"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityProvider() {
  useEffect(() => {
    Clarity.init("ru41ee2jpg");
  }, []);

  return null;
}
