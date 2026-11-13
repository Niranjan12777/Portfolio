import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import "./DescriptionModal.css";

function DescriptionModal({ title, description, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <div className="description-overlay" onClick={onClose}>
      <div
        className="description-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="description-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="description-modal-header">
          <div>
            <p>PROJECT DESCRIPTION</p>
            <h2 id="description-modal-title">{title}</h2>
          </div>

          <X size={25} className="description-close" onClick={onClose} aria-label="Close description"></X>
        </div>

        <div className="description-modal-body">
          {description}
        </div>

      </div>
    </div>,
    document.body
  );
}

export default DescriptionModal;
