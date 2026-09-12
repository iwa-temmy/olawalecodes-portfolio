import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let refreshTimeout: number | undefined;
const scheduleRefresh = () => {
  window.clearTimeout(refreshTimeout);
  refreshTimeout = window.setTimeout(() => ScrollTrigger.refresh(), 150);
};

interface ScrollRevealOptions {
  selector?: string;
  y?: number;
  stagger?: number;
  start?: string;
}

export const useScrollReveal = <T extends HTMLElement>({
  selector = ":scope > *",
  y = 40,
  stagger = 0.12,
  start = "top 80%",
}: ScrollRevealOptions = {}) => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const targets = container.querySelectorAll(selector);

      gsap.from(targets.length ? targets : container, {
        opacity: 0,
        y,
        duration: 0.8,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: "play none none reverse",
        },
      });

      const images = container.querySelectorAll("img");
      images.forEach((img) => {
        if (img.complete) return;
        img.addEventListener("load", scheduleRefresh, { once: true });
      });
    }, container);

    return () => ctx.revert();
  }, [selector, y, stagger, start]);

  return containerRef;
};
