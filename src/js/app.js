import { modal, modalBackButton, form } from "./elements";
import { closeModal, handleClickingOutsideModal, handleKeyPress } from "./modal";
import handleFormSubmit from "./handlers";

function init() {
  form.addEventListener("submit", handleFormSubmit);
  window.addEventListener("keydown", handleKeyPress);
  modal.addEventListener("click", handleClickingOutsideModal);
  modalBackButton.addEventListener("click", closeModal);
}

// Initiate the app
init();
