import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initSmoothScroll() {
  // 1. Cleanup: Kill the previous instance AND its ticker
  if (window.lenis) {
    // This is the important part: remove the old ticker listener
    gsap.ticker.remove(window.lenis.tickerFn);
    window.lenis.destroy();
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // Store the ticker function on the lenis object so we can reference it for removal later
  lenis.tickerFn = (time) => {
    lenis.raf(time * 1000);
  };

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add(lenis.tickerFn);
  gsap.ticker.lagSmoothing(0);

  // Jump to top (optional, depending on your route transition logic)
  lenis.scrollTo(0, { immediate: true });

  window.lenis = lenis;

  // Sync ScrollTrigger
  ScrollTrigger.refresh();

  return lenis;
}
