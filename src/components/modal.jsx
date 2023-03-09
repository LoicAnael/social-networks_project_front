import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ text, closeModal }) {
  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  };
  return (
    <div className="modal-container" onClick={handleClick}>
      <div className="modal">
        <div className="modal-header">
          <FontAwesomeIcon
            icon={faXmark}
            className="modal-header__button"
            onClick={closeModal}
          />
        </div>
        <div className="modal-text">
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default Modal;
