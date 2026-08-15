import { Controller } from "@hotwired/stimulus";
import gsap from "gsap";

export default class extends Controller {
  static targets = ["front", "back"];

  static values = {
    count: Number,
  };

  connect() {
    console.log("SNOW CONNECTED");
    console.log("count:", this.countValue);
    const size = gsap.utils.random(1, 3, 0);
    this.createSnow(this.frontTarget, this.countValue / 2, 3, 4, 8);
    this.createSnow(this.backTarget, this.countValue / 2, 2, 8, 12);
  }

  createSnow(container, amount, size, minSpeed, maxSpeed) {
    console.log("creating", amount, "flakes");

    for (let i = 0; i < amount; i++) {
      const flake = document.createElement("div");

      flake.classList.add("snowflake");
      const size = gsap.utils.random(1, 3, 0);
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;

      container.appendChild(flake);

      this.animateFlake(flake, minSpeed, maxSpeed);
    }
  }

  animateFlake(flake, minSpeed, maxSpeed) {
    const duration = gsap.utils.random(minSpeed, maxSpeed);

    gsap.set(flake, {
      left: gsap.utils.random(0, 180),
      top: gsap.utils.random(-300, 0),
    });

    gsap.to(flake, {
      top: 330,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        top: (value) => {
          if (parseFloat(value) >= 330) {
            return `${gsap.utils.random(-300, -20)}px`;
          }

          return value;
        },
      },
    });

    gsap.to(flake, {
      x: gsap.utils.random(-30, 30),
      duration: duration / 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }
}
