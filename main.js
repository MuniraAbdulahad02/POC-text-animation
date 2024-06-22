import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger for scrolling animations

// import './style.css';

// Immediate action
// gsap.set

// animate value to some css prop
// gsap.to

// animate value from css prop to some css prop
// gsap.fromTo

// Alpha -> opacity
// X,Y -> moving an object
// Scale -> scaling an object 

const $text = document.getElementById("title");
const $use = document.getElementById("use");

gsap.set([$text, $use], { alpha: 0.0, y: 10.0 });

gsap.to([$text, $use], { alpha: 1.0, ease: "none", duration: 1.0 });
gsap.to([$text, $use], { y: 0.0, ease: "ease.out", duration: 1.5 });

const $name = document.getElementById("name")
const $portfolio = document.getElementById("portfolio")
const $button = document.getElementById("button")

gsap.set([$name, $portfolio], { alpha: 0.0, y: 100 });

const handleClick = () => {
  gsap.to([$name, $portfolio], { alpha: 1.0, ease: "none", duration: 1.0 });
  gsap.to([$name, $portfolio], { y: 0.0, ease: "bounce.out", duration: 1.5 });
};

$button.addEventListener("click", handleClick);

gsap.registerPlugin(ScrollTrigger);

const $additionalText = document.getElementById("additional-text");

gsap.set($additionalText, { opacity: 0, y: 20 });


function triggerAnimation(element) {
  // Animation when scrolling triggers the section
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: element, // Section that triggers the animation
      ease: "power2.out", // Easing effect
    },
  });
}

triggerAnimation("#additional-text")

// const listID = ["#additional-text"]

// listID.forEach((id) => {
//   triggerAnimation(id);
// })

