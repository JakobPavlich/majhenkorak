import "@hotwired/turbo-rails";
import "./controllers";

import "trix";
import "@rails/actiontext";

document.addEventListener("turbo:load", () => {
  document.querySelectorAll(".cf-turnstile").forEach((element) => {
    if (window.turnstile && !element.querySelector("iframe")) {
      window.turnstile.render(element, {
        sitekey: element.dataset.sitekey,
      });
    }
  });
});
