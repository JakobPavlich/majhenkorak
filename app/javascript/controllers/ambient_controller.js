import { Controller } from "@hotwired/stimulus";
import gsap from "gsap";

// Connects to data-controller="ambient"
export default class extends Controller {
  static targets = ["indigo", "teal", "peach"];

  connect() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.animate();
      }, 200);
    });
    if (window.matchMedia("(max-width: 768px)").matches) {
      gsap.delayedCall(0.4, () => {
        gsap.set(".ambient-light", {
          filter: "blur(60px)",
        });
      });
    }
  }
  animate() {
    gsap.to(this.indigoTarget, {
      x: "15vw",
      y: "8vh",
      duration: 8,
      scale: 1.1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(this.tealTarget, {
      x: "-12vw",
      y: "10vh",
      duration: 10,
      scale: 1.15,
      delay: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(this.peachTarget, {
      x: "15vw",
      y: "-12vh",
      duration: 12,
      delay: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }
}
