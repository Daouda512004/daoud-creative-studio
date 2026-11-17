import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

/** Hides the 3D scene if the device can't run WebGL, instead of breaking the page. */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  override render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** Interactive 3D hero visual. Loads only in the browser, after the page is shown. */
export function HeroScene({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div data-hero-scene aria-hidden="true" className={cn("relative", className)}>
      {mounted && (
        <SceneBoundary>
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </SceneBoundary>
      )}
    </div>
  );
}
