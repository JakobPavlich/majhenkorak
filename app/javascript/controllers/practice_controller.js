import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

// Connects to data-controller="practice"
export default class extends Controller {
  static targets = ["naprej", "vijuga"];
  connect() {
    const naprej = document.getElementById("naprej");
    const nazaj = document.getElementById("nazaj");
    const vijuga = document.getElementById("vijuga");
    const krog = document.getElementById("mali_krog");
    const kvadrat = document.getElementById("kvadrat");

    this.tl = gsap.timeline({ paused: true });
    this.tl
      .to(vijuga, {
        duration: 1,
        drawSVG: "0%",
        ease: "power1.inOut",
        stroke: "hsla(315 60.8% 59% / 0.77)",
      })
      .to(kvadrat, {
        morphSVG: krog,
        duration: 2,
        ease: "bounce.in",
      });

    naprej.onclick = () => {
      this.tl.play();
    };
    nazaj.onclick = () => {
      this.tl.reverse();
    };
  }
}
