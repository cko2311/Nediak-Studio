import gsap from "gsap";

import { ScrollTrigger, SplitText, CustomEase } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

const DURATION = 1.5;
const EASE = "expo.out";
// Configuring GSAP with custom settings that aren't Tween-specific
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

// Setting default animation properties that should be inherited by ALL tweens
gsap.defaults({
  duration: DURATION,
  ease: EASE,
});

// Once the desired configurations are set, we simply export what we need to work with in the future.
export { DURATION, EASE, gsap, ScrollTrigger, SplitText };
