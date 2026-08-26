import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

// Connects to data-controller="practice"
export default class extends Controller {
  connect() {}
}
