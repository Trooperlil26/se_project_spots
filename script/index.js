const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const addProfileBtn = document.querySelector(".profile__add-btn");
const addProfileModal = document.querySelector("#new-post-modal");
const addProfileCloseBtn = addProfileModal.querySelector(".modal__close-btn");
const addProfileForm = addProfileModal.querySelector(".modal__form");
const addProfileCardCaptionInput = addProfileModal.querySelector(
  "#card-caption-input"
);
const addProfileCardImageInput =
  addProfileModal.querySelector("#card-image-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const ProfileCardImageEl = document.querySelector(".profile__image");
const ProfileCardCaptionEl = document.querySelector(".profile__caption");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

addProfileBtn.addEventListener("click", function () {
  addProfileModal.classList.add("modal_is-opened");
});

addProfileCloseBtn.addEventListener("click", function () {
  addProfileModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  addProfileModal.classList.remove("modal_is-opened");
}

addProfileForm.addEventListener("submit", handleAddCardSubmit);
