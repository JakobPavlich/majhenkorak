import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="toast"
export default class extends Controller {
  connect() {
    this.timeout = setTimeout(() => {
      this.dismiss();
    }, 4000);
  }

  dismiss() {
    this.element.classList.add("toast--out");

    this.element.addEventListener(
      "animationend",
      () => {
        this.element.remove();
      },
      { once: true },
    );
  }

  disconnect() {
    clearTimeout(this.timeout);
  }
}
