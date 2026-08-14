import { Controller } from "@hotwired/stimulus";
import gsap from "gsap";

// Connects to data-controller="ambient"
export default class extends Controller {
  static targets = ["indigo", "teal", "peach"];

  connect() {
    this.animate();
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
