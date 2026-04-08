"use client";

import { useEffect } from "react";

export function NetlifyIdentity() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const netlifyIdentity = (window as unknown as Record<string, unknown>)
        .netlifyIdentity as { on?: (event: string, cb: () => void) => void };
      if (netlifyIdentity?.on) {
        netlifyIdentity.on("init", () => {
          // nothing needed
        });
        netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    };
  }, []);

  return null;
}
