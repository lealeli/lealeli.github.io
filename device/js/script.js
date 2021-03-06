let slider = document.querySelectorAll(".slider_item");
let sliderInput = document.querySelectorAll(".slider > input");

for (let element of sliderInput) {
  element.addEventListener("change", (event) => {
    const num = event.target.dataset.num;
    for (let elem of slider) {
      elem.classList.add("visually-hidden");
    }

    document.querySelector(".slider_item:nth-child("+num+")").classList.remove("visually-hidden");
  });
}

let link_lost = document.querySelector(".about_write");
let popup_lost = document.querySelector(".contact-form");
let close_lost = document.querySelector(".contact-form .close");
let form = popup_lost.querySelector("form");
let nameHelp = popup_lost.querySelector("[name='name']");
let email = popup_lost.querySelector("[name='email']");
let comment = popup_lost.querySelector("[name='comment']");
let storage = localStorage.getItem("name");

link_lost.addEventListener("click", function (event) {
  event.preventDefault();
  popup_lost.classList.add("modal-ok-show");
  if (storage) {
    nameHelp.value = storage;
    email.focus();
  } else {
    nameHelp.focus();
  }
});

form.addEventListener("submit", function (event) {
  if (!nameHelp.value) {
    event.preventDefault();
    nameHelp.classList.add("modal-error");
  } else {
    localStorage.setItem("name", nameHelp.value);
  }

  if (!email.value) {
    event.preventDefault();
    email.classList.add("modal-error");
  } else {
    localStorage.setItem("name", email.value);
  }
  if (!comment.value) {
    event.preventDefault();
    comment.classList.add("modal-error");
  } else {
    localStorage.setItem("name", comment.value);
  }

});

close_lost.addEventListener("click", function (event) {
  event.preventDefault();
  popup_lost.classList.remove("modal-ok-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup_lost.classList.contains("modal-ok-show")) {
      popup_lost.classList.remove("modal-ok-show");
    }
  }
});

let mapOpen = document.querySelector(".map");
let mapPopup = document.querySelector(".modal-content-map");
let mapClose = mapPopup.querySelector(".close");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-ok-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-ok-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-ok-show")) {
      mapPopup.classList.remove("modal-ok-show");
    }
  }
});
