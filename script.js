const popup = document.querySelector(".profile__edit-form");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".profile__edit-form");
const profileNameInput = document.querySelector(".profile__edit-form-name");
const profileNameInformationInput = document.querySelector(
  ".profile__edit-form-extra-information"
);
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".profile__close-button");

const profileName = document.querySelector(".profile__name");
const profileNameInformation = document.querySelector(
  ".profile__name-information"
);

popupOpenButton.addEventListener("click", function () {
  overlay.classList.add("overlay--show");
});

popupCloseButton.addEventListener("click", function () {
  profileNameInput.value = profileName.innerText;
  profileNameInformationInput.value = profileNameInformation.innerText;
  overlay.classList.remove("overlay--show");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.innerText = profileNameInput.value;
  profileNameInformation.innerText = profileNameInformationInput.value;
  overlay.classList.remove("overlay--show");
});

document.querySelectorAll(".element__like").forEach(function (like) {
  like.addEventListener("click", function () {
    like.classList.toggle("element__like_active");
  });
});
