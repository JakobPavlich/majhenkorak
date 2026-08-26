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
    naprej.onclick = () => {
      gsap.to(vijuga, { duration: 1, drawSVG: "0%", ease: "power1.inOut" });
    };
    nazaj.onclick = () => {
      gsap.to(vijuga, { duration: 1, drawSVG: "100%", ease: "power1.inOut" });
    };
  }
}
