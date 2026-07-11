import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import Lenis from "lenis";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// SplitText.create(".split", {
//     type: "lines, words",
//     mask: "lines",
//     autoSplit: true,
//     onSplit(self) {
//         return gsap.from(self.words, {
//             duration: 1,
//             y: 100,
//             autoAlpha: 0,
//             stagger: 0.05
//         });
//     }
// });

let sections = gsap.utils.toArray(".snapable");

// sections.forEach((section, i) => {
//     console.log(section, i);
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: "bottom bottom",
//         markers: true,
//         snap: {
//             snapTo: "labels",
//             duration: { min: 0.2, max: 0.75 },
//             delay: 0.1,
//             ease: "power1.inOut"
//         }
//     });
// });