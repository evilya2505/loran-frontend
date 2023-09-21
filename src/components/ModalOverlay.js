import React from "react";

function ModalOverlay({ children, closePopup }) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePopup]);

  function handleOverlayClick(e) {
    if (e.target.classList.value.includes("modal-overlay")) {
      closePopup();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      {children}
    </div>
  );
}

export default ModalOverlay;
