import { gsap } from "gsap";
import './style.css';

// Immediate action
// gsap.set

// animate value to some css prop
// gsap.to

// animate value from css prop to some css prop
// gsap.fromTo

// Alpha -> opacity
// X,Y -> moving an object
// Scale -> scaling an object 

const $name = document.getElementById("name")
const $portfolio = document.getElementById("portfolio")
const $button = document.getElementById("button")

gsap.set([$name, $portfolio], { alpha: 0.0, y: 100 });

const handleClick = () => {
  gsap.to([$name, $portfolio], { alpha: 1.0, ease: "none", duration: 1.0 });
  gsap.to([$name, $portfolio], { y: 0.0, ease: "bounce.out", duration: 1.5 });
};

$button.addEventListener("click", handleClick);
