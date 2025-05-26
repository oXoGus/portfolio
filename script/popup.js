function openPopup(id) {
  const overlay = document.getElementById(id);
  overlay.style.display = "flex";
  document.body.style.overflow = 'hidden';

  // Petit délai pour laisser le navigateur "appliquer" le display avant la classe
  setTimeout(() => {
      overlay.classList.add("show");
  }, 10); // 10ms suffit pour que la transition soit prise en compte
}

function closePopup(event, id) {
  const overlay = document.getElementById(id);
  document.body.style.overflow = 'auto';
  if (event.target === overlay) {
    overlay.classList.remove("show");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 200);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const popupId = params.get("id");

  if (popupId) {
    const popupElement = document.getElementById(popupId);
    if (popupElement) {
      // Supposons que le popup s'affiche avec une fonction `openPopup(id)`
      openPopup(popupId);
    }
  }
});