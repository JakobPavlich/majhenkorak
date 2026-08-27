import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";

// Connects to data-controller="cloud"
export default class extends Controller {
  static targets = ["sprednji", "zadnji"];
  connect() {
    const sprednjiOblak = document.getElementById("oblak_spredaj");
    const zadnjiOblak = document.getElementById("oblak_zadaj");
    const zakasnelOblak = document.getElementById("oblak_zamik");
    const napredniOblak = document.getElementById("path506");

    gsap.to(zadnjiOblak, {
      x: 600,
      y: 30,
      duration: 45,
      repeat: -1,
    });
    gsap.to(sprednjiOblak, {
      x: 600,
      y: 10,
      duration: 32,
      repeat: -1,
    });
    gsap.to(zakasnelOblak, {
      x: 600,
      y: -10,
      duration: 50,
      delay: 15,
      repeat: -1,
    });
    gsap.to(napredniOblak, {
      x: 600,
      y: -18,
      duration: 30,
    });
  }
}
