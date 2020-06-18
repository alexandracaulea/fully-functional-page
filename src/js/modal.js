import { modal, overlay } from "./elements";

// Open the modal
export function openModal() {
  overlay.classList.add("modal-is-visible");
  modal.classList.add("modal-open");
}

// Handle clicking outside the modal
export function handleClickingOutsideModal(e) {
  const isOutsideModal = !e.target.closest(".modal__inner");

  if (isOutsideModal) {
    closeModal();
  }
}

// Handle pressing any key
export function handleKeyPress(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

// Handle closing the modal
export function closeModal() {
  if (!overlay.classList.contains("modal-is-visible")) return;
  overlay.classList.remove("modal-is-visible");

  if (!modal.classList.contains("modal-open")) return;
  modal.classList.remove("modal-open");
}
